<template>
  <div id="glo-os">
    <header>
      moo
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="app-view" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'GloOS',
};
</script>

<style>
/* postcss-normalize */
@import-normalize;
@import "http://fonts.googleapis.com/css?family=Lato:100,300,300i,400,400i,700,900";

html, body {
  margin: 0;
  height: 100%;
}

#glo-os {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;

  & header {
    background: gold;
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
