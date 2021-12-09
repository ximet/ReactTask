import * as React from 'react';
import { useCallback } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Menu from '../../common/Menu';
import Container from '@mui/material/Container';
import * as S from '../style';
import PropTypes from 'prop-types';
import MobileMenu from '../components/MobileMenu';

export const AppBar = props => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const openNavMenuHandler = useCallback(
    event => {
      setAnchorElNav(event.currentTarget);
    },
    [anchorElNav]
  );

  const closeNavMenuHandler = useCallback(() => {
    setAnchorElNav(null);
  }, []);

  return (
    <S.AppBarMUI>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <S.Logo xs="none" md="flex" mr={16} variant="h6" noWrap component="div">
            {props.appName}
          </S.Logo>
          <MobileMenu
            onOpen={openNavMenuHandler}
            onClose={closeNavMenuHandler}
            anchor={anchorElNav}
            pages={props.pages}
          />
          <S.Logo xs="flex" md="none" mr={16} grow={1} variant="h6" noWrap component="div">
            {props.appName}
          </S.Logo>
          <Menu
            onClose={closeNavMenuHandler}
            pages={props.pages}
            xs="none"
            md="flex"
            justify="flex-end"
          />
        </Toolbar>
      </Container>
    </S.AppBarMUI>
  );
};

AppBar.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      component: PropTypes.elementType,
      path: PropTypes.string,
      exact: PropTypes.bool
    })
  )
};
