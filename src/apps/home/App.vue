<template>
  <div class="app">

    <div class="panel feed"></div>
    <div class="panel launcher">
      <div class="icon-layout">
        <router-link to="/about"><i title="about" /></router-link>
        <i class="empty"></i>
        <i class="empty"></i>
        <router-link to="/lab"><i title="lab" /></router-link>
        <router-link to="/folio"><i title="folio" /></router-link>
        <router-link to="/maps"><i title="maps" /></router-link>
        <router-link to="/weather"><i title="weather" /></router-link>
        <router-link to="/contact"><i title="contact" /></router-link>
      </div>
      <footer>launcher footer</footer>
    </div>
    <Search class="panel search" />
  </div>
</template>

<script>
import Search from './Search';
// import Feeds from './Feeds';

export default {
  name: 'Home',
  components: {
    Search,
    // Feeds,
  },
  data() {
    return {
      
    };
  },
  mounted() {
    console.log('home mounted');
  },
};
</script>

<style scoped>
.app {
  height: 100%;
  position: relative;
  overflow: hidden;
}
.panel {
  position: absolute;
  top: 0; left: 0;
  height: 100%;
  width: 100%;

  &.launcher {
    display: flex;
    flex-flow: column nowrap;

    & footer {
      height: 15vh;
      line-height: 15vh;
      text-align: center;
    }
  }

  &.feed {
    background: gold;
    left: -100%;
  }

  &.search {
    left: 100%;
    background: yellowgreen;
  }
}
.icon-layout {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-end;
  justify-content: space-evenly;
  height: 100%;

  & .empty {
    content: "";
    /*order: 1;*/
    /*height: 10px;*/
    /*background: red;*/
    width: 20.5%;
  }

  & a {
    width: 20.5%;
    background: gold;
    text-align: center;
    margin-bottom: 15px;

    & i {
      flex-grow: 1;
      display: block;
      position: relative;
      width: 100%;
      padding-bottom: 100%;

      &:after {
        content: "";
        position: absolute;
        left: 50%;
        top: 10px;
        width: 50%;
        padding-bottom: 50%;
        background: black;
        transform: translateX(-50%);
      }

      &:before {
        content: attr(title);
        position: absolute;
        width: 100%;
        bottom: 10px;
        left: 0;
        text-align: center
      }
    }
  }
}
</style>
