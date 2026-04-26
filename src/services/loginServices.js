import axios from "axios";
const API_login = "http://localhost:3000/users"

export const getAllUsers = await axios.get(API_login)