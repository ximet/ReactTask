import iconFb from '../assets/img/svg/icon-fb.svg';
import iconTw from '../assets/img/svg/icon-tw.svg';
import iconTg from '../assets/img/svg/icon-tg.svg';

export const contactsConfig = {
  email: 'testemail@gmail.com',
  socials: {
    facebook: {
      code: 'social_fb',
      icon: iconFb,
      link: 'https://www.facebook.com/',
      target: '__blank'
    },
    telegram: {
      code: 'social_tg',
      icon: iconTg,
      link: 'https://telegram.org/',
      target: '__blank'
    },
    twitter: {
      code: 'social_tw',
      icon: iconTw,
      link: 'https://twitter.com/',
      target: '__blank'
    }
  }
};

export function getContactEmail() {
  return contactsConfig.email;
}

export function getSocialsList() {
  const socials = contactsConfig.socials;
  const socialsKey = Object.keys(socials);
  return socialsKey.map(social => socials[social]);
}
