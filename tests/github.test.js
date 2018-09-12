const mockAxios = require('./__mocks__/axios');
const github = require("../src/models/github");
const userMockData = require('./__mockData__/userDetail.json');
const usersMockData = require('./__mockData__/usersDetail.json');

it("fetches user information from github", async () => {
    mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
            data: userMockData

        })
    );
    const user = await github.getUserInfo("karthikjeeyar");
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(user).toBeDefined()
    expect(user.login).toEqual('karthikjeeyar')
});

it("should return empty Object in absence of mock implementaion", async () => {
    const users = await github.getUsersList("karthikj");
    expect(users).toBeDefined();
    expect(users).toEqual({});
});

it("fetches list of users from github", async () => {
    mockAxios.get.mockImplementation(() =>
        Promise.resolve({
            data: usersMockData
        })
    );
    const users = await github.getUsersList("karthikj");
    expect(users).toBeDefined();
    expect(users.total_count).toEqual(2);
});