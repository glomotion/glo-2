<template>
  <div class="app">

    <div class="panel feed"></div>
    <div class="panel launcher">
      <i class="wallpaper" />
      <div class="align-bottom">
        <div class="icon-layout">
          <router-link to="/about"><i icon="account_circle" title="about" /></router-link>
          <router-link to="/lab"><i icon="opacity" title="lab" /></router-link>
          <router-link to="/folio"><i icon="fingerprint" title="folio" /></router-link>
          <router-link to="/maps"><i icon="place" title="maps" /></router-link>
          <router-link to="/weather"><i icon="wb_sunny" title="weather" /></router-link>
          <router-link to="/contact"><i icon="mail" title="contact" /></router-link>
        </div>
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
  --footer-height: 8vh;
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
      position: relative;
      height: var(--footer-height);
      line-height: var(--footer-height);
      text-align: center;
      background: rgba(0,0,0,0.2);
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
  top: -5%; left: -5%;
  width: 110%;
  height: 110%;
  background-image: url('../../assets/img/demo-bg.jpg');
  background-size: cover;
  background-position: center;
  /*filter: blur(5px);*/

  /* protective skrim */
  &:after {
    position: absolute;
    content: "";
    bottom: 0; left: 0;
    height: 50%;
    width: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0) 100%);
  }
}

.align-bottom {
  margin: auto 0 0;
  align-self: flex-end;
  width: 100%;
}

.icon-layout {
  display: grid;
  padding: 0 20px 40px;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  grid-template-columns: auto auto auto auto;

  & .empty {
    content: "";
    width: 18%;
  }

  & a {
    display: block;
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: inherit;
    text-shadow: 0 1px 1px rgba(0,0,0,0.2);
    position: relative;

    &:nth-child(2) {
      grid-column: 1;
      grid-row: 2;
    }

    &:nth-child(3) {
      grid-column: 2;
      grid-row: 2;
    }

    &:nth-child(4) {
      grid-column: 4;
      grid-row: 2;
    }

    &:nth-child(5) {
      grid-column: 4;
      grid-row: 1;
    }

    &:nth-child(6) {
      grid-column: 3;
      grid-row: 2;
    }

    &:before {
      content: "";
      position: absolute;
      --offset: 17%;
      top: var(--offset); bottom: calc(var(--offset) * -1);
      left: 0; right: 0;
      border-radius: 50%;
      background: rgba(0,0,0,0.14);
    }

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
        font-size: 11vw;
        line-height: 1;
        top: 0%; left: 50%;
        transform: translate(-50%, -20%);
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

      &[title="lab"],
      &[title="maps"] {
        pointer-events: none;
        user-select: none;
        opacity: 0.3;
      }
    }
  }
}
</style>
