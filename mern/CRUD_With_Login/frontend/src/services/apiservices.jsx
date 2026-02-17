

// POST LOGIN API

import api from "../config/request"

export const getLogin =async()=>{
const res = await api.get('/user') ;
console.log(res.data.data,'ressssssssssssss');
return res.data.data ;


}

export const postLogin =async (data)=>{
const res = await api.post('user/register',data) ;
return res.data ;
}

export const deleteUser = (id)=>{
  api.delete(`user/deleteuser/${id}`)
}