<template>
    <!-- child emits[push data] -->
    
     <form @submit.prevent="submitForm(formValues)">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4 mx-auto my-5">

  <label class="label w-full">Title</label>
  <input type="text" class="input w-full" placeholder="Title"  v-model="formValues.title"/>

  <label class="label">description</label>
  <input type="text" class="input w-full" placeholder="text"  v-model="formValues.description"/>

   <label class="label">rating</label>
  <input type="number" class="input w-full" placeholder="rating"  v-model="formValues.rating"/>

   <label class="label">price</label>
  <input type="number" class="input w-full" placeholder="price"  v-model="formValues.price"/>

   <label class="label">thumbnail</label>
  <input type="text" class="input w-full" placeholder="Password"  v-model="formValues.thumbnail"/>

   <label class="label">images</label>
  <input v-for="i in 3" :key="i" type="text" class="input w-full" v-model="formValues.images[i]" :placeholder="`image${i}`" />

  <button type="submit" class="btn btn-neutral mt-4">Add</button>
</fieldset>
</form>
</template>

<script>
    export default {
        data(){
            return{
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
             submitForm() {
                this.$emit('submitForm', this.formValues)
            }
        },
        emits:['submitForm'],
        props: ['data'],
        watch: {
        data(newVal){
            if (newVal && Object.keys(newVal).length) {
                this.formValues = { ...newVal }
            }
            }
        }
}
       
    
</script>

<style scoped>

</style>