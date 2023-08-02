<template>
    <v-app-bar
    fluid
    flat
    :elevation="5"
    scroll-behavior="hide"
    >
    <v-app-bar-title>SandMaker</v-app-bar-title>
    <v-app-bar-nav-icon variant="plain" class="mx-2 d-md-none"></v-app-bar-nav-icon>
   
    <div>
    <v-list class="d-none d-md-flex">
    <v-list-item>
        <v-btn variant="plain" class="px-0 px-md-3 mx-0 mx-md-3">home</v-btn>
    </v-list-item>
    <v-list-item>
        <v-btn variant="plain" class="px-0 px-md-3 mx-0 mx-md-3">sugestões</v-btn>
    </v-list-item>
    <v-list-item>
        <v-btn variant="plain" class="px-0 px-md-3 mx-0 mx-md-3">contato</v-btn>
    </v-list-item>
    </v-list>
    </div>

 
    </v-app-bar>
</template>
<script setup>

</script>

<style scoped>


</style>