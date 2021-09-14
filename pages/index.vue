<template>
  <main class="container">
    <AppHeader/>
    <AppResturantInfo/>
  </main>
</template>

<script>
  import AppHeader from '@/components/AppHeader.vue';
  import AppResturantInfo from '@/components/AppResturantInfo.vue';
  
  
  export default {
    components: {
      AppHeader,
      AppResturantInfo,
      
    },
  };
</script>

<style lang="scss" scoped>

</style>