export const createPromiseWithDelay = (status, data, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === "resolve") {
        resolve(data);
        return;
      }
      reject(data);
    }, timeout);
  });
};

export function validateCredentials(userName, password) {
  return createPromiseWithDelay(
    "resolve",
    { valid: true, name: userName },
    2000
  );
}
