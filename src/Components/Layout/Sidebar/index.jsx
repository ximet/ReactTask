import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-eva-icons';
import styles from './Sidebar.sass';

const Sidebar = (props) => {
  return (
    <aside className={[
        styles.sidebar,
        props.isCollapsed ? styles.sidebarCollapsed : styles.sidebarOpened
      ].join(' ')}>
      <div className={styles.sidebarActions}>
        <Icon
          name={'menu-2'}
          size={'large'}
          fill={'var(--menu-color)'}
        />
      </div>
      <nav className={styles.sidebarNav}>
        <a
          href='#Overview'
          title='Overview'
        >
          <Icon
            name={'grid-outline'}
            size={'large'}
            fill={'var(--brand)'}
          />
        </a>
        <a
          href='#Analitycs'
          title='Analitycs'
        >
          <Icon
            name={'bar-chart'}
            size={'large'}
            fill={'var(--brand)'}
          />
        </a>
        <a
          href='#Map'
          title='Map'
        >
          <Icon
            name={'map-outline'}
            size={'large'}
            fill={'var(--brand)'}
          />
        </a>
        <a
          href='#Travel'
        >
          <Icon
            name={'briefcase-outline'}
            size={'large'}
            fill={'var(--brand)'}
          />
        </a>
        <a
          href='#Settings'
          title='Settings'
        >
          <Icon
            name={'settings-2-outline'}
            size={'large'}
            fill={'var(--brand)'}
          />
        </a>
      </nav>
    </aside>
  );
};

Sidebar.propTypes = {
  isCollapsed: PropTypes.bool,
};

Sidebar.defaultProps = {
  isCollapsed: true,
};

export default Sidebar;
