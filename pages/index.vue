<template>
  <main class="container">
    <div class="restaurantheading">
      <AppHeader/>
      
    </div>
    
    <AppResturantInfo :datasource="fooddata"/>
  </main>
</template>

<script>
  import AppHeader from '@/components/AppHeader.vue';
  import AppResturantInfo from '@/components/AppResturantInfo.vue';
  import AppSelect from '@/components/AppSelect.vue';
  
  
  import { mapState } from 'vuex';
  
 
  
  export default {
    components: {
      AppHeader,
      AppResturantInfo,
      
    },computed: {
      ...mapState([
        'fooddata',
      ])
    },
  };
</script>

<style lang="scss" scoped>

</style>