<template>
  <div class="overlay" v-if="showTopMenu">
    <div class="overlay-list">
        <div>
            <a href="#service" v-on:click="showTopMenu = false" class="overlay-item">
              Close
            </a>
        </div>
        <div>
            <a href="#service" v-on:click="scrollto" class="overlay-item">
              Service
            </a>
        </div>
        <div>
            <a href="#team" v-on:click="scrollto"  class="overlay-item">
            Our Team
            </a>
        </div>
        <div>
            <a href="#" v-on:click="scrollto"  class="overlay-item">
            Contact Us
            </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OverlayNav',
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
@import '../styles/navigation';

.overlay{
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: white;
  z-index: 99;
}
.overlay-list{
  list-style: none;
}
.overlay-item{
  display: block;
  color: $text;
  margin: 0;
  padding: 20px 40px;
  text-align: center;
}
@media only screen and (min-width: 768px) {
  .overlay{
    display: none;
  }
}
// @media only screen and (min-width: 768px) {
// }
</style>
