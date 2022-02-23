import github from "@/services/github.api";

const actions = {
  getUsersBy: async (context, filter) => {
    const res = await github.searchUsers(filter);
    context.commit("users", res.data);
  },
};

export default actions;
