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
        class="flex border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 justify-end items-center"
      >
        <div class="flex-col">
          <img class="h-16 w-auto sm:h-10" src="../assets/logo.png" />
        </div>
        <div class="flex-col flex-grow items-end">
          <p>Dev Challenge</p>
        </div>
        <div class="flex-col">
          <SearchForm />
        </div>
      </div>
    </div>
  </nav>
</template>
