import { validateCredentials } from "./login"
import * as utils from "../utils"


const fakeRequest = jest.spyOn(utils, "fakeRequest")

test('validateCredentials should get called and should return data', async () => {
    fakeRequest.mockResolvedValue("SUCCESS")
    const response = await validateCredentials("::username::", "::password::")
    expect(fakeRequest).toBeCalled()
    expect(response).toBe("SUCCESS")
})