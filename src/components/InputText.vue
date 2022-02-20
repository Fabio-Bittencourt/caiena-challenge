<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>

<template>
  <div>
    <label> INPUT </label>
    <input
      class="border-solid border-2 border-red-500"
      type="text"
      v-model="value"
    />
  </div>
</template>

<style></style>
