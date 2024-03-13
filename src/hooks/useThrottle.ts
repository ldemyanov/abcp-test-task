import { useMemo } from "react";

function throttle<T extends Array<unknown>>(func: (...args: T) => void, ms: number) {
  let isThrottled = false;
  let savedArguments: T | null;

  function wrapper(...args: T) {

    if (isThrottled) {
      savedArguments = args;
      return;
    }

    func.apply(this, args);
    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArguments) {
        wrapper(...args);
        savedArguments = null;
      }
    }, ms);
  }

  return wrapper;
}

export function useThrottle<T extends Array<unknown>>(cb: (...args: T) => void, ms: number) {
  return useMemo(() => throttle(cb, ms), [cb, ms]);
}


