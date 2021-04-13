import axios from 'axios';

export async function getToken() {
  try {
    const res = await axios.get('http://localhost:3000/auth');
    const token = await res.data.access_token;
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    console.log(error);
  }
}
