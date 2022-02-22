<script>
import InputText from "../components/InputText.vue";
import SubmitButton from "../components/SubmitButton.vue";

export default {
  components: {
    InputText,
    SubmitButton,
  },
};
</script>

<template>
  <div class="flex content-start">
    <div class="w-full">
      <InputText />
    </div>
    <div class="w-full">
      <SubmitButton />
    </div>
  </div>
</template>
