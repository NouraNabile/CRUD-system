<template>
   <Header>Product Details Page</Header>
    <div class="card bg-base-100 w-96 shadow-sm mx-auto mt-5">
<!-- carousel -->
 <div class="carousel w-full">
  <div v-show="currentIndex === index" v-for="(img,index) in product.images" :key="index"  class="carousel-item relative w-full">
    <img
      :src="img"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <button @click="prevSlide"  class="btn btn-circle">❮</button>
      <button @click="nextSlide"  class="btn btn-circle">❯</button>
    </div>
  </div>
 
</div>
 <!-- carousel -->
  <div class="card-body">
    <h2 class="card-title">
      {{product.title}}
      <div class="badge badge-secondary">{{ product.rating }} ✨</div>
    </h2>
    <p>{{ product.description }}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-neutral">${{product.price}}</div>
    </div>
  </div>
</div>
</template>

<script>
import Header from '../components/Header.vue';
import { getProductByID } from '../services/productServices';
    export default {
        name:"ProductDetails",
        data(){
            return{
                ProductId:"",
                product:{},
                currentIndex:0
        }
    },
        methods:{
            nextSlide(){
                this.currentIndex=
                    this.currentIndex===this.product.images.length-1?0:this.currentIndex+1
            },
            prevSlide(){
                this.currentIndex=
                    this.currentIndex===0?this.product.images.length-1:this.currentIndex-1
            }
        },
        async created(){
            this.ProductId = this.$route.params.id
            try{
                const res = await getProductByID(this.ProductId)
                this.product = res.data
            }
            catch(err){
                console.log(err)
            }
            
        },
        components:{
            Header
        }
    }
</script>

<style scoped>

</style>