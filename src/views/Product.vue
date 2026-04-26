<template>
<div class="bg-white shadow-md rounded-xl px-6 py-4 my-6">
  <!-- Top Row -->
  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

    <!-- Welcome -->
     <keep-alive>
    <h2 class="text-xl font-bold font-serif text-gray-800">
      Welcome {{ username }}
      <span class="text-indigo-600">(Admin)</span>
    </h2>
    </keep-alive>
    <!-- Actions -->
    <div class="flex items-center gap-3">

      <form class="w-full md:w-72">
        <div class="relative">
          <!-- Input -->
          <input
            type="search"
            v-model="search"
            class="input input-bordered w-full pl-10"
            placeholder="Search..."
          />

        </div>
      </form>

       <!-- <button class="btn btn-primary btn-sm">
        Change Password
      </button> -->
    </div>

  </div>
</div>

<router-link :to="`/addProduct`"  class="rounded bg-green-500 max-w-32 text-white p-2 mx-5 cursor-pointer">
+ Add Product
</router-link>
<div class="relative overflow-x-auto mt-5 w-3/4 mx-auto rounded-2xl">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
             <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    index
                </th>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-12 py-3">
                    Image
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-28 py-3" >
                    Actions
                </th>
                
            </tr>
        </thead>
        <tbody>
              <tr class="px-6 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <td colspan="5" class="text-center text-white text-2xl font-medium">
                <div v-if="loading">
                    <div class="flex flex-col justify-center items-center gap-4">
                        <div class="size-24 border-b-4 border-blue-600 rounded-full animate-spin"></div>
                        <p>products is Loading .....</p>
                    </div>
                 </div>
             </td>
        </tr>
        <tr v-if="filterProduct.length==0" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 text-center">
            <td colspan="5" class="px-6 py-4">{{ search?`no product mutch your search "${search}"`:"No products in stock" }}</td>
        </tr>


            <tr v-for="(product,index) in filterProduct" :key="product.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td class="px-6 py-4">
                    {{ ++index}}
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{product.title}}
                </th>
                <td class="px-6 py-4">
                    <img :src="product.thumbnail" class="w-24">
                    
                </td>
                <td class="px-6 py-4">
                    {{ product.price }}
                </td>
                <td >
                    <button @click="handelDelete(product.id)" class="text-white bg-red-500 hover:bg-red-900 cursor-pointer text-2x py-4 px-5 rounded-3xl" >delete</button>
                    <router-link :to="`/products/${product.id}`" 
                    class="text-white bg-green-500 hover:bg-green-900 cursor-pointer text-2x py-4 px-5 rounded-3xl m-5" >show</router-link>
                    <router-link :to="`/UpdateProduct/${product.id}`" @click="handelShow(product.id)"
                    class="text-white bg-yellow-500 hover:bg-yellow-900 cursor-pointer text-2x py-4 px-5 rounded-3xl m-5" >update</router-link>
                </td>
            
                
            </tr>
           
        </tbody>
    </table>
</div>

</template>

<script>
import { deleteProduct, getAllProducts } from '../services/productServices';

    export default {
        name:"Product",
        data(){
            return {
                products:[],
                search:"",
                loading:true,
                username:""
            }
        },
        methods:{
            async handelDelete(id){
                try{
                    await deleteProduct(id)
                    this.products=this.products.filter((p)=>p.id !== id)
                }
                catch(err){
                    console.log(err)
                }
            },
            username(){
                console.log(this.$route.query.name);
            },
            move(){
                this.$route.push("/products")
            }
        },
        computed:{
            filterProduct(){
                return this.products.filter((p)=>p.title.toLowerCase().includes(this.search.toLowerCase()))
            }
        },
        async created(){ 
            try{
                this.loading=true
                const res = await getAllProducts()
                this.username = localStorage.getItem("username")
                // console.log(res.data)
                this.products = res.data
                this.loading=false;
            }
            catch(err){
                console.log(err)
                this.loading=false;
            }
        },
            // async mounted() {
            //     await this.products.filter((p)=>p.id !== id);
            // },
        components:{
            Headers
        }
    }
</script>

<style scoped>

</style>