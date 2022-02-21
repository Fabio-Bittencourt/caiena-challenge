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
    <label>
      <span class="text-xs">Input</span>
    </label>
    <input
      class="w-full h-10 rounded-lg bg-gray-100 px-3"
      type="text"
      v-model="value"
    />
    <span class="text-xs text-red-600">Eu sou uma msg de erro</span>
  </div>
</template>

<style></style>
