import { createStore } from 'vuex'

// export default createStore({
//   // let initialState = {
//   //   currentJoke: '',
//   //   allJokes: []
//   // },

//   const url = 'https://icanhazdadjoke.com/';
//   const headers

//   state: {
//     currentJoke: 'This is a joke!',
//     allJokes: []
//   },
//   mutations: {
//     // syncronous way to update the state in oue vuex store
//     setCurrentJoke(state, data) {
//       state.currentJoke = data;
//       state.allJokes.push(data);
//     }
//   },
//   actions: {
//     // async
//     async fetchCurrentJoke(state, data) {
//       const joke = await fetch(url, headers);
//     }
//   },
//   modules: {
//   },
//   getters: {
//     // can be accessed anywhere in the app to get data
//     getCurrentJoke: state => state.currentJoke
//   }
// })

  const url = 'https://icanhazdadjoke.com/';
  const headers = {
    Accept: 'application/json'
  }

  const initialState = {
    currentJoke: '',
    allJokes: []
  };

  const state = initialState;

  const getters = {
    // can be accessed anywhere in the app to get data
    getCurrentJoke: state => state.currentJoke,
    getAllJokes: state => state.allJokes
  }

  const mutations = {
    // syncronous way to update the state in oue vuex store
    setCurrentJoke(state, payload) {
      state.currentJoke = payload;
      state.allJokes.push(payload);
    }
  }

  const actions = {
    // async
    async setCurrentJoke(state) {
      const joke = await fetch(url, { headers });
      const response = await joke.json();
      state.commit('setCurrentJoke', response.joke);
    }
  }


export default createStore({
  state,
  getters,
  actions,
  mutations,
});

