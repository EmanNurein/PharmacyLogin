# Rest login Api part

# GetAllUser

(GET)> http://localhost:5000/api/auth/users  
 https://pharm-loginapp.herokuapp.com/users

# Register

(POST)> http://localhost:5000/api/auth/register
(body) => {
{
"name":"Mutasim",
"email":"mutasim@hotmail.com",
"password":"june2022",
"phone":"0914432545",
"role":"user"
}

https://pharm-loginapp.herokuapp.com/register

# Login

(POST) => http://localhost:5000/api/auth/login
(body) => {
"email":"mutasim@hotmail.com",
"password":"june2022"
}
#(Response)=> {auth:true,token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'}

https://pharm-loginapp.herokuapp.com/login

# UserInfo

(GET) => http://localhost:5000/api/auth/userinfo
(Header) => {'x-access-token':'token value from login'}
("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmMyYWMyNjhlODM1ZGU3ODZiNmRiZCIsImlhdCI6MTY1NjQ5OTA4NywiZXhwIjoxNjU2NTg1NDg3fQ.vqh5_Et7MKF9QAuWsvLnfTaS1UP_R3VVb0GEWVBuw6U")

https://pharm-loginapp.herokuapp.com/userinfo
