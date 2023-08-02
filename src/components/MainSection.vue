<template>
<v-container fluid>
    <v-tabs v-model="tab" color="primary" class="bg-white w-100 d-flex justify-center">
    <v-spacer></v-spacer>
    <v-tab class="text-sm-h5 text-body-2 px-1 px-sm-5" :value="0">    
        Faça o seu
    </v-tab>
    <v-tab class="text-sm-h5 text-body-2 px-1 px-sm-5" :value="1">
        Nossos sanduiches
    </v-tab>
    <v-tab class="text-sm-h5 text-body-2 px-1 px-sm-5" :value="2">
        Pedidos
    </v-tab>
    <v-spacer></v-spacer>
    </v-tabs>

    <v-window v-model="tab" class="fill-height w-100">
    <v-window-item :value="0">
        <!-- Conteúdo da primeira guia -->
        <SandForm />
    </v-window-item>
    <v-window-item :value="1">
        <!-- Conteúdo da segunda guia -->
       <SandList />
    </v-window-item>
    <v-window-item :value="2">
        <!-- Conteúdo da terceira guia -->
        <SandBoard />
    </v-window-item>
    </v-window>
</v-container>
</template>

<script setup>
import SandForm from './SandForm.vue';
import SandBoard from './SandBoard.vue';
import SandList from './SandList.vue';
import { ref } from 'vue';


const tab = ref(0);

</script>

<style scoped>

</style>
