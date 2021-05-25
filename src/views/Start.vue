<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/shutterstock_111500834.jpg"> -->

    <div class="circle">
      <div class="text-small">Добро пожаловать в игру</div>

      <div class="text-bold">Помоги</div>
      <div class="text-bold"><span>фармацевту</span> </div>

      <button @click="start">Начать</button>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: 'Home',
  methods: {
    start() {
      this.ON_START
      this.$router.push({name: 'Main'})
    }
  },
  computed: {
    ...mapMutations({
      ON_START: 'sales/ON_START'
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  // overflow: hidden;
  // width: 100%;
  // background: url(../assets/shutterstock_111500834.jpg);
    background: url(/img/shutterstock_111500834.17786b9e.jpg) no-repeat;
    width: 100%;
    height: 100vh;
}

.circle {
  // position: absolute;
  position: fixed;
  top: -30px;
  left: 110px;
  width: 860px;
  height: 860px;
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  border-radius: 50%;
}

.text {

  &-small {
    margin-top: 280px;
    margin-left: 166px;
    margin-bottom: 20px;
    font-family: Avenir Next Cyr;
    font-size: 35px;
    line-height: 41px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &-bold {
    margin-left: 166px;
    width: 530px;
    font-family: Avenir Next Cyr;
    font-size: 60px;
    line-height: 66px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;

    span {
      text-transform: uppercase;
    }
  }
}

button {
  background: #FFFFFF;
  border-radius: 100px;
  width: 380px;
  height: 90px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;

  border: none;
  color: #8E9AD5;

  margin-top: 120px;

  &:hover {
    background: rgb(224, 224, 224);
  }
  
  &:active {
    background: rgb(180, 180, 180);
  }
}
</style>
