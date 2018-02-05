import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    moo: true,
  },

  mutations: {
    CHANGE_MOO(state, payload) {
      state.moo = payload;
    },
  },

  getters: {
    moo: state => () => state.moo,
  },

  actions: {
    changeMoo({ commit }, payload) {
      commit('CHANGE_MOO', payload);
    },
  },
  modules: {},
  strict: process.env.NODE_ENV !== 'production',
});
