import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    moo: true,
    wallTime: {
      minutes: 0,
      seconds: 0,
    },
  },

  mutations: {
    CHANGE_MOO(state, payload) {
      state.moo = payload;
    },
    CHANGE_TIME(state, payload) {
      state.wallTime = payload;
    },
  },

  getters: {
    moo: state => () => state.moo,
    wallTime: state => () => state.wallTime,
  },

  actions: {
    changeMoo({ commit }, payload) {
      commit('CHANGE_MOO', payload);
    },
    updateTime({ commit }, payload) {
      commit('CHANGE_TIME', payload);
    },
  },

  modules: {},
  
  strict: process.env.NODE_ENV !== 'production',
});
