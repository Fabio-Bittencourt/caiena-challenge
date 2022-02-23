import github from "@/services/github.api";

const actions = {
  getUsersBy: async (context, filter) => {
    const resp = await github.searchUsers(
      filter.search,
      filter.paginationSelected
    );
    context.commit("setUsers", resp);
  },
};

export default actions;
