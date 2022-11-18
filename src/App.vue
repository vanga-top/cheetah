<template>
  <el-row :span="24">
    top bar
  </el-row>
  <el-row>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />
      <LeftNav />
    </el-col>
    <el-col :span="18"><div class="grid-content ep-bg-purple-light" />
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </el-col>
  </el-row>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LeftNav from './components/LeftNav.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,LeftNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

</style>
