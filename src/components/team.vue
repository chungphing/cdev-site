<template>
    <div id="team" class="team-container container">
        <div class="team-title">
          <h1>Our team</h1>
        </div>
        <div class="team">
          <div class="team-item">
            <div class="team-thumb"><img src="../assets/thumb/portait1.png" alt="team1"></div>
            <div class="team-text">
              <p>Chanponleu</p>
            </div>
          </div>
          <div class="team-item">
            <div class="team-thumb"><img src="../assets/thumb/portait1.png" alt="team1"></div>
            <div class="team-text">
              <p>Chanponleu</p>
            </div>
          </div>
          <div class="team-item">
            <div class="team-thumb"><img src="../assets/thumb/portait1.png" alt="team1"></div>
            <div class="team-text">
              <p>Chanponleu</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Team',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/variables';

.team-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: $background;
}
.team-title {
  width: 100%;
  text-align: center;
}

.team {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.team-item{
  margin: 16px ;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.team-thumb {
  max-width: 200px;
  background: $link;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.team-thumb img {
  border-radius: 50%;
}
</style>
