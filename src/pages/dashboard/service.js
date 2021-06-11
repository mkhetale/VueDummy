import {api,loginApi} from '@/api/index';

export default {
    getCounts() {
      return api.get('/api/milestones/getnewrequestcount');
    },
    userLogin (obj) {
      return loginApi.post('/api/clients/login', obj)
    },
    userLogout(auth) {
      return loginApi.post(`/api/clients/logout?access_token=${auth}`)
    }
}
