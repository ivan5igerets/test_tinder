<template>
  <div class="page">
    <div class="left-part">
      <div class="left-part-top">

        <div @click="goHome" class="small-circle">
          <img src="../assets/btn_home.svg" alt="">
        </div>

        <div @click="restart" class="small-circle">
          <img  class="icon-retry" src="../assets/btn_retry.svg" alt="">
        </div>

      </div>

      <div class="left-part-body">

        <div class="left-part-body-title">Парметры:</div>

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

      <div class="left-part-bottom">
        <div class="left-part-bottom-text">Осталось в очереди:</div>
        <div class="left-part-bottom-text"> {{ curBuyerId + 1}} / {{ buyers.length }} </div>
      </div>
      
    </div>

    <div class="main-part">
      <div class="main-part-body">
        <transition :name="nameOfTransition">
          <Card 
            v-if="curBuyer"
            :buyer="curBuyer"
            :med="medicine"
          />
        </transition>
      </div>

      <div class="main-part-footer">
        <button @click="next(1)" :disabled="medicine !== 0" class="medicine left">Препарат 1</button>
        <button @click="next(2)" :disabled="medicine !== 0" class="medicine center">Препарат 2</button>
        <button @click="next(3)" :disabled="medicine !== 0" class="medicine right">Препарат 3</button>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/card'
import {mapState, mapMutations} from 'vuex'

export default {
  components: {
    Card
  },

  data() {
    return {
      curBuyerId: null,
      curBuyer: null,
      medicine: 0,
      nameOfTransition: 'first'
    }
  },

  mounted() {
    this.curBuyerId = 0
    this.curBuyer = this.buyers[this.curBuyerId]

    console.log(this.buyers);
  },

  methods: {
    next(medicine) {
      this.INCRIMENT(medicine)
      this.chooseTransition(medicine)
      this.curBuyerId++

      this.medicine = medicine;
      setTimeout(() => {
        this.curBuyer = null
        setTimeout(() => {
          this.medicine = 0
          if(this.curBuyerId === this.buyers.length) {
            this.$router.push({name: 'Final'})
            return
          }
          this.curBuyer = this.buyers[this.curBuyerId]
        }, 500)
      }, 500)
    },

    chooseTransition(med) {
      switch(med) {
        case 1:
          this.nameOfTransition = 'first'
          break
        case 2:
          this.nameOfTransition = 'second'
          break
        case 3:
          this.nameOfTransition = 'third'
          break
      }
    },

    goHome() {
      this.$router.push({name: 'Start'})
    },

    restart() {
      this.ON_START()
      this.curBuyerId = 0
      this.curBuyer = this.buyers[this.curBuyerId]
      
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
.first-enter-active, .first-leave-active,
.second-enter-active, .second-leave-active,
.third-enter-active, .third-leave-active {
  transition: all .3s ease;
}
.first-enter,
.second-enter,
.third-enter {
  opacity: 0;
}

.first-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100%) rotate(-45deg);
}

.second-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(-100%) rotate(-30deg);
}
.third-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(100%) rotate(45deg);
}


.page {
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
}

.left-part {
  width: 470px;
  height: 100%;
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  opacity: 0.7;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &-top {
    // position: absolute;
    // top: 0;
    width: 370px;
    height: 130px;
    // background: cornflowerblue;
    display: flex;
    padding: 70px 50px 0;

    .small-circle {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: #fff;
      margin-right: 38px;
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
    // height: 200px;
    // background: olivedrab;

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

.main-part {
  // background: forestgreen;
  width: calc(100% - 470px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &-body {
    display: flex;
    margin: auto;
  }

  &-footer {
    height: 160px;
    // background: lightcoral;

    .medicine {
      width: 280px;
      height: 90px;
      border-radius: 45px;

      font-family: Avenir Next Cyr;
      font-size: 28px;
      line-height: 34px;
      margin: 10px;
      color: #FFFFFF;

      border: none;
      outline: none;
    }

    .left {
      background: linear-gradient(266.19deg, #8049C7 0%, #CA57FD 100%);

      &:hover {
        background: linear-gradient(266.19deg, #7040af 0%, #b14bdd 100%);
      }

      &:active {
        background: linear-gradient(266.19deg, #613797 0%, #8d3bb1 100%);
      }
    }

    .center {
      background: linear-gradient(266.19deg, #169AE4 0%, #0CC4FA 100%);

      &:hover {
        background: linear-gradient(266.19deg, #138bd1 0%, #0bafe0 100%);
      }
      
      &:active {
        background: linear-gradient(266.19deg, #106fa7 0%, #0990b9 100%);
      }
    }

    .right {
      background: linear-gradient(90deg, #FFD748 0.02%, rgba(195, 199, 11, 0.96) 99.97%, #CAC6AB 99.98%, #D3E9E1 99.99%);
      
      &:hover {
        background: linear-gradient(90deg, #ecc742 0.02%, rgba(177, 180, 10, 0.96) 99.97%, #b8b49c 99.98%, #b7cac3 99.99%);
      }
      
      &:active {
        background: linear-gradient(90deg, #d3b23a 0.02%, rgba(154, 156, 9, 0.96) 99.97%, #9b9784 99.98%, #9eafa9 99.99%);
      }
    }
  }
}
</style>