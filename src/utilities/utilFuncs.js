export function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId); // cancel any pending execution
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
