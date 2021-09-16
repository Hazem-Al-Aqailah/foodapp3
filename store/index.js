export const state = () => ({
  fooddata: []
});

// export const getters = {
//     getterValue: state => {
//         return state.value
//     }
// }

// assign the fetched data to the local var
export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data;
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
