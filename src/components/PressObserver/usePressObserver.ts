import { useState, useEffect } from "react";
import { Key } from "../../domain/keyboard";

type IsPressed = boolean;
type EventCode = string;

interface Settings {
  watchKey: Key;
  onStartPress: Function;
  onFinishPress: Function;
}

const fromEventCode = (code: EventCode) => {
  const regexPattern = /Key|Digit/gi;
  return code.replace(regexPattern, "");
};

const equal = (watchkey: Key, eventCode: EventCode): boolean => {
  return watchkey.toUpperCase() === fromEventCode(eventCode).toUpperCase();
};

export const usePressObserver = ({
  watchKey,
  onStartPress,
  onFinishPress,
}: Settings): IsPressed => {
  const [pressed, setPressed] = useState<IsPressed>(false);

  useEffect(() => {
    const handlePressStart = ({ code }: KeyboardEvent): void => {

        //keydown calls this func, 
        //watchkey !== code => true: user hasn't pressed yet
      if (pressed || !equal(watchKey, code)) return setPressed(true);
      onStartPress();
    };

    const handlePressFinish = ({ code }: KeyboardEvent): void => {
      if (!pressed || !equal(watchKey, code)) return setPressed(false);
      onFinishPress();
    };

    document.addEventListener("keydown", handlePressStart);
    document.addEventListener("keyup", handlePressFinish);

    return () => {
      //important to renove eventlistener fromm cleanup function (returned from useEffect)
      //prevent memory leaks and unwanted event handlers call
      document.removeEventListener("keydown", handlePressStart);
      document.removeEventListener("keyup", handlePressFinish);
    };
  }, [watchKey, pressed, setPressed, onStartPress, onFinishPress]);
  return pressed;
};
