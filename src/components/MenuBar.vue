<script>
import SearchForm from "../components/SearchForm.vue";

export default {
  components: {
    SearchForm,
  },
};
</script>

<template>
  <nav class="relative bg-white">
    <div class="w-full sm:px-6">
      <div
        class="py-6 border-b-2 border-gray-100 md:justify-between md:items-center md:flex"
      >
        <div class="flex-grow">
          <img class="w-auto h-16 sm:h-10" src="../assets/logo.png" />
        </div>
        <div class="flex-col w-40">
          <p>Dev Challenge</p>
        </div>
        <div class="flex-col items-end w-1/4">
          <SearchForm />
        </div>
      </div>
    </div>
  </nav>
</template>
