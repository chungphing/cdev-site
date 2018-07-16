<template>
    <div class="feature-item" :class="color">
      <div class="feature-thumb-container">
        <div class="feature-thumb">
            <img  :src="icon" :alt="title">
        </div>
      </div>
      <div class="feature-text">
        <h1>{{ title }}</h1>
        <p class="description"> {{ description }}</p>
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

  .red{
    color: $red;
  }
  .blue{
      color: $blue;
  }
  .green{
    color: $green;
  }
.feature-item{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.feature-text{
    flex: 3 1 auto;
    display: flex;
    flex-direction: column;
}
.feature-thumb-container{
    margin: 50px;
    flex: 1 1 auto;
}
.feature-thumb-container img {
    width: 350px;
    border-radius: 16px;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);

}
@media only screen and (max-width: 600px) {
  .feature-item{
    flex-direction: column;
    margin: 16px 16px;
  }
  .feature-item .feature-thumb-container{
     order: 0;
  }
}
@media only screen and (max-width: 768px) {
  .feature-item{
    flex-direction: column;
    margin: 16px 16px;
  }
  .feature-item .feature-thumb-container{
     order: 0;
  }
}
@media only screen and (min-width: 768px) {
  .feature-item{
      margin: 16px 68px;
  }

  .feature-item:nth-child(even) .feature-thumb-container{
      order: 2;
  }
}
</style>
