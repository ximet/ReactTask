import { CITIES_PAGE_LINK, CONTACT_US_PAGE_LINK } from '../../../constants/constants';
import NavMenuItem from '../NavMenuItem/NavMenuItem';
import './NavMenuList.css';

function NavMenuList() {
  return (
    <ul className="menu__list">
      <NavMenuItem text="About Us" link={CONTACT_US_PAGE_LINK} />
      <NavMenuItem text="Cities" link={CITIES_PAGE_LINK} />
    </ul>
  );
}

export default NavMenuList;
