<template>
  <div class="header">
    <transition name="fade">
      <div class="overlay" v-if="showTopMenu">
      <div class="overlay-list">
          <div>
              <a href="#" v-on:click="showTopMenu = false" class="overlay-item">
                Close
              </a>
              <a href="#service" v-on:click="showTopMenu = false" class="overlay-item">
                Service
              </a>
              <a href="#team" v-on:click="showTopMenu = false"  class="overlay-item">
              Our Team
              </a>
              <a href="#" v-on:click="showTopMenu = false"  class="overlay-item">
              Contact Us
              </a>
          </div>
        </div>
      </div>
    </transition>
    <div class="header-branding-container">
            <router-link to="/"  class="header-branding"><img style="width: 35px; margin-right: 6px;" src="../assets/logo.svg" alt="logo"><span>CDEV TEC</span></router-link>
    </div>
    <div class="header-list">
            <a href="#service" class="header-item">
              Service
            </a>
            <a href="#team" class="header-item">
            Our Team
            </a>
            <a href="#" class="header-item">
            Contact Us
            </a>
      </div>
      <button class="hamburger toggleTopMenu" type="button" @click="showTopMenu = !showTopMenu">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
              button
            </span>
      </button>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  methods: {
    scrollto: function () {
      document.querySelector('.social').scrollIntoView({
        behavior: 'smooth'
      })
    }
  },
  props: {
    toggleTopMenu: false,
    showTopMenu: true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/fluid-type';
@import '../styles/header';
@import '../styles/navigation';

.header-branding > *{
  vertical-align: middle;
}
.header-branding img {
  margin: 6px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
