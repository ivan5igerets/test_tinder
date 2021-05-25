<template>
  <div class="side-bar side-bar-width">

    <div class="side-bar-top">
      <div @click="goHome" class="small-circle margin">
        <img src="../assets/btn_home.svg" alt="">
      </div>

      <div @click="restart" class="small-circle margin">
        <img  class="icon-retry" src="../assets/btn_retry.svg" alt="">
      </div>
    </div>

      <div class="side-bar-body">

        <div class="side-bar-body-title">Парметры:</div>

        <div class="container">

          <div class="counter">
            <img src="../assets/sad.svg" alt="">

            <div class="counter-number"> {{ med_1 }} </div>
          </div>
        
          <div class="counter">
            <img src="../assets/Happy_icon.svg" alt="">

            <div class="counter-number"> {{ med_2 }} </div>
          </div>

          <div class="counter">
            <img src="../assets/heart_icon.svg" alt="">

            <div class="counter-number"> {{ med_3 }} </div>
          </div>

        </div>

      </div>

    <div class="side-bar-bottom">
      <div class="side-bar-bottom-text">Осталось в очереди:</div>
      <div class="side-bar-bottom-text"> {{ curBuyerId + 1}} / {{ buyers.length }} </div>
    </div>

  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  props:['curBuyerId'],
  data() {
    return {
      // curBuyerId: null,
      curBuyer: null,
    }
  },
  methods: {
    goHome() {
      this.$router.push({name: 'Start'})
    },

    restart() {
      // this.ON_START()
      // this.curBuyerId = 0
      this.$emit('restart')
      // this.curBuyer = this.buyers[0]
    },

    ...mapMutations({
      INCRIMENT: 'sales/INCRIMENT',
      ON_START: 'sales/ON_START'
    })
  },

  computed: {
    ...mapState('buyers',{
      buyers: state => state.buyers
    }),
    ...mapState('sales', {
      med_1: state => state.med_1,
      med_2: state => state.med_2,
      med_3: state => state.med_3,
    }),
  },
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 800px) {
  .side-bar-width {
    width: 280px;
  }

  .margin {
    margin-right: 20px;
  }
}

@media screen and (min-width: 801px) {
  .side-bar-width {
    width: 470px;
  }

  .margin {
    margin-right: 38px;
  }
}


.side-bar {
  // background: darkolivegreen;
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  opacity: 0.7;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // height: 100px;

  &-top {
    // position: absolute;
    // top: 0;
    // width: 370px;
    // height: 130px;
    // background: cornflowerblue;
    display: flex;
    padding: 70px 50px 0;

    .small-circle {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: #fff;
      // margin-right: 38px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);

      &:hover {
        box-shadow: 0 0 10px rgba(241, 168, 168, 0.5);
      }

      .icon-retry {
        position: absolute;
        top: -63px;
        left: -68px;
      }
    }
  }

  &-body {
    width: 100%;

    &-title {
      font-family: Avenir Next Cyr;
      font-size: 36px;
      line-height: 44px;
      color: #FFFFFF;
      margin-bottom: 30px;
    }
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;

      .counter {
        width: 180px;
        height: 60px;
        background: #fff;
        border-radius: 40px;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        margin-bottom: 40px;

        &-number {
          font-family: Avenir Next Cyr;
          font-size: 48px;
          line-height: 59px;
          display: flex;
          align-items: center;
          /* text-align: center; */
          color: #424242;
          width: 65px;
          margin-right: 20px;
        }
      }
    }
  }

  &-bottom {
    height: 134px;
    width: 100%;
    background: rgba(250, 250, 250, 0.15);
    // bottom: 0;
    display: flex;
    // position: absolute;
    flex-direction: column;
    justify-content: center;

    &-text {
      font-family: Avenir Next Cyr;
      font-size: 36px;
      line-height: 44px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.02em;
      color: #FFFFFF;
      justify-content: center;
    }
  }
}

</style>