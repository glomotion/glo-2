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
#glo-os {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

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
