<template>
<div id="app">
    <header>
      <span>Vue.js PWA</span>
    </header>
    <main>
      <div id="vuelogo"></div>
    </main>
  <div>
      <h1>Vue</h1>
      <h4>Value is {{count}}</h4>
      <input type="button" v-on:click="handleIncrement" value="+"></input>
      <input type="button" v-on:click="handleDecrement" value="-"></input>
  </div>
  </div>
</template>


<style>
body {
  margin: 0;
}
#vuelogo {
background-image: url("./assets/logo.png");
height: 190px;
width:200px;
}
main {
  text-align: center;
  margin-top: 40px;

}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
height: 60vh;
  background-color: white;
}
</style>



<script>
export default {
  name: 'app',
  data: () => ({
    count: window.myapp.counter,
  }),
  mounted() {
    window.addEventListener('onIncrement', () => {
      this.count = window.myapp.counter;
    });
    window.addEventListener('onDecrement', () => {
      this.count = window.myapp.counter;
    });
  },
  methods: {
    handleIncrement : () => {
      window.myapp.incrementor();
    },
    handleDecrement : () => {
      window.myapp.decrementor();
    },
  }
}
</script>