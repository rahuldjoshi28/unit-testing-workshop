export const fakeRequest = (status, data, timeout) => {
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
