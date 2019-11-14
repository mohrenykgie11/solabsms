export default function (Vue) {
  let authUser = {};
  Vue.auth = {
    setToken(jwtToken) {
      localStorage.setItem('jwtToken', jwtToken)
    },
    getToken() {
      let token = localStorage.getItem('jwtToken');
      if (!token) {
        return null;
      } else {
        return token
      }
    },
    destroyToken() {
      return localStorage.removeItem('jwtToken');
    },
    destroyUser() {
      localStorage.removeItem('pic');
      return localStorage.removeItem('user');
    },
    isAuthenticated() {
      if (this.getToken())
        return true;
      return false;
    },
    setAuthUser(name) {
      localStorage.setItem('user', name)
    },
    getAuthUser() {
      let user = localStorage.getItem('user');
      if (!user)
        return null;
      return user;
    },
    getAuthUserPic() {
      let image = localStorage.getItem('image');
      if (!image)
        return null;
      return image;
    },
    
  }

  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: () => {
        return Vue.auth;
      }
    }
  })
}
