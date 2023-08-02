<template>
   <v-container fluid
   class="overflow-hidden"
   >
    <v-row class="fill-height">
        <v-col cols="12" class="d-flex align-end">
            <div class=" div-img">
                <v-img width="65vw" src="../../public/img/sanduiche2.png"></v-img>
            </div>
            <div class=" fill-height w-100 d-flex flex-column  justify-center text-end div-title">
                <h1 class="text-red text-sm-h2 text-h4 font-weight-bold pa-5">Peça já o seu</h1>
                <h1 class="text-uppercase text-sm-h1 text-h3 font-weight-bold pa-3">Sanduiche</h1>
            </div>
        </v-col>
    </v-row>
   </v-container > 
  
</template>

<script setup>

</script>

<style scoped>
.v-container{
    background-image: url('../../public/img/background.png');
    background-size: contain;
    background-repeat: repeat;
    background-position: center;
    height: 80vh;
    border-bottom: 5px solid #000000;
}
.v-img{
    transform: rotateZ(-20deg);
    filter: blur(.5px);
    background: radial-gradient(circle, rgba(73,70,69,0.654499299719888) 26%, rgba(0,0,0,0) 62%);
}
.div-img{
    margin-left: -15%;
    position: absolute;
}

h1{
    background-color: #000000aa;
}
</style>