import axios from "axios"

const api = axios.create({...})

let access_token, refreshToken
let isRefreshing = false
let queueRequests = []

async function signIn(){}
async function signUp(){}


// Add a request interceptor
api.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use(function (response) {
  if(STATUS === 401 && ERROR === "invalid token"){
    
    if(!refreshing){
      isRefreshing = true
      refresgToken() -HOME
    } else {
      queueRequests.push(...request) - HEADER
    }
  }
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default api
req
// 0s
mfe HOME /products - invalid token
mfe HEADER /analytics - invalid token
// 1s
mfe FOOTER /analytics - invalid token

network
/product - failed
/analytics - failed
/refresh - success
/product - success
/analytics - success
