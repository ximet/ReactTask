import * as React from 'react';
import { shallowEqual } from 'react-redux';
import * as S from './styles';
import * as Components from 'components';
import { useSelector, useTranslation } from 'hooks';
import { authSelectors } from 'store/auth';
import { headerSelectors } from './duck';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const auth = useSelector(authSelectors.getAuth, shallowEqual);
  const links = React.useMemo(
    () => headerSelectors.getLinks(t, auth),
    [t, auth],
  );

  return (
    <S.Header>
      <Components.Grid.Container>
        <Components.List
          data={links}
          renderItem={(link) => (
            <S.Link
              to={link.path}
              exact={link.exact}
              title={link.title}
              isActive={(match, location) =>
                headerSelectors.isActive(link, match, location.pathname)
              }
            >
              {link.text}
            </S.Link>
          )}
        />
      </Components.Grid.Container>
    </S.Header>
  );
};

export default Header;
