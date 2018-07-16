<template>
    <div class="feature-container container">
        <div class="feature-title">
          <h1>Why Choose CDev Tec</h1>
        </div>
        <div class="feature-container">
          <feature-item
            v-for="feature in features"
            v-bind:key="feature.id"
            v-bind:title="feature.title"
            v-bind:icon="feature.icon"
            v-bind:description="feature.description"
          ></feature-item>
        </div>
    </div>
</template>
<script>
import FeatureItem from './feature-item'
export default {
  name: 'Feature',
  props: {
    msg: String
  },
  components: {
    FeatureItem
  },
  data: function () {
    return {
      features: [
        { id: 1, title: 'Modern Development Workflow', description: 'Don\'t reinvent the wheel - By using popular framework like React or Vue, We build application at rapid speed while maintaining quality. This, in turn, lead to bleeding edge, feature-rich product for customer', icon: '/static/bg/web.jpg' },
        { id: 2, title: 'Fit to All Screen', description: 'Every page of your website and every screen of your app will be beautifully designed to response to all sizes and form factor, so that you don\'t miss a single potential customer', icon: '/static/bg/phone.jpg' },
        { id: 3, title: 'User Experince with Style', description: 'Your app deserve a great user interface, the one that focus on the content while expressing your brand and personality', icon: '/static/bg/style.jpg' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/feature';

@media only screen and (max-width: 600px) {
 //
}
@media only screen and (max-width: 768px) {
  .feature-item .feature-thumb{
      order: 0;
    }
}
@media only screen and (min-width: 768px) {
  //
}
</style>
