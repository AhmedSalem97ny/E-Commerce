import { apiClient } from "./api-client"

export async function getAllCategories(){
 try {
       const options={
        url: `/categories`,
        method: "GET"

    }
    const response= await apiClient.request(options)
    return response
    
 } catch (error) {
    throw error
    
 }
}