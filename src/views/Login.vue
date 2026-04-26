<template>
    
     <!-- Logo + Title -->
  <div class="bg-gray-800/50 border-b border-white/10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div class="flex h-16 items-center">

       
        <div class="flex items-center gap-3">

          <img 
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            alt="logo"
            class="h-8 w-auto"
          />

          <div class="text-white font-semibold text-lg tracking-wide">
            CRUD System
          </div>

        </div>

      </div>

    </div>
  </div>
    <!-- faild login -->
<div v-if="showSplash" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

  <div class="bg-white w-96 max-w-[90%] rounded-2xl shadow-2xl p-8 text-center">

    <!-- Icon -->
    <div class="text-red-500 text-5xl mb-3">
      ⚠️
    </div>

    <!-- Title -->
    <h2 class="text-2xl font-bold text-gray-800 mb-2">
      Login Failed
    </h2>

    <!-- Message -->
    <p class="text-gray-500 mb-6">
      {{ errorMessage }}
    </p>

    <!-- Button -->
    <button 
      class="btn btn-error w-full"
      @click="resetLogin"
    >
      Try Again
    </button>

  </div>

</div>
<!-- login -->
  <div class="flex  items-center justify-center pt-40">
    <div class="card w-96 bg-base-100 shadow-xl">

      <div class="card-body">
        <h2 class="text-center text-2xl font-bold mb-4">Login</h2>

        <label class="label">Username</label>
        <input 
          type="text" 
          class="input input-bordered w-full" 
          placeholder="Enter username"
          v-model.trim="username"
        />

        <label class="label mt-2">Password</label>
        <input 
          type="password" 
          class="input input-bordered w-full" 
          placeholder="Enter password"
          v-model.trim="password"
        />

        <button 
          class="btn btn-primary w-full mt-5" 
          @click="login"
        >
          Login
        </button>

      </div>
    </div>

  </div>
</template>

<script>
import router from "../router";
import { getAllUsers } from "../services/loginServices";
    export default {
        name:"Login",
        data(){
            return{
                username:"",
                password:"",
                errorMessage:"",
                showSplash:false
            }
        },
        methods:{
            async login(){
                const users = await getAllUsers
                const test = users.data.find(u => u.username === this.username.toLowerCase() && u.password === this.password)
                if(test){
                   localStorage.setItem("token", "loggedin");
                   localStorage.setItem("username", test.username);
                    this.$router.push({path:"/products",query: { name: this.username }})
                }
                else{
                    this.errorMessage = "Invalid username or password";
                    // setTimeout(()=>{
                        this.showSplash = true;

                    // },2000);
                }},
                resetLogin(){
                    this.showSplash = false;
                    this.username = "";
                    this.password = "";
                    this.errorMessage = "";
                        
                
            }
                // const user = getAllUsers.data.find(u => u.username === this.username.toLowerCase() && u.password === this.password)

            // const url = `http://localhost:3000/users?username=${this.username.toLowerCase()}`

            // console.log("URL:", url)

            // const res = await axios.get(`http://localhost:3000/users?password=123`)
            // // const res = await axios.get(url)

            // console.log("RESULT:", res.data)
            }
        }
    
</script>

<style scoped>

</style>