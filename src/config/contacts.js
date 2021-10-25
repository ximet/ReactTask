import iconFb from '../assets/img/svg/icon-fb.svg';
import iconTw from '../assets/img/svg/icon-tw.svg';
import iconTg from '../assets/img/svg/icon-tg.svg';

export const contactsConfig = {
  email: 'testemail@gmail.com',
  socials: [
    {
      code: 'social_fb',
      icon: iconFb,
      link: 'https://www.facebook.com/',
      target: '__blank'
    },
    {
      code: 'social_tg',
      icon: iconTg,
      link: 'https://telegram.org/',
      target: '__blank'
    },
    {
      code: 'social_tw',
      icon: iconTw,
      link: 'https://twitter.com/',
      target: '__blank'
    }
  ]
};
