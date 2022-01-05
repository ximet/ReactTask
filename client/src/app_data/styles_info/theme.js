import {
  YELLOW,
  BLACK,
  BLACK_SHADOW_LAYER,
  DARK_GREY,
  GREY,
  AQUAMARINE_GRADIENT,
  PURPLE_GRADIENT,
  PURPLE,
  WHITE,
  DARK_GOLD,
  GREEN_BLUE_GRADIENT,
  DARK_BLUE_GRADIENT,
  DEEP_ORANGE,
  DEEP_YELLOW
} from './index';

export const LIGHT = {
  palette: {
    type: 'light',
    common: {
      main: BLACK,
      additional: WHITE,
      active: YELLOW
    },
    gradient: {
      footer: AQUAMARINE_GRADIENT,
      header: AQUAMARINE_GRADIENT,
      mobileMenu: PURPLE_GRADIENT
    },
    secondary: {
      main: PURPLE,
      notes: GREY,
      title: DARK_GREY
    },
    layerShadow: BLACK_SHADOW_LAYER
  }
};

export const DARK = {
  palette: {
    type: 'dark',
    common: {
      main: DARK_GOLD,
      additional: DEEP_ORANGE,
      active: DEEP_YELLOW
    },
    gradient: {
      footer: DARK_BLUE_GRADIENT,
      header: DARK_BLUE_GRADIENT,
      mobileMenu: GREEN_BLUE_GRADIENT
    },
    secondary: {
      main: BLACK,
      notes: GREY,
      title: DARK_GREY
    },
    layerShadow: BLACK_SHADOW_LAYER
  }
};
