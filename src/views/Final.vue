<template>
  <div class="page">

    <div class="left-part adaptive-left">

      <div class="header">
        <div @click="goHome" class="small-circle">
          <img src="../assets/btn_home_green.svg" alt="">
        </div>
      </div>

      <div class="result">
        <div class="result-top-part">
          <div class="medicine">
            <div class="medicine-percents"> {{calculateInterest(med_1)}} %</div>
            <div class="medicine-title">препарат 1</div>
          </div>
          
          <div class="medicine">
            <div class="medicine-percents"> {{calculateInterest(med_2)}} %</div>
            <div class="medicine-title">препарат 2</div>
          </div>
          
          <div class="medicine">
            <div class="medicine-percents"> {{calculateInterest(med_3)}} %</div>
            <div class="medicine-title">препарат 3</div>
          </div>
        </div>


        <div class="result-body">
          <div class="result-body-title">
            <p>Ваш результат:</p>  
            <p class="bolder">«Что я здесь делаю?»</p>
          </div>

          <div class="result-body-text">
            Это тестовое задание, так что не будем углубляться в глубины проблем фармацевтов. 
          </div>
        </div>
      </div>

      <div class="bottom">
        <button @click="restart" class="try-agein">Попробовать ещё</button>
      </div>

    </div>

    <div class="right-part adaptive-right">
      <div class="big-img">
        <img src="../assets/big-circle.jpg" alt="">
      </div>
    </div>

  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  methods: {
    restart() {
      this.ON_START()
      this.$router.push({name: 'Main'})
    },

    goHome() {
      this.$router.push({name: 'Start'})
    },

    calculateInterest(num) {
      return ((num / this.buyers.length) * 100).toFixed()
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
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1201px) {
  .adaptive-left {
    width: calc(100% - 670px);
  }
}
@media screen and (max-width: 1200px) {
  .adaptive-left {
    width: calc(100%);
  }

  .adaptive-right {
    display: none;
  }
}

.page {
  position: relative;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
}

.left-part {
  display: flex;
  flex-direction: column;

  .header {
    padding: 70px 50px;

    .small-circle {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: #fff;
      margin-right: 38px;
      position: relative;
      overflow: hidden;

      background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
    }
  }

  .result {
    margin-left: 60px;

    &-top-part {
      display: flex;
      justify-content: space-around;
      padding-bottom: 60px;
      border-bottom: 2px solid #D9D9D9;
      margin: 0 50px;

      
      .medicine {
        display: block;

        &-percents {
          font-family: Avenir Next Cyr;
          font-size: 48px;
          line-height: 59px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #424242;
          margin: 10px 0;
        }

        &-title {
          font-family: Avenir Next Cyr;
          font-size: 16px;
          line-height: 20px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #424242;
          justify-content: center;
        }
      }
    }

    &-body {

      &-title {
        font-family: Avenir Next Cyr;
        font-size: 40px;
        line-height: 40px;
        letter-spacing: 0.02em;
        color: #8E9AD5;
        text-align: left;
        margin-left: 50px;
        margin-top: 50px;

        .bolder {
          font-size: 45px;
          font-weight: bolder;
        }
      }

      &-text {
        font-family: Avenir Next Cyr;
        font-size: 24px;
        line-height: 29px;
        color: #424242;
        text-align: left;
        margin: 20px 50px;
      }
    }
  }

  .bottom {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: left;

    .try-agein {
      width: 270px;
      height: 60px;
      border-radius: 30px;
      border: none;
      outline: none;
      font-family: Avenir Next Cyr;
      font-size: 24px;
      line-height: 29px;
      color: #FFFFFF;
      background: linear-gradient(90deg, #D9D9D9 0%, #A1A1A1 100%);

      margin-bottom: 84px;
      margin-left: 130px;

      &:hover {
        background: linear-gradient(90deg, #cccccc 0%, #868686 100%);
      }
      
      &:active {
        background: linear-gradient(90deg, #a8a8a8 0%, #747474 100%);
      }
    }
  }
}

.right-part {
  .big-img {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>