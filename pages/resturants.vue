<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Resturants</h1>
      <!-- using vemit-parent -->
      <AppSelect @change="selectedRestaurant = $event" />
      <pre>{{ $data }}</pre>
    </div>

    <AppResturantInfo :datasource="filteredRestaurants" />
  </main>
</template>

<script>
import AppResturantInfo from "@/components/AppResturantInfo.vue";
import AppSelect from "@/components/AppSelect.vue";
import { mapState } from "vuex";

export default {
  components: {
    AppResturantInfo,
    AppSelect,
  },
  // to gather the emited data from the chiled
  data() {
    return {
      selectedRestaurant: "",
    };
  },
    computed: {
    ...mapState(["fooddata"]),
    filteredRestaurants() {
      if (this.selectedRestaurant) {
        return this.fooddata.filter((el) => {
          let name = el.name.toLowerCase();
          return name.includes(this.selectedRestaurant);
        });
      }
      return this.fooddata;
    },
  },
};
</script>

<style scoped>
</style>