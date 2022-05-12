const createPromiseWithDelay = (data, timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, timeout);
  });
};

export function validateCredentials(userName, password) {
  return createPromiseWithDelay({ valid: true, name: userName }, 2000);
}
