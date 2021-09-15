<template>
  <div> 
    <label :for="select">Which is your favorite {{select}}?</label>
    <!-- we need to emit the values to the parent aka restaurans.vue we used vemit-child -->
    <select @change="$emit('change', $event.target.value)" :name="select" :id="select">
      <option value>--Please choose--</option>
      <option v-for="option in selectoptions" :key="option" :value="option">
        {{
        option
        }}
      </option>
    </select>
  </div>
</template>

<script>
// the template was taken from https://webaim.org/techniques/forms/controls#select

// <label for="thing">Which is your favorite thing?</label>

// <select id="thing" name="thing">
//   <option value="firstthing">firstthing</option>
// </select>
export default {
    props: {
        select: {
            type: String,
            default: "cusine"
        },
        selectoptions:{ 
            type: Array,
            // the default case of an array prop must be a returinng function
            default: () => ['tacos' , "pizza" , "dim sum"]
        }
    },
};
</script>

<style scoped>
</style>