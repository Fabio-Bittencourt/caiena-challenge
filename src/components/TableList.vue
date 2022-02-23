<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["users"])
    },
};
</script>

<template>
  <div class="container">
    <div v-if="users.length === 0">
        <h2>Usuários ainda não foram carregados</h2>
    </div>
    <div v-else>
        <table
            class="flex-shrink-0 w-full text-lg text-center border-separate table-auto"
            >
            <thead>
                <tr class="h-12 text-white bg-red-500 shadow-md min-w-max rounded-t-md">
                    <th>Avatar</th>
                    <th>Nome</th>
                    <th>Link Perfil</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index" class="hover:bg-red-100">
                    <td>
                        <img :src="user.avatar_url" alt="" />
                    </td>
                    <td>{{user.login}}</td>
                    <td>
                        <a :href="user.html_url">Profile Link</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>
