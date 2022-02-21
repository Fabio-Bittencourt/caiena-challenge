<script>
import MenuBar from "./components/MenuBar.vue";
import FooterBar from "./components/FooterBar.vue";
import SearchPage from "./page/SearchPage.vue";

export default {
  components: {
    MenuBar,
    FooterBar,
    SearchPage,
  },
};
</script>

<template>
  <div class="flex flex-col h-screen">
    <header class="w-full">
      <MenuBar />
    </header>
    <main class="bg-slate-50 flex-grow">
      <SearchPage />
    </main>
    <FooterBar />
  </div>
</template>
