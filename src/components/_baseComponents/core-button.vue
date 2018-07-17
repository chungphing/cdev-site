<template>
    <button @click="$emit('route')" class="cdev-button" :class="color">{{ title }}</button>
</template>

<script>
export default {
  name: 'cdev-button',
  props: ['title', 'color']
}
</script>
<style lang="scss" scoped>
@import '../../styles/variables';

.cdev-button{
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  border: none;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
}

.red{
  color: $red;
}
.red:hover{
  background-color: lighten( $red, 10% );
  color: #fff;
}
.blue{
  color: $blue;
}
.blue:hover{
  background-color: lighten( $blue, 10% );
  color: #fff;
}
.green{
  color: $green;
}
.green:hover{
  background-color: lighten( $green, 10% );
  color: #fff;
}

</style>
