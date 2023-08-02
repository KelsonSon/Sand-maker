<template>
    <v-container fluid>
      <h1 class="text-uppercase my-2">Nossos Sanduiches</h1>
      <v-row>
        <v-col cols="12" sm="6" md="4" class="px-0 px-sm-3" v-for="(listaSanduiche, index) in listaSanduiches" :key="index">
          <v-card>
            <v-img max-width="600px" :src="listaSanduiche.img"></v-img>
            <v-card-title>
              {{ listaSanduiche.nome }}
            </v-card-title>
            <v-card-text>
              <div>
                <strong>Pão:</strong> {{ listaSanduiche.pao }}
              </div>
              <v-divider></v-divider>
              <div>
                <strong>Carne:</strong> {{ listaSanduiche.carne }}
              </div>
              <v-divider></v-divider>
              <div class="d-flex">
                <strong>Adicionais:</strong>
              <div v-for="(item, index) in listaSanduiche.adicionais" :key="index">
                 <span class="mx-1">{{ item }} <span> - </span> </span>
              </div>
              </div>
              <v-divider></v-divider>
              <div class="d-flex">
                <strong>Salada:</strong>
              <div v-for="(item,index) in listaSanduiche.salada" :key="index">
                  <span class="mx-1">{{ item }} <span> - </span></span>
              </div>
              </div>
              <v-divider></v-divider>
              <div class="d-flex">
                <strong>Molhos:</strong>
              <div v-for="(item,index) in listaSanduiche.molho" :key="index">
                 <span class="mx-1">{{ item }} <span> - </span></span>
              </div>
              </div>
            </v-card-text>
            <v-card-actions>

              <v-snackbar
              :timeout="800">
                <template v-slot:activator="{ props }">
                  <v-btn class="ma-2" v-bind="props" @click.prevent="salvarSanduiche(listaSanduiche)">Adicionar</v-btn>
                </template>
              {{ listaSanduiche.nome }} adicionado
              </v-snackbar>

            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
  
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const listaSanduiches = ref([
{   
    nome: 'Picanha Barbecue',
    img: './img/item (1).jpg',
    pao: 'Três queijos',
    carne: 'Picanha',
    adicionais: ['Queijo cheddar'],
    salada: ['Alface', 'Tomate', 'Cebola'],
    molho: ['Barbecue', 'Cebola agridoce']
},
{   
    nome: 'Salame Torre Salada',
    img: './img/item (2).jpg',
    pao: 'Torrada',
    carne: 'Salame',
    adicionais: ['Queijo cheddar'],
    salada: ['Alface', 'Tomate', 'Cebola', 'Manjericão'],
    molho: ['Cebola agridoce']
},
{   
    nome: 'Croassant Peru',
    img: './img/item (3).jpg',
    pao: 'Croassant',
    carne: 'Peito de peru',
    adicionais: ['Queijo muçarela'],
    salada: ['Picles', 'Manjericão'],
    molho: ['Mostarda e mel', 'Cebola agridoce']
},
{   
    nome: 'Frango Cheddar',
    img: './img/item (4).jpg',
    pao: 'Três queijos',
    carne: 'Frango desfiado',
    adicionais: ['Queijo cheddar', 'Ovo cozido'],
    salada: ['Alface', 'Cebola roxa'],
    molho: ['Maionese da casa']
},
{   
    nome: 'Salada Peru',
    img: './img/item (5).jpg',
    pao: 'Forma grãos',
    carne: 'Peito de peru',
    adicionais: ['Queijo muçarela', 'Presunto'],
    salada: ['Alface', 'Tomate', 'Cebola'],
    molho: ['Cebola agridoce', 'Maionese da casa']
}
]);

function salvarSanduiche(sanduicheSelecionado) {
const novoSanduiche = {
    nome: sanduicheSelecionado.nome,
    pao: sanduicheSelecionado.pao,
    carne: sanduicheSelecionado.carne,
    adicionais: [...sanduicheSelecionado.adicionais],
    salada: [...sanduicheSelecionado.salada],
    molho: [...sanduicheSelecionado.molho],
};

store.commit('addSanduiche', novoSanduiche);
}
</script>
