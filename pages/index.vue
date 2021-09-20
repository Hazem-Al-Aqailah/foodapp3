<template>
  <main class="container">
    <div class="restaurantheading">
       
      <AppHeader>
        <button @click="scrollToElement({ behavior: 'smooth' })">Let's go</button>
      </AppHeader>
      
      
    </div>
    
    <AppResturantInfo :datasource="fooddata" class="trans">
      
    </AppResturantInfo>
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
      
    },  methods: {
    scrollToElement(options) {
      const el = this.$el.getElementsByClassName("trans")[0];

      if (el) {
        el.scrollIntoView(options);
      }
    },
  },
    computed: {
      ...mapState([
        'fooddata',
      ])
    },
  };
</script>

<style lang="scss" scoped>

</style>