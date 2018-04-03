<script>
import WallTime from './partials/WallTime';

export default {
  name: 'GloOS',
  components: {
    WallTime,
  },
  data: () => ({

  }),
  computed: {

  },
  mounted() {

  },
  created() {
    console.log('gloos created');
  },
  methods: {

  },
};
</script>

<style>
/* postcss-normalize */
@import-normalize;
@import "http://fonts.googleapis.com/css?family=Lato:100,300,300i,400,400i,700,900|Material+Icons";

html, body {
  margin: 0;
  height: 100%;
}

*,*:before,*:after {
  box-sizing: border-box;
}

:root {
  --tray-height: 5vh;
  --padding: 4vw;
}

#glo-os {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;

  & .tray {
    position: absolute;
    top: 0; left: 0;
    background: rgba(0,0,0,0.1);
    color: white;
    width: 100%;
    height: var(--tray-height);
    line-height: var(--tray-height);
    text-align: right;
    padding: 0 var(--padding);
  }

  & .app-view {
    padding-top: var(--tray-height);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.route-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>

<template>
  <div id="glo-os">
    <transition name="fade" mode="out-in">
      <router-view class="app-view" />
    </transition>
    <header class="tray">
      <div class="notifications" />
      <WallTime />
    </header>
  </div>
</template>
