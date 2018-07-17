
<template>
  <div  class="introduction">
    <div class="banner-panel">
      <h1 class="banner-text">We are CDEV TEC</h1>
      <button class="cta">Learn More</button>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>

export default {
  name: 'Introduction',
  props: {
    msg: String
  }
}

</script>
<style lang="scss">
@import '../styles/variables';

.introduction {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 700px;
   background-image: url('/static/bg/marvin-meyer-571072.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
.banner-panel{
  margin: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2;
}
.logo-container{
  display: flex;
  align-items: center;
  font-weight: 900;
  justify-content: center;
  max-width: 200px;
}
.banner-text{
  font-size: 70px;
  display: block;
  padding: 20px;
  font-weight: bolder;
  color: rgba(235, 233, 233, 0.726);
  mix-blend-mode: screen;
}
.cta{
  max-width: 400px;
  border: 0;
  border-radius: 50px;
  background: $accent;
  color: #fff;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 16px 50px;
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
}
.cta:hover{
  background: darken($accent, 10%);
  box-shadow: 0px 10px 30px rgba(238, 92, 7, 0.5);
  color: black;
  transform: translateY(-3px);
}
@media screen and (max-width: 600px) {
  // mobile
  .cta{
    max-width: 100%;
    padding: 16px 26px;
  }
  .logo-container{
    max-width: 100px;
  }
}
@media only screen and (min-width: 600px) {
  // tablet
  .cta{
    padding: 16px 64px;
  }
}
@media only screen and (min-width: 768px) {
  // desktop
}
</style>
