import axios from "axios";

export function api() {
    const baseRequest = axios.create({
        baseURL: "http://127.0.0.1:8000/"
    });

    const getContacts = async () => {
        const contacts = await baseRequest.get('contacts');
        return contacts.data;
    }
    
    return {getContacts};
}