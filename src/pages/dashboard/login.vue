<template> 
  <div class="sign-box">
    <vs-row :class="errors.first('email') ? 'form-box error-input' : 'form-box'">
      <vs-col vs-w="12" >
        <span class="sign-Text">Email Address</span>
      </vs-col>
      <vs-col vs-w="12">
        <vs-input
        v-validate="'required|email|max:50'"
        data-vv-validate-on="blur"
        v-model="loginObj.username" name="email" size="large" placeholder="brand@example.com" class="form-input"/>
        <span v-if="errors.first('email')" class="error-msg">{{ errors.first('email') }}</span>
      </vs-col>
    </vs-row>
    <vs-row :class="errors.first('password') ? 'form-box error-input' : 'form-box'">
      <vs-col vs-w="12" >
        <span class="sign-Text">Password</span>
      </vs-col>
      <vs-col vs-w="12">
        <vs-input
        v-validate="'required|max:40'"
        @keyup.enter="loginSubmit"
        v-model="loginObj.password" size="large" name="password" type="password" placeholder="Enter your password" class="form-input"/>
        <span v-if="errors.first('password')" class="error-msg">{{ errors.first('password') }}</span>
      </vs-col>
      <vs-col vs-w="12" >
        <router-link style="float: right" to="/password" class="form-link">Forgot Password</router-link>
      </vs-col>
    </vs-row>
   
    <vs-row class="form-btn-box">
      <vs-col vs-w="12" >
        <vs-button class="wd-100 form-btn"
        @click="loginSubmit">Get Access</vs-button>
      </vs-col>
    </vs-row>
    <!-- <vs-row class="mt-5">
      <span> <br>
    </vs-row> -->
    <vs-row class="form-footer">
      <vs-col vs-w="12" >
        <span>Don’t have an account? <router-link to="/signup">Register Now</router-link></span>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import service from './service.js'
export default {
  data () {
    return {
      loginObj: {
        username: '',
        password: '',
      },
      value1: null
    }
  },
  created () {
    if (this.$cookies.isKey('auth')) {
      this.$cookies.remove('auth')
      this.$store.dispatch('removeBrandId')  
    }
  },
  methods: {
    showErrorMsg (msg) {
      this.$vs.notify({
        color: 'danger',
        title: 'Error',
        text: msg,
        position:'top-right'
      })
    },
    loginSubmit () {
      this.$validator.validateAll().then(result => {
        if (result) {
          // console.log(this.$props.campaignData, 'campfinal')
          this.emitData()
        } else {
          this.showErrorMsg('Validation Error')
        }
      })
    },
    async emitData () {
      try {
        const response = await service.userLogin(this.loginObj)
        if (response.data.data.clientDetails.id) {
          this.$cookies.set('auth', response.data.data.accessToken)
          this.$store.dispatch('updateBrandId', response.data.data.clientDetails.id)
        }
        this.$router.push('/dashboard')
        console.log(response)
      } catch (error) {
        this.showErrorMsg(error.response.data.error.message)
      }
    }
  }
}
</script>
<style>
</style>
