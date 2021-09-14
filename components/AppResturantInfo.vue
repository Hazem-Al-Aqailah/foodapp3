<template>
  <section class="restaurantinfo">
    <!-- loop1 -->
    <div v-for="store in fooddata" :key="store.id">
      <h2>{{ store.name }}</h2>
      <p>Delivery {{ store.deliveryTime + "min" }}</p>
      <p>Rating{{ store.rating }}</p>
      <p v-if="store.freeDelivery" class="label">
        <span>Free Delivery</span>
      </p>

      <div class="row">
        <!-- loop2 -->
        <div
          v-for="menuitem in store.menu"
          :key="menuitem.id"
          class="items"
          :style="`background: url(${menuitem.img}) no-repeat center center`"
        >
          <!-- loop3 -->
          <div class="iteminfo">
              <div>
              <h4>{{menuitem.item}}</h4>
              <p>{{priceFormatting(menuitem.price)}}</p>
              </div>
              <button class="ghost">View item</button>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  // created using vmapstate to fetch the 'fooddata' from the store
  computed: {
    ...mapState(["fooddata"]),
  },methods: {
      priceFormatting(item){
          return "$" + item.toFixed(2)
      }
  }
};
</script>

<style scoped>
</style>