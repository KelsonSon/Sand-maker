<template>
  <v-app>
    <v-main>
      <NavBar />
      <BannerBar />
      <MainSection />
      
    </v-main>
  </v-app>
</template>

<script>
import MainSection from './components/MainSection.vue'
import NavBar from './components/NavBar.vue';
import BannerBar from './components/BannerBar.vue'

export default {
  name: 'App',

  components: {
    NavBar,
    BannerBar,
    MainSection
  }

  
}
</script>

<style>
.borda{
  border: 1px solid red;
}
</style>
