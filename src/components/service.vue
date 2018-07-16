<template>
    <div id="service" class="service-container container">
        <div class="service-title title">
          <h1>Our Service</h1>
        </div>
        <div class="service">
          <service-item
            v-for="service in services"
            v-bind:key="service.id"
            v-bind:title="service.title"
            v-bind:icon="service.icon"
            v-bind:description="service.description"
            v-bind:color="service.color"
            v-bind:route="service.route"
            :tabindex="service.id"
          ></service-item>
        </div>
    </div>
</template>

<script>
import coreButton from './_baseComponents/core-button'
import ServiceItem from './service-item'
export default {
  data: function () {
    return {
      services: [
        { id: 1, title: 'Web Development', description: 'Fast, Beautiful, Responsives from bleeding edge technologies', icon: 'fa-globe', color: 'red', route: 'web-development' },
        { id: 2, title: 'Mobile Development', description: 'Build your application base on you and your business\' need', icon: 'fa-mobile-alt', color: 'green', route: 'mobile-development' },
        { id: 3, title: 'Consultant Service', description: 'Consult with us to find out the best solution for your tech infastructure', icon: 'fa-comments', color: 'blue', route: 'Consultant' }
      ]
    }
  },
  name: 'Service',
  props: {
    msg: String
  },
  components: {
    coreButton,
    ServiceItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/variables';
.service {
    display: flex;
    align-items: center;
  }
  .service-title{
    width: 100%;
    text-align: center;
}
@media only screen and (max-width: 600px) {
   .service{
      flex-direction: column;
    }
}
@media only screen and (max-width: 768px) {
   .service{
      flex-direction: column;
    }
}

@media only screen and (min-width: 800px) {
    .service{
      flex-direction: row;
    }
    .service-container{
      margin-top: 0;
    }
}
</style>
