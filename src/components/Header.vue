<template>
 <v-toolbar app>
    <v-toolbar-title class="header__logo-section">
        <img src="../assets/logo-instala-small.png" />
    </v-toolbar-title>
    <v-toolbar-items>
        <v-btn flat to="/">Painel de OS</v-btn>
        <v-btn flat to="/portfolio">Técnicos</v-btn>
        <v-btn flat to="/stocks">Equipamentos</v-btn>
         <v-btn flat to="/stocks">Cliente</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
        <v-btn flat>Sair</v-btn>
    </v-toolbar-items>
 </v-toolbar>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>

<style scoped>
    .header__logo-section {
        margin-right: 2em;
    }
</style>