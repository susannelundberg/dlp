import { settings } from "../config/settings.js";

export default class DataClient {
    #data = undefined;
    #url = '';

    constructor(resource) {
        this.#url = `${settings.BASE_API_URL}/${resource}`;
    }    

    async add(data) {
        try {
            const response = await fetch(this.#url, {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(data),
            });
            if (response.status === 201) return true;
            return false;
        } catch (error) {
            console.log(error);
        }
    }

    async listAll(data){
        try {
            const response = await fetch(this.#url);
            if (response.ok) {
                const result = await response.json();
                this.#data = result;
                return this.#data;
            }
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, data) {
        try {
            const response = await fetch(`${this.#url}/${id}`, {
                method: 'PATCH',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(data),
            });
            if (response.ok) return true;
            return false;
        } catch (error) {
            console.log(error);
        }
    }

    async findById(id){
        try {
            const response = await fetch(`${this.#url}/${id}`);
            if (response.ok) {
                const result = await response.json();
                this.#data = result;
                return this.#data;
            }
        } catch (error) {
            console.log(error);
        }
    }

    async remove(id){
        try {
            const response = await fetch(`${this.#url}/${id}`, {
                method: 'DELETE',
                headers: {'content-type': 'application/json'}
            });
            if (response.ok) return true;
            return false;
        } catch (error) {
            console.log(error);
        }
    }
}