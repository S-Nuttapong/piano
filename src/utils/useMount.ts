import { useEffect } from "react";

export const useMount = (fn: Function) => {
  useEffect(() => {
    fn();
  }, []);
};
