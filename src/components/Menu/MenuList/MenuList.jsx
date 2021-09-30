import MenuItem from '../MenuItem/MenuItem';
import './MenuList.css'

function MenuList() {
  return (
    <ul className="menu__list">
      <MenuItem text="About Us" link="/aboutus" />
      <MenuItem text="Cities" link="/cities" />
    </ul>
  );
}

export default MenuList;
