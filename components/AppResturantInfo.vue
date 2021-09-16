<template>
  <section class="restaurantinfo">
    <!-- loop1 -->
    <div v-for="store in datasource" :key="store.id">
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
              <h4>{{ menuitem.item }}</h4>
              <p>{{ priceFormatting(menuitem.price) }}</p>
            </div>
            <nuxt-link :to="`/items/${menuitem.id}`">
              <button class="ghost">View item</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// created using vmapstate to fetch the 'fooddata' from the store if we are not using props
// wechanged the static data fetching to a prop to be able to maniplate the data where the component
// is being used "resturans page" we shefted the data import to resturants page using mapstate like
// we did here before

export default {
  props: {
    datasource: {
      type: [Array, Object],
    },
  },
  methods: {
    priceFormatting(item) {
      return "$" + item.toFixed(2);
    },
  },
};
</script>

<style scoped>
</style>