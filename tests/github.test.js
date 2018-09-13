const mockAxios = require('./__mocks__/axios');
const github = require("../src/models/github");
const userMockData = require('./__mockData__/userDetail.json');
const usersMockData = require('./__mockData__/usersDetail.json');

it("fetches user information from github", async() => {
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

it("should return empty Object in absence of mock implementaion", async() => {
    const users = await github.getUsersList("karthikj");
    expect(users).toBeDefined();
    expect(users).toEqual({});
});

it("fetches list of users from github", async() => {
    mockAxios.get.mockImplementation(() =>
        Promise.resolve({
            data: usersMockData
        })
    );
    const users = await github.getUsersList("karthikj");
    expect(users).toBeDefined();
    expect(users.total_count).toEqual(2);
});

describe('environmental variables', () => {
    const OLD_ENV = process.env;
    console.log(OLD_ENV.GITHUB_CLIENT_ID)

    beforeEach(() => {
        jest.resetModules() // this is important
        process.env = {...OLD_ENV };
        delete process.env.NODE_ENV;
    });

    afterEach(() => {
        process.env = OLD_ENV;
    });

    test('will receive process.env variables', () => {
        // set the variables
        process.env.NODE_ENV = 'dev';
        process.env.GITHUB_CLIENT_ID = '/new-prefix/';
        process.env.API_URL = 'https://new-api.com/';
        process.env.GITHUB_CLIENT_SECRET = '7080';


        // ... actual testing
    });
});