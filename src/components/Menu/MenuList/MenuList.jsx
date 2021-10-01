import { CITIES_PAGE_LINK, CONTACT_US_PAGE_LINK } from '../../../constants/constants';
import MenuItem from '../MenuItem/MenuItem';
import './MenuList.css';

function MenuList() {
  return (
    <ul className="menu__list">
      <MenuItem text="About Us" link={CONTACT_US_PAGE_LINK} />
      <MenuItem text="Cities" link={CITIES_PAGE_LINK} />
    </ul>
  );
}

export default MenuList;
