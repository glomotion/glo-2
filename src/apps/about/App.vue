<template>
  <div>
    <h1>about</h1>
    <transition :name="transitionName">
      <router-view class="route-view" />
    </transition>
  </div>
</template>

<script>
import { fwdsOrBkwds } from '@/utils-and-data/utils';

export default {
  name: 'About',
  data() {
    return {
      transitionName: 'slide-left',
    };
  },
  beforeRouteUpdate: fwdsOrBkwd(to, from, next),
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
