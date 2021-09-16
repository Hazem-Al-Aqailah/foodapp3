// to excute the data fetching from the server side while the site is loading
// we used .server in the name to tell nuxt to do this on the server side not
// on the client side

export default async ({ store }) => {
  await store.dispatch("getFoodData"); //calling the function form the store
};
// then we go to nuxtConfig to tell nuxt we are using this plugin
