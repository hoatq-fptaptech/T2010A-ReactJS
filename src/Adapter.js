import axios from "axios";

const baseURL = "https://localhost:44396";
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJUMjAxMEFKV1RTZXJ2aWNlIiwianRpIjoiM2M2NmNhNWYtYzYwYi00NDc1LWFjMTQtZTQzZWI2OWE0ZmM3IiwiaWF0IjoiMi8xNi8yMiAyOjA3OjExIFBNIiwiSWQiOiIxIiwiVXNlcm5hbWUiOiJhZG1pbiIsImV4cCI6MTY0NTA4MTYzMSwiaXNzIjoiVDIwMTBBc2VydmljZUFBcGlXaXRKV1QiLCJhdWQiOiJDbGllbnRTZXJ2aWNlVXNpbmdUb2tlbiJ9.CgxR52csUXR40n3odWZ_NCvM5ks-Ka1xbHjejs02wqw";

export const Adapter = axios.create({
    baseURL:baseURL,
    headers:{
        "Authorization":"Bearer "+token,
        "Content-Type":"application/json"
    }
})

export const API_URL = {
    GetCategories:"/api/Categories",
    PostCategories:"/api/Categories"
}