<template>
  <div>
    <main class="container cart">
      <h2>your cart</h2>
      <table v-if="cart.length != 0">
        <thead>
          <tr>
            <th>Item</th>
            <th>Add Ons</th>
            <th>Amount</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td>
              {{ item.item }}
              <span v-if="item.options">- {{ item.options }}</span>
            </td>
            <td>
              <span class="comma" v-for="addon in item.addOns" :key="addon">{{
                addon
              }}</span>
            </td>
            <td>{{ item.count }}</td>
            <td>{{ item.combinedPrice }}</td>
          </tr>
          <tr>
            <td colspan="3"></td>
            <td class="total">Total: ${{ totalPrice.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
      <AppEmptyCart v-else> </AppEmptyCart>
    </main>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import AppEmptyCart from '@/components/AppEmptyCart.vue';


export default {
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["totalPrice"]),
  },
  components: {
        AppEmptyCart
    },
};
</script>

<style scoped>
</style>