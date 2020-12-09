import React from "react";
import { NoteType } from "../../domain/note";
import clsx from "clsx";
import { usePressObserver } from "../PressObserver";

interface KeyProps {
  type: NoteType;
  label: string;
  disabled?: boolean;
  onDown: React.EventHandler<HTMLButtonElement>;
  onUp: React.EventHandler<HTMLButtonElement>;
}

export const Key = ({ type, label, disabled, onDown, onUp }: KeyProps) => {
  const pressed = usePressObserver({
    watchKey: label,
    onStartPress: onDown,
    onFinishPress: onUp,
  });

  return (
    <button
      className={clsx(`key key--${type}`, pressed && "is-active")}
      type="button"
      disabled={disabled}
      onMouseDown={onDown}
      onMouseUp={onUp}
    >
      {label}
    </button>
  );
};
