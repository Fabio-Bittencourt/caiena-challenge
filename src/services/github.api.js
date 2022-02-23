import request from "./request";

const AUTH_TOKEN = import.meta.env.VITE_GITHUB_API_TOKEN;

const instance = request.create({
  baseURL: "https://api.github.com/",
});

instance.defaults.headers.common["Authorization"] = `token ${AUTH_TOKEN}`;
instance.defaults.headers.common["Accept"] = "application/vnd.github.v3+json";

export default {
  searchUsers: async (params, pagination) => {
    const queryString = `q=${encodeURIComponent(params)}`;
    const { data } = await instance.get(`/search/users?${queryString}`);
    return data;
  },
};
