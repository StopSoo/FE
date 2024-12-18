const createEventEmitter = (value) => {
  let handlers = [];

  const on = (handler) => handlers.push(handler);
  const off = (handler) => {
    handlers = handlers.filter((h) => h !== handler);
  };

  const get = () => value; // closer
  const set = (newValue) => {
    value = newValue;
    handlers.forEach((handler) => handler(value));
  };

  return { on, off, get, set };
};

export default createEventEmitter;
