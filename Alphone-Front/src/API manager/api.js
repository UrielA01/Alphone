import axios from "axios";

const baseRequest = axios.create({
    baseURL: "http://127.0.0.1:8000/"
});

const contacts = async () => (await baseRequest.get('contacts'));

const addContact = (teamName, system, numbers) => {
    const response = baseRequest.post('contact', {
        teamName: teamName,
        system: system,
        numbers: numbers
    });
    return response;
}

const deleteContact = (contactId) => {
    const response = baseRequest.delete('contact', {data: {
        contactId: contactId
    }
    });
    return response;
}
 
export { contacts, addContact, deleteContact }