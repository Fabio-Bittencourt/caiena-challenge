import request from "@octokit/request";

const AUTH_TOKEN = "000000000000000000"

const instance = request.default({
    headers: { authorization: `token ${AUTH_TOKEN}`},
});

export default {
  searchUsers: async (params) => {
    breakpoint();
    const users = await instance("GET /search/users", {
        headers,
        params,
    });
    breakpoint();
    return users;
  },
};
