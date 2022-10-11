// Given stored username and password and input username and password, Print if the user can login or not.

let data_username="badboy@gmail.com"
let data_password="123"

let username="badboy@gmail.com"
let password="1623"

if(data_username==username){
  if(data_password==password){
    console.log("Login done")
  }else{
    console.log("Wrong password")
  }
}else{
  console.log("Wrong username")
}