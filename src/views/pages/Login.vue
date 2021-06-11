<!-- =========================================================================================
	File Name: Login.vue
	Description: Login Page
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Version: 1.1
	Author: Pixinvent
	Author URL: hhttp://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<div class="h-screen flex w-full bg-img">
		<div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 mx-auto self-center">
			<vx-card>
				<div slot="no-body" class="full-page-bg-color">
					<div class="vx-row">
						<div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
							<img src="@/assets/images/pages/login.png" alt="login" class="mx-auto">							
						</div>
						<div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center bg-white">
							<div class="p-8">
								<div class="vx-card__title mb-8">
									<h4 class="mb-4">Login</h4>
									<p>Welcome back, please login to your account.</p>
								</div>
								<vs-input icon="icon icon-user" icon-pack="feather" label-placeholder="Username" v-model="loginObj.username" class="w-full mb-6 no-icon-border"/>
								<vs-input type="password" icon="icon icon-lock" icon-pack="feather" label-placeholder="Password" v-model="loginObj.password" class="w-full mb-4 no-icon-border" />
								<!-- <div class="flex flex-wrap justify-between my-5">
									<vs-checkbox v-model="checkBox1" class="mb-3">Remember Me</vs-checkbox>
									<router-link to="/pages/forgot-password">Forgot Password?</router-link>
								</div> -->
								<!-- <vs-button  type="border" to="/pages/register">Register</vs-button> -->
								<vs-button class="float-right" @click="dashboard">Login</vs-button>

								
								<vs-divider position="center" class="my-8"></vs-divider>

								<!-- <div class="social-login mb-4 flex flex-wrap justify-between">
									<span>Or Login With</span>
									<div class="social-login-buttons flex">
										<vs-button color="#1551b1" class="mr-4 px-8" icon="icon icon-facebook" icon-pack="feather"></vs-button>
										<vs-button color="#00aaff" class="px-8" icon="icon icon-twitter" icon-pack="feather"></vs-button>
									</div>
								</div> -->
								
							</div>
						</div>
					</div>
				</div>
			</vx-card>
		</div>
	</div>
</template>

<script>
import service from '@/pages/dashboard/service.js'
export default {
	data() {
		return {
            loginObj: {
				username: '',
				password: '',
				roleId: '5cadf402357ceb27c1d22e31'
			},
			checkBox1: false
		}
	},
	created () {
    if (this.$cookies.isKey('auth')) {
      this.$cookies.remove('auth')
    //   this.$store.dispatch('removeBrandId')  
    }
  },
	// created() {
	// 	if (this.$cookies.isKey('auth')) {
	// 		this.$cookies.remove('auth')
	// 	}
	// },
	methods: {
		showErrorMsg (msg) {
			this.$vs.notify({
				color: 'danger',
				title: 'Error',
				text: msg,
				position:'top-right'
			})
		},
		dashboard() {
			if(this.loginObj.username === "test" && this.loginObj.password === "123456") {
				this.$router.push('/dashboard')
			} else {
				this.showErrorMsg("Enter Valid Credentials")
			}
		},
		// async dashboard() {
		// 	try {
		// 		const response = await service.userLogin(this.loginObj)
		// 		this.$cookies.set('auth', response.data.data.accessToken)
		// 		this.$store.dispatch('setHeader',response.data.data.accessToken)
		// 		console.log(this.$store.state.accessToken,'AccessToken')
		// 		// this.$store.dispatch('updateloggedIn')
		// 		// console.log(response.data.data)
		// 		// this.$cookies.set('auth', response.data.data.accessToken)
		// 		// console.log(response.data.data.accessToken,'From response')
		// 		this.$router.push('/dashboard')
		// 		console.log(response)
		// 	} catch (error) {
		// 		// console.log(error.response.data.error.message,'error')
		// 		this.showErrorMsg(error.response.data.error.message)
		// 	}
		// }
	}
}
</script>