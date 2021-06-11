import axios from "axios";
import VueCookies from 'vue-cookies'
import store from '@/store/store.js'

let auth = null
if (VueCookies.isKey('auth')) {
  auth = VueCookies.get('auth')
}

const api = (() =>
  axios.create({
    baseURL: process.env.VUE_APP_URL,
    headers: {
      "Authorization": auth,
      "Content-Type": "application/json"
    }
  }))();

  const fileApi = (() =>
  axios.create({
    baseURL: process.env.VUE_APP_URL,
    headers: {
      "Content-Type": "multipart/form-data"
    },
    formData: {}
  }))()

  const loginApi = (() =>
  axios.create({
    baseURL: process.env.VUE_APP_URL,
    headers: {
      "Content-Type": "application/json"
    }
  }))()

export {
  api,
  fileApi,
  loginApi
}

//http://192.168.1.99:3000