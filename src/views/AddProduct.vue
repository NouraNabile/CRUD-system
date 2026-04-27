<template>
    <Header>AddProducts page</Header>
    <SharedForm @submitForm="handelSubmit"></SharedForm>
</template>

<script>
import Header from '../components/Header.vue';
import SharedForm from '../components/SharedForm.vue';
import { addProduct } from '../services/productServices';

    export default {
        name:"addProduct",
         methods:{
        async handelSubmit(product){
            try{
                await addProduct(product)
                this.$router.push("/products")
                // console.log(product)
            }
            catch(err){
                console.log(err)
            }
            
        },
    }
    ,components:{
        Header,
        SharedForm
   }
    }

</script>

<style scoped>

</style>