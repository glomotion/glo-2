<template>
  <div class="app">

    <div class="panel feed"></div>
    <div class="panel launcher">
      <i class="wallpaper" />
      <div class="icon-layout">
        <router-link to="/about"><i icon="account_circle" title="about" /></router-link>
        <i class="empty"></i>
        <i class="empty"></i>
        <router-link to="/lab"><i icon="opacity" title="lab" /></router-link>
        <router-link to="/folio"><i icon="fingerprint" title="folio" /></router-link>
        <router-link to="/maps"><i icon="place" title="maps" /></router-link>
        <router-link to="/weather"><i icon="wb_sunny" title="weather" /></router-link>
        <router-link to="/contact"><i icon="mail" title="contact" /></router-link>
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
:root {
  --footer-height: 7vh;
}

.app {
  height: 100%;
  position: relative;
  overflow: hidden;
  color: white;
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
      height: var(--footer-height);
      line-height: var(--footer-height);
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
.wallpaper {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background-image: url('http://lorempixel.com/600/900/nature/');
  background-size: cover;
  background-position: center;

  &:after {
    position: absolute;
    content: "";
    bottom: 0; left: 0;
    height: 50%;
    width: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0) 100%);
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
    text-align: center;
    margin-bottom: 25px;
    text-decoration: none;
    color: inherit;
    text-shadow: 0 1px 1px rgba(0,0,0,0.2);

    & i {
      flex-grow: 1;
      display: block;
      position: relative;
      width: 100%;
      padding-bottom: 100%;
      font-style: normal;

      &:after {
        content: attr(icon);
        font-family: 'Material Icons';
        position: absolute;
        font-size: 60px;
        line-height: 1;
        top: 0; left: 50%;
        transform: translateX(-50%);
      }

      &:before {
        content: attr(title);
        position: absolute;
        width: 100%;
        bottom: 10px;
        left: 0;
        text-align: center;
        font-size: 13px;
      }
    }
  }
}
</style>
