<template>
<v-container fluid class="fill-height w-100 d-flex flex-column">
  <h1 class="text-uppercase my-2 text-start align-self-start mx-2">Faça seu sanduiche</h1>
    <form class="w-75 mx-auto">
    <v-select
        label="Selecione o pão..."
        :items="paes"
        v-model="sanduiche.pao"
        class="mb-5"
    >
    </v-select>
    
    <v-select
        label="Selecione a carne..."
        :items="carnes"
        v-model="sanduiche.carne"
        class="mb-5"
    >
    </v-select>

    <h3>Adicionais:</h3>
    <div class="d-flex flex-wrap mb-10">
        <div v-for="(adicional, index) in adicionais"
        :key="index">
        <v-checkbox
        class=" px-5"
        :label="adicional"
        :value="adicional"
        v-model="sanduiche.adicionais"
        ></v-checkbox>
    </div>
    </div>

    <v-divider></v-divider>
    <h3>Salada:</h3>
    <div class="d-flex flex-wrap mb-10">
        <div v-for="(salada, index) in saladas"
        :key="index">
        <v-checkbox
        class="px-5"
        :label="salada"
        :value="salada"
        v-model="sanduiche.salada"
        ></v-checkbox>
    </div>
    </div>
    <v-divider></v-divider>
    <h3>Molhos:</h3>
    <div class="d-flex flex-wrap mb-10">
        <div v-for="(molho, index) in molhos"
        :key="index">
        <v-checkbox
        class=" px-5"
        :label="molho"
        :value="molho"
        v-model="sanduiche.molho"
        ></v-checkbox>
    </div>
    </div>
    <v-snackbar
      :timeout="2000"
    >
      <template v-slot:activator="{ props }">
        <v-btn type="submit" class="ma-2" v-bind="props" @click.prevent="salvarSanduiche()">Enviar</v-btn>
      </template>

      Pedido Criado
    </v-snackbar>
    </form>
    
    
</v-container>

</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';



const sanduiche = ref({
nome: 'Criado pelo cliente',
pao: '',
carne: '',
adicionais: [],
salada: [],
molho: []
})

const store = useStore()

const paes = ref([
'Três queijos',
'Italiano',
'Integral',
'Baguete',
'9 Grãos'
])

const carnes = ref([
'Frango empanado',
'Peixe empanado',
'Frango ao shoyo',
'Maminha ao molho'
])

const adicionais = ref([
'Queijo cheddar',
'Quejio suiço',
'Catupiry',
'Presunto',
'Bacon',

])

const saladas = ref([
'Alface',
'Tomate',
'Cebola',
'Pimentão',
'Picles',
'Azeitona',
'Manjericão'

])

const molhos = ref([
'Barbecue',
'Ketchup',
'Mostarda',
'Maionose',
'Maionose da casa',
'Mostarda e mel',
'Parmesão',
'Cebola agridoce'

])

function salvarSanduiche(){
    store.commit('addSanduiche', sanduiche.value);
    sanduiche.value = {
    pao: '',
    carne: '',
    adicionais: [],
    salada: [],
    molho: [],
  };

 
}





</script>
