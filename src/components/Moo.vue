<template>
  <div>
    <h1>mooo</h1>
    <pre>{{ $store.state }}</pre>
    <pre>{{ msg }}</pre>
  </div>
</template>

<script>
export default {
  name: 'Moo',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
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
