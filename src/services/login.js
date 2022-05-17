import { fakeRequest } from "../utils";

export function validateCredentials(userName, password) {
  return fakeRequest("resolve", { valid: true, name: userName }, 2000);
}
