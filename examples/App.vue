<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <demo></demo>
    <m-card
      imgSrc="logo.png"
      summary="vue是一个渐进式的前端框架,vue是一个渐进式的前端框架"
    ></m-card>
    <br>
    <m-card
      imgSrc="car.jpg"
      summary="奔驰官方发布了全新一代奔驰E级的预告图，新车将于4月25日正式发布"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="name">奔驰E级</div>
          <div class="price">指导价：28.8万</div>
        </div>
      </template>
  </m-card>
  <br>
  <m-card
      imgSrc="car.jpg"
      :width="370"
      :imgHeight="160"
    >
    奔驰官方发布了全新一代奔驰E级的预告图，新车将于4月25日正式发布
      <template v-slot:footer>
        <div class="footer">
          <div class="name">奔驰E级</div>
          <div class="price">指导价：28.8万</div>
        </div>
      </template>
  </m-card>
  </div>
</template>

<script>
// import Demo from '../components/lib/demo/src/demo.vue'

export default {
  name: 'App',
  // components: {
  //   Demo
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.name {
  color: black;
  padding-bottom: 8px;
}
.price {
  color: red;
}
</style>
