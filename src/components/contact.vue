<template>
    <div class="contact">
        <div class="contact-container container">
            <div class="contact-title">
                <h1>Contact Us</h1>
            </div>
            <div class="contact-item">
                <input class="contact-email" type="email" name="email" id="email">
                <button class="contact-submit" type="submit">SUBSCRIBE</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Contact',
    props: {
        msg: String
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/variables';
</style>
