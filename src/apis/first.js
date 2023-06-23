import axios from 'axios';

export const getUserId=(params)=>{
  return axios.post('./userId',params)
}

// Make a request for a user with a given ID
axios.get('/user?ID=12345')

export const getUserInfo=(params)=>{
  return axios.post('/user',{
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
}
