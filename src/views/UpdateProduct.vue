<template>
    <Header>Update product</Header>
    <form @submit.prevent="handelSubmit()">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4 mx-auto my-5">

  <label class="label w-full">Title</label>
  <input type="text" class="input w-full" placeholder="Title"  v-model="formValues.title"/>

  <label class="label">description</label>
  <input type="text" class="input w-full" placeholder="text"  v-model="formValues.description"/>

   <label class="label">rating</label>
  <input type="any" class="input w-full" placeholder="rating"  v-model="formValues.rating"/>

   <label class="label">price</label>
  <input type="any" class="input w-full" placeholder="price"  v-model="formValues.price"/>

   <label class="label">thumbnail</label>
  <input type="text" class="input w-full" placeholder="Password"  v-model="formValues.thumbnail"/>

   <label class="label">images</label>
  <input v-for="i in 3" :key="i" type="text" class="input w-full" v-model="formValues.images[i-1]" :placeholder="`image${i}`" />

  <button type="submit" class="btn btn-neutral mt-4">Update</button>
</fieldset>
</form>
</template>

<script>
import Header from '../components/Header.vue';
import { getProductByID, updateProduct} from '../services/productServices';

    export default {
        name:"updateProduct",
        components:{
            Header
        },
        async created(){
            this.ProductId = this.$route.params.id
            try{
                const res = await getProductByID(this.ProductId)
                this.formValues={...res.data}
            }
            catch(err){
                console.log(err)
            }
            
        },
        data(){
        return{
            ProductId:"",
            formValues:{
                title:"",
                description:"",
                price:0,
                rating:0,
                thumbnail:"",
                images:[]
            }
        }
    },
     methods:{
        async handelSubmit(){
            console.log(this.formValues)
            try{
                await updateProduct(this.ProductId, this.formValues);
                await this.$router.push("/products")
            }
            catch(err){
                console.log(err)
            }
            
        }
    }
    }
</script>

<style scoped>

</style>