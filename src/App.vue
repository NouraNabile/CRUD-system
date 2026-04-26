<template>
  <div>
  <NavBar v-if="!this.$route.meta.hideNavBar"></NavBar>
  <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
// import Login from './views/Login.vue';
export default{
    name:"App",
    components:{

      NavBar
      
    }
}

</script>
