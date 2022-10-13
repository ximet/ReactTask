import React, { FunctionComponent, useRef, useEffect, useCallback } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Store
import { setSidebarOpen } from 'redux/actionCreators/global';

// Custom hooks
import useOnClickOutside from 'hooks/useOnClickOutside';

// Assets
import { IconMenu } from 'assets/images/svg';

// Styles
import { Flex } from 'styles/global';
import * as S from './Sidebar.styles';

interface SidebarProps {
  open: boolean;
}

const navLinks = [
  { to: '/', name: 'Dashboard' },
  { to: '/about', name: 'About' },
  { to: '/feedback', name: 'Feeback' }
];

const Sidebar: FunctionComponent<SidebarProps> = ({ open }) => {
  const sidebarRef = useRef<HTMLElement>(null);

  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleSidebarClose = useCallback(() => dispatch(setSidebarOpen(false)), [dispatch]);

  useOnClickOutside(sidebarRef, handleSidebarClose);

  // Close sidebar on route change
  useEffect(() => {
    handleSidebarClose();
  }, [pathname, handleSidebarClose]);

  return (
    <S.Sidebar role="menu" ref={sidebarRef} open={open}>
      <Flex directionColumn alignFlexStart>
        <S.SidebarHeader>
          <Flex>
            <IconMenu />
            <span>Weather App</span>
          </Flex>
        </S.SidebarHeader>
        <S.SidebarBody>
          {navLinks.map(navLink => (
            <NavLink key={navLink.to} to={navLink.to}>
              {({ isActive }) => <S.SidebarItem active={isActive}>{navLink.name}</S.SidebarItem>}
            </NavLink>
          ))}
        </S.SidebarBody>
      </Flex>
    </S.Sidebar>
  );
};

export default Sidebar;
