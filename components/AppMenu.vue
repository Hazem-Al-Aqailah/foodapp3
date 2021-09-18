<template>
    <nav>
        
        <ul>
        <li><nuxt-link exact to="/"><AppLogo /></nuxt-link></li>
        <li><nuxt-link to="/resturants">Resturants</nuxt-link></li>
        </ul>
        <div class="smallnum" v-if="cartCount">{{cartCount}}</div>
        <nuxt-link to="/cart">Cart</nuxt-link>
    </nav>
</template>

<script>
    import AppLogo from '@/components/AppLogo.vue';
    import { mapState, mapGetters } from 'vuex';
    
    export default {
        computed: {
            ...mapState(["cart"]),
             ...mapGetters(["cartCount"]),
        },
        components: {
            AppLogo
        },
    };
</script>

<style scoped>

</style>