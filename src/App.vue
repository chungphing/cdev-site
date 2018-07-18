<template>
  <div id="app">
    <topbar></topbar>
    <div class="content"><router-view></router-view></div>
    <app-footer></app-footer>
  </div>
</template>

<script>

import AppFooter from './components/app-footer'
import Topbar from './components/topbar'
import OverlayNav from './components/overlay-nav'
import Home from './components/home'
export default {
  name: 'App',
  components: {
    Topbar,
    AppFooter,
    OverlayNav,
    Home
  },
  props: {
    showTopMenu: false
  }
}
</script>

<style lang="scss">
@import "./styles/fluid-type.scss";
@import "./styles/variables.scss";
@import './styles/basestyle.scss';
@import './styles/header';
@import './styles/contact';

</style>
