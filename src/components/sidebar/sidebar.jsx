import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarWrapper = styled.div`
  position: fixed;
  height: calc(100vh - 40px);
  background-color: #A52A2A;
  width: 40px;
`;

const Sidebar = ({ homeUrl, homeIcon }) => (
  <SidebarWrapper>
    <ul>
      <li>
        <Link to={homeUrl}>
          <img src={homeIcon.source} alt={homeIcon.alt} />
        </Link>
      </li>
    </ul>
  </SidebarWrapper>
);

Sidebar.propTypes = {
  homeUrl: PropTypes.string.isRequired,
  homeIcon: PropTypes.shape({
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
