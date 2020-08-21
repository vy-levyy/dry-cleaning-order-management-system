import axios from 'axios'

instance.interceptors.response.use(
  response => {
    return response
  },
  function(error) {
    const errorText = `${error.response.status} (${error.response.statusText})`

    return Promise.reject(errorText)
  }
)

export default instance
