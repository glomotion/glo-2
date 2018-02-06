<template>
  <div>
    <h1>Home</h1>
    <transition :name="transitionName">
      <router-view class="route-view" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      transitionName: 'slide-left',
    };
  },
  beforeRouteUpdate(to, from, next) {
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;
    if (to.path === '/' || toDepth < fromDepth) {
      this.transitionName = 'slide-right';
    } else {
      this.transitionName = 'slide-left';
    }
    next();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
