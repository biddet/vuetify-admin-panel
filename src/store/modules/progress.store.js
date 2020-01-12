
const initialState = () => ({
   signin: false,
   users: false,
   deleteUser: false,
   updateUser: false,
   initializing: false
});

const actions = {

};

const mutations = {
   setState: (state, payload) => {
      Object.keys(payload).forEach(key => (state[key] = payload[key]));
   },
   resetState: state => {
      let newState = initialState();
      Object.keys(newState).forEach(key => (state[key] = newState[key]));
   }
};

const state = initialState();

const getters = {
   progSignin: state => state.signin,
   initializing: state => state.initializing
};

export default {
   namespaced: true,
   state,
   getters,
   mutations,
   actions
};
