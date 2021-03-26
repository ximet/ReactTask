import axios from 'axios';

export const refreshAccessToken = async () => {
    try {
        const {
          data: { access_token }
        } = await axios.post('/auth');
        sessionStorage.setItem('token', JSON.stringify(access_token));
        return access_token;
    } catch (error) {
        alert('Oh, no something went wrong!');
    }
};
