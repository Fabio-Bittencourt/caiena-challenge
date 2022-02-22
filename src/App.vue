<script>
import MenuBar from "./components/MenuBar.vue";
import FooterBar from "./components/FooterBar.vue";
import SearchPage from "./page/SearchPage.vue";

//TODO Generate keys for access the github api
//TODO Install vuex to handle stores and actions
//TODO Services to handle the search of users
//TODO Pagination allowing to change between 20, 30, 40, 50, 60, 100
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
    <main class="bg-slate-50 flex-grow">
      <SearchPage />
    </main>
    <FooterBar />
  </div>
</template>
