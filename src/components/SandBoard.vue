<template>
    <v-container fluid>
        <h1 class="text-uppercase my-2">Pedidos</h1>
        <v-card class="pa-5 ma-5" v-for="(sanduiche, index) in sanduiches" :key="index">
        Nº {{ index + 1 }} {{ sanduiche.nome }}
        <div>
            <strong>Pão:</strong> {{ sanduiche.pao }}
        </div>
        <div>
            <strong>Carne:</strong> {{ sanduiche.carne }}
        </div>
        <div>
            <strong>Adicionais:</strong> {{ sanduiche.adicionais.join(', ') }}
        </div>
        <div>
            <strong>Salada:</strong> {{ sanduiche.salada.join(', ') }}
        </div>
        <div>
            <strong>Molhos:</strong> {{ sanduiche.molho.join(', ') }}
        </div>
        <div class="my-2">
            <v-snackbar
            :timeout="2000">
            <template v-slot:activator="{ props }">
                <v-btn class="ma-2" v-bind="props" @click.prevent="deletarSanduiche(sanduiche)">Deletar</v-btn>
            </template>
            Pedido Cancelado
            </v-snackbar>
            
        </div>
        <hr/>
        </v-card>
        
        
    </v-container>
</template>
  
<script setup>
import { useStore } from 'vuex';

const store = useStore();
const sanduiches = store.state.sanduiches;

function deletarSanduiche(sanduiche){
    const index = store.state.sanduiches.indexOf(sanduiche);
    if (index !== -1) {
        store.state.sanduiches.splice(index, 1);
    }
}
</script>
  