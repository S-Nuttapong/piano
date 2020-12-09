import { useEffect } from "react";

//@ts-ignore
export const useMount = (fn: Function) => {
  useEffect(() => {
    fn();
  }, []);
};
