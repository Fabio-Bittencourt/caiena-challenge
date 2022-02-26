<script>
import SubmitButton from "../components/SubmitButton.vue";

export default {
  components: {
    SubmitButton,
  },
  data() {
    return {
      search: "",
      error: "",
      paginationArr: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      paginationSelected: "",
    };
  },
  methods: {
    async onSubmit(param) {
      try {
        if (param !== "") {
          this.$store.dispatch("getUsersBy", param);
        }
      } catch (e) {
        console.log(":::", e);
      }
    },
  },
};
</script>

<template>
  <div class="flex w-full">
    <form @submit.prevent="onSubmit({ search, paginationSelected })">
      <div class="flex-shrink-0">
        <input
          type="text"
          class="h-10 px-3 bg-gray-100 rounded-lg"
          v-model="search"
        />
        <select class="h-10 mx-2.5" v-model="paginationSelected">
          <option disabled value="">Paginação</option>
          <option v-for="(item, index) in paginationArr" :key="index">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="w-full mt-5">
        <SubmitButton />
      </div>
    </form>
  </div>
</template>
