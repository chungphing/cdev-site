<template>
    <div class="contact">
        <h1>Interested?</h1>
        <button class="cta">Work With Us</button>
    </div>
</template>

<script>
export default {
  name: 'Cta'
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.contact{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 28px;
}
@media only screen and (min-width: 768px) {
    .contact{
        flex-direction: column;
    }
}

</style>
