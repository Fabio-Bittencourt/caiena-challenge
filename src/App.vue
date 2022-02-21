<script>
import InputText from "./components/InputText.vue";
import SubmitButton from "./components/SubmitButton.vue";
import MenuBar from "./components/MenuBar.vue";
import FooterBar from "./components/FooterBar.vue";
import TableList from './components/TableList.vue'

export default {
  components: {
    InputText,
    SubmitButton,
    MenuBar,
    FooterBar,
    TableList,
  },
};
</script>

<template>
  <header>
    <MenuBar />
  </header>
  <main>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <InputText />
    <SubmitButton />
    <TableList />
  </main>
  <FooterBar />
</template>
