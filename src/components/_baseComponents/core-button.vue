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
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  background-color: white;
}

.red{
  border: 1px solid $red;
  color: $red;
}
.red:hover{
  border: 1px solid $red;
  background-color: lighten( $red, 10% );
  color: #fff;
}
.blue{
  border: 1px solid $blue;
  color: $blue;
}
.blue:hover{
  border: 1px solid $blue;
  background-color: lighten( $blue, 10% );
  color: #fff;
}
.green{
  border: 1px solid $green;
  color: $green;
}
.green:hover{
  border: 1px solid $green;
  background-color: lighten( $green, 10% );
  color: #fff;
}

</style>
