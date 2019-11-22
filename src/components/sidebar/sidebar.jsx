import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ homeUrl, homeIcon }) => (
  <ul>
    <li>
      <a href={homeUrl}>
        <img src={homeIcon.source} alt={homeIcon.alt} />
      </a>
    </li>
  </ul>
);

Sidebar.propTypes = {
  homeUrl: PropTypes.string.isRequired,
  homeIcon: PropTypes.shape({
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
