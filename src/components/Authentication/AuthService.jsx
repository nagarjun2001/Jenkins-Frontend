import axios from "axios";

const auth_base_url = "http://localhost:1234/api/auth"

export const regapicall = (regobj) => axios.put(auth_base_url + '/register', regobj);

export const logapicall = (unameorEmail,pass) => axios.post(auth_base_url+ '/login', {unameorEmail});