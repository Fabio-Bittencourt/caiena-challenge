import request from "./request";

const instance = request.create({
  baseURL: "https://api.github.com/",
});

instance.defaults.headers.common["Authorization"] = `token ${
  import.meta.env.VITE_GITHUB_API_TOKEN
}`;
instance.defaults.headers.common["Accept"] = "application/vnd.github.v3+json";

export default {
  searchUsers: async (params, pagination) => {
    const queryString = `q=${encodeURIComponent(params)}`;

    const queryPagination = `per_page=${encodeURIComponent(
      pagination === "" ? 20 : pagination
    )}`;

    const { data } = await instance.get(
      `/search/users?${queryString}&${queryPagination}`
    );
    return data;
  },
};
