import React from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';
import LocalSeeIcon from '@material-ui/icons/LocalSee';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { leftGrid } from './SideBar.scss';

const SideBar = () => (
    <aside>
        <ul className={ leftGrid }>
            <li>
                <IconButton >
                    <MailOutlineIcon fontSize="large" />
                </IconButton>
            </li>
            <li>
                <IconButton >
                    <LanguageIcon fontSize="large" />
                </IconButton>
            </li>
            <li>
                <IconButton >
                    <LocalSeeIcon fontSize="large" />
                </IconButton>
            </li>
            <li>
                <IconButton >
                    <PeopleAltIcon fontSize="large" />
                </IconButton>
            </li>
            <li>
                <IconButton >
                    <AddIcon fontSize="large" />
                </IconButton>
            </li>
        </ul>
    </aside>
);

export default SideBar;