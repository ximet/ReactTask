import React, { useState } from 'react';
import styles from '../styles.scss';
import { MyBytton } from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState([
    'Afghanistan',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bangladesh',
    'Barbados',
    'Bahamas',
    'Bahrain',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'British Indian Ocean Territory',
    'British Virgin Islands',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burma',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo-Brazzaville',
    'Congo-Kinshasa',
    'Cook Islands',
    'Costa Rica',
    'Croatia',
    'Cura?ao',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor',
    'Ecuador',
    'El Salvador',
    'Egypt',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Federated States of Micronesia',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Lands',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard and McDonald Islands',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India'
  ]);
  const filteredItems = items.filter(item =>
    item.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );
  return (
    <div className={styles.MainPage}>
      <div className={styles.search}>
        <p>Find the right location</p>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="write here"
        ></MyInput>
      </div>
      <div className={styles.items}>
        {filteredItems.map(item => (
          <MyBytton key={item}>{item}</MyBytton>
        ))}
      </div>
    </div>
  );
}
