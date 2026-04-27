<template>
    <Header>Update product</Header>
    <SharedForm :data="formValues" @submitForm="handelUpdate"></SharedForm>
</template>

<script>
import Header from '../components/Header.vue';
import SharedForm from '../components/SharedForm.vue';
import { getProductByID, updateProduct} from '../services/productServices';

    export default {
        name:"updateProduct",
        components:{
            Header,
            SharedForm
        },
        async mounted(){
            const ProductId = this.$route.params.id
            try{
                const res = await getProductByID(ProductId)
                this.formValues={...res.data}
            }
            catch(err){
                console.log(err)
            }
            
        },
        data(){
        return{
            formValues:{}
        }
    },
     methods:{
        async handelUpdate(formValues){
            console.log(formValues)
            try{
                const ProductId = this.$route.params.id
                await updateProduct(ProductId,formValues);
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