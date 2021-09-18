import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  fooddata: [],
  cart:[],
});

export const getters = {
    totalPrice: state => {
      // https://css-tricks.com/understanding-the-almighty-reducer/
      if (!state.cart.length) return 0 
      return state.cart.reduce((ac, next)=> ac + +next.combinedPrice, 0)
    },
    cartCount: state =>{
      if (!state.cart.length) return 0 
      return state.cart.reduce((ac, next)=> ac + +next.count, 0)
    }
}

// assign the fetched data to the local var
export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data;
  },
  addToCart: (state,formOutput)=>{
     formOutput.id = uuidv4();  // to create uniqe id for each object we used UUID
    state.cart.push(formOutput)

  }
};

export const actions = {
  async getFoodData({ state, commit }) {
    if (state.fooddata.length) return; //means if u already got the information form the api do not fetch it again
    try {
      // api link
      await fetch(
        "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
        {
          headers: {
            "Content-Type": "application/json",
            // api password
            "x-api-key": process.env.AWS_API_KEY
          }
        }
      )
        .then(response => response.json())
        .then(data => {
          commit("updateFoodData", data); //commit("updateValue", payload)
          
        });
    } catch (e) {
      console.log(e);
    }
  }
};
