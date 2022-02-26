<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["users"]),
  },
};
</script>

<template>
  <div class="container flex">
    <div v-if="users.length === 0">
      <h2>Usuários ainda não foram carregados</h2>
    </div>
    <div v-else>
      <div class="flex flex-wrap">
        <div
          v-for="(user, index) in users"
          :key="index"
          class="flex-shrink-0 p-10 m-10 bg-white border-b-2 w-180 h-180"
        >
          <div class="items-center justify-between">
            <div class="mx-2">
              <img
                :src="user.avatar_url"
                class="object-contain w-40 h-40 rounded-lg"
                alt="foto de perfil do usuario"
              />
            </div>
            <div class="text-center">
              <span class="text-gray-300 text-md"
                >Nome de perfil do usuário:
              </span>
              <p class="text-lg">{{ user.login }}</p>
            </div>
            <div
              class="w-full h-10 p-2 mt-20 text-center bg-red-500 border-gray-200 rounded-lg"
            >
              <a :href="user.html_url" class="text-white">Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* code... */
</style>
