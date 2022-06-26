# Rest login Api part

# GetAllUser

(GET)> http://localhost:5000/api/auth/users

# Register

(POST)> http://localhost:5000/api/auth/register
(body) => {
"name":"Samah",
"email":"samah@hotmail.com",
"password":"1234567",
"phone":"0914442545",
"role":"user"
}

# Login

(POST) => http://localhost:5000/api/auth/login
(body) => {
"email":"samah@hotmail.com",
"password":"1234567"
}
#(Response)=> {auth:true,token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'}

# UserInfo

(GET) => http://localhost:5000/api/auth/userinfo
(Header) => {'x-access-token':'token value from login'}
("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjhkY2EwYjUzNWQ4ZDQ1NTgzN2EwNSIsImlhdCI6MTY1NjI4MjMxNCwiZXhwIjoxNjU2MzY4NzE0fQ.3TolynyEvkeY7OTu4bjH8E1EvgrrDK61q_jsFbWqQGg")
