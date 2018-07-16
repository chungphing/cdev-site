
<template>
  <div class="introduction">
    <div class="banner-panel">
      <h1 class="banner-text">We are CDEV TEC</h1>
      <button class="cta">Learn More</button>
    </div>
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
  padding: 25px;
  text-align: center;
  height: 700px;
  background-image: url('/static/bg/marvin-meyer-571072.jpg');
  background-size: cover;
}
.banner-panel{
  margin: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.logo-container{
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
}
.banner-text{
  font-weight: bolder;
  font-size: 70px;
  color: white;
}
.cta{
  max-width: 400px;
  margin: 16px 24px;
  border: 0;
  border-radius: 50px;
  background: $accent;
  color: #fff;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
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
    max-width: 50%;
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
