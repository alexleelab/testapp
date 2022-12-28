import axios from 'axios';

const instance = axios.create({
  baseURL: `https://testappbalabackend.herokuapp.com/`,
});

export default instance;

//instance.get('/hi').then((data) => console.log(data));
