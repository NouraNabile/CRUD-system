import axios from 'axios'
const API = "http://localhost:3000/products"

export const getAllProducts = () => axios.get(API)
export const deleteProduct = (id)=> axios.delete(`${API}/${id}`)
export const getProductByID = (id)=>axios.get(`${API}/${id}`)
export const addProduct = (product)=>axios.post(API,product)
export const updateProduct = (id, product) =>axios.put(`${API}/${id}`, product);