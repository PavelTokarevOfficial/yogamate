<template>
  <div class="container">
    <div class="row">
      <SideBar/>
      <MainContent/>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import MainContent from './components/MainContent.vue'
export default {
  components:{
    SideBar,
    MainContent,
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color:white;
}
#app{
  background-color: #002366;
  overflow: hidden;
}

</style>
