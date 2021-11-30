import React from 'react';
import { AppBar, Grid, Typography } from '@mui/material';

function Header () {
  return (
    <Grid container component={AppBar} position='static' spacing={2} justify={'center'}>
        <Grid  item xs={12} sm={6} md={3}>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, flexGrow: 2, display: { xs: 'flex' } }}
          >
            Weather App
          </Typography>
        </Grid>

    </Grid>
  );
}

export default Header;
