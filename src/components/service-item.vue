<template>
    <div class="service-item" :class="color">
      <div class="service-thumb-container">
        <div class="service-thumb">
            <i class="fas fa-5x" :class="icon"></i>
        </div>
      </div>
      <div class="service-text">
        <h1>{{ title }}</h1>
      <p class="description"> {{ description }}</p>
      <core-button v-on:route="routeto" title="Learn more" :color="color"></core-button>
      </div>
    </div>
</template>

<script>
import coreButton from './_baseComponents/core-button'
export default {
  name: 'ServiceItem',
  props: {
    title: String,
    description: String,
    icon: String,
    color: String,
    route: String
  },
  components: {
    coreButton
  },
  methods: {
    routeto: function () {
      this.$router.push(this.route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/variables';
  .service-item{
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: $background;
    width: 100%;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 2px -1px rgba(163,163,163,1);
      -moz-box-shadow: 0px 0px 2px -1px rgba(163,163,163,1);
      box-shadow: 0px 0px 2px -1px rgba(163,163,163,1);
  }

  .service-title{
    width: 100%;
    text-align: center;
    background: #fbfbfb;

  }

  .service-thumb {
    width: 200px;
  }

  .red{
    color: $red;
  }
  .blue{
      color: $blue;
  }
  .green{
    color: $green;
  }
  .service-item .description {
    text-align: start;
    line-height: 1.2;
  }
  .service-thumb-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .service-thumb{
    padding: 50px;
    transition: transform 0.3s cubic-bezier(0,0,0.3,1);
  }
  .service-item:hover .service-thumb img{
          transform: scale(1.1);
  }

  .service-item h3 {
    margin: 8px 0;
  }
@media only screen and (max-width: 600px) {
  .service-item {
    flex-direction: row;
    margin: 0;
  }
  .service-thumb-container{
    flex: 1 1 auto;
  }
  .service-text{
    flex: 2 1 auto;
  }
}
@media only screen and (max-width: 768px) {
  .service-item {
    flex-direction: row;
    margin: 5px;
  }
  .service-thumb-container{
    flex: 1 1 auto;
  }
  .service-text{
    flex: 2 1 auto;
  }
}
@media only screen and (min-width: 768px) {
    .service-title{
      background: none;
    }
    .service-item{
      position: relative;
      transition: all 0.3s cubic-bezier(0,0,0.3,1);
      border-radius: 8px;
      align-items: flex-start;
      padding: 16px;
      align-items: center;
    }

    .service-item:hover{
      -webkit-box-shadow: 0px 0px 20px -1px rgba(163,163,163,1);
      -moz-box-shadow: 0px 0px 20px -1px rgba(163,163,163,1);
      box-shadow: 0px 0px 20px -1px rgba(163,163,163,1);
      background: $background;
      transform: scale(1.05);
    }
    .red:hover{
      background-color: $red;
      color: white;
    }
    .blue:hover{
      background-color: $blue;
      color: white;
    }
    .green:hover{
      background-color: $green;
      color: white;
    }
}
</style>
