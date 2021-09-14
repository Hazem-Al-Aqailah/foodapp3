<template>
    <main class="container resturant">
        <h1>Resturants</h1>
        <AppResturantInfo />
    </main>
</template>

<script> 

    import AppResturantInfo from '@/components/AppResturantInfo.vue';
    
    export default {
        components: {
            AppResturantInfo
        },
    };
</script>

<style scoped>

</style>