import axios from "axios";

const BASE_URL = process.env.BACK_END_BASE_URL || "http://localhost:3001";

/** API Class used to get/send data to the back end API. */

class yodlrAPI {

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);
       
        const url = `${BASE_URL}/${endpoint}`;
        const params = (method === "get")
            ? data
            : {};
    
        try {
          return (await axios({ url, method, data, params })).data;
        } catch (err) {
          console.error("API Error:", err.response);
          let message = err.response.data.error.message;
          throw Array.isArray(message) ? message : [message];
        }    
    }

    // USER API Routes


    /* GET users listing. */
    static async getUsers() {
        const res = await this.request(`/`);
        return res;
    }  
  
    /* Create a new user */
    static async createUser(data) {
        const res = await this.request(`/`, data, "post");
        return res;
    }  
    
    /* Get a specific user by id */
    static async getUser(id) {
        const res = await this.request(`/${id}`);
        return res;
    }  
    
    /* Delete a user by id */
    static async deleteUser(id) {
        const res = await this.request(`/${id}`, {}, "delete");
        return res;
    }  
    
    /* Update a user by id */
    static async updateUser(data) {
        const res = await this.request(`/${data.id}`, data, "put");
        return res;
    }  
    
}

export default yodlrAPI;