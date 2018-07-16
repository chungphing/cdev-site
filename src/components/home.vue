<template>
    <div>
      <introduction></introduction>
      <service></service>
      <feature></feature>
      <team></team>
      <cta></cta>
      <social></social>
    </div>
</template>

<script>
import Feature from './feature'
import Team from './team'
import Service from './service'
import Social from './social'
import Introduction from './introduction'
import Cta from './cta'
export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    Service,
    Feature,
    Team,
    Social,
    Introduction,
    Cta
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
