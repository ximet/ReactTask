import axios from 'axios';

const contactFormRequest = data => {
  return axios({
    method: 'post',
    url: require('../../Services/mailers/contactForm.php'),
    headers: { 'content-type': 'application/json' },
    data: data
  });
};
export default contactFormRequest;
