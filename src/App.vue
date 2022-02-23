<script>
import MenuBar from "./components/MenuBar.vue";
import FooterBar from "./components/FooterBar.vue";
import SearchPage from "./page/SearchPage.vue";

//TODO Unit Tests
//TODO Inetgration Tests
//TODO Components Tests

//FIXME Improve exibition of users list (maybe)
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
    <main class="flex-grow bg-slate-50">
      <SearchPage />
    </main>
    <FooterBar />
  </div>
</template>
