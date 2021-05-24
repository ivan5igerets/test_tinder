<template>
  <div class="card" v-if="isShow">

    <div v-if="med" class="med" :class="{first: med === 1, second: med === 2, third: med ===3}">
      препарат 1
    </div>

    <div class="card-photo">
      <img :src="buyer.picture" alt="">
    </div>

    <div class="card-info">

      <div class="card-info-name">
        {{ buyer.title }}
      </div>

      <div class="card-info-order">
        {{ buyer.text }}
      </div>

    </div>
    
  </div>
</template>

<script>
export default {
  props: ['buyer', 'med'],

  data() {
    return {
      isShow: false
    }
  },

  mounted() {
    this.isShow = true,
    console.log('buyer', this.buyer);
  }
}
</script>

<style lang="scss" scoped>
.card {

  .med {
    top: 50%;
    left: 20%;
    position: absolute;
    // border: 5px solid #169AE4;
    font-family: Avenir Next Cyr;
    font-size: 65px;
    line-height: 51px;
    display: flex;
    align-items: center;
    text-align: center;
    // color: #169AE4;
    transform: rotate(-30deg);
    padding: 15px;
  }

  .first {
    border: 8px solid #8049C7;
    color: #8049C7;
  }

  .second {
    border: 8px solid #169AE4;
    color: #169AE4;
  }

  .third {
    border: 8px solid #FFB903;
    color: #FFB903;
  }

  height: 590px;
  width: 540px;
  // background: gold;
  box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
  border-radius: 48px;
  overflow: hidden;
  position: relative;

  &-photo {
    // background: crimson;
    width: 100%;
    height: 350px;
  }

  &-info {
    width: 420px;
    margin: 25px 60px 0;

    &-name {
      font-family: Avenir Next Cyr;
      font-size: 32px;
      line-height: 39px;
      color: #8E9AD5;
      text-align: left;
    }

    &-order {
      font-family: Avenir Next Cyr;
      font-size: 26px;
      line-height: 30px;
      display: flex;
      align-items: center;
      letter-spacing: 0.02em;
      /* color: #FFFFFF; */
      text-align: justify;
    }
  }

  
}
</style>