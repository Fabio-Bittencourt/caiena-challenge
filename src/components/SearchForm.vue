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
  <div class="flex content-start">
    <form @submit.prevent="onSubmit(search)">
      <div class="w-full">
        <input
          type="text"
          class="w-full h-10 px-3 bg-gray-100 rounded-lg"
          v-model="search"
        />
      </div>
      <div class="w-full">
        <SubmitButton />
      </div>
    </form>
  </div>
</template>
