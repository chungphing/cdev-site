<template>
    <footer class="footer">
      <div>
        <h2>Services</h2>
      <ul>
        <li>Web Development</li>
        <li>Mobile Development</li>
        <li>Tech Consultant</li>
      </ul>
      </div>
      <div>
        <h2>Contact</h2>
        <ul>
          <li>Email: chungphing@gmail.com</li>
          <li>Phone: 011346333</li>
        </ul>
      </div>
    </footer>
</template>
<script>
export default {
  name: 'AppFooter',
  props: {
    msg: String
  }
}
</script>
<style lang="scss" scoped>
@import '../styles/variables';
.footer{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: $text;
  color: white;
  padding: 18px 0;
}
ul{
  list-style: none;
  margin: 4px;
  padding: 0;
}
ul li{
  text-align: left;
  font-size: 12px;
  padding: 8px;
}
h2{
  margin: 0;
  padding: 0;
  text-align: center;
}

@media only screen and (max-width: 600px) {
  .footer{
    flex-direction: column;
  }
}
@media only screen and (max-width: 768px) {
  .footer{
    flex-direction: row;
  }
}
</style>
