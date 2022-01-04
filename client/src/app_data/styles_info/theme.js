import {
  ACTIVE_LINK_COLOR,
  BLACK_COLOR_GENERAL, BLACK_SHADOW_LAYER_GENERAL, FEEDBACK_TITLE_PARAGRAPH,
  FOOTER_BG, GRAY_COLOR_GENERAL,
  HEADER_BG,
  MOBILE_MENU_BG, PURPLE_COLOR_GENERAL,
  WHITE_COLOR_GENERAL
} from './index';

export const LIGHT = {
  palette: {
    type: "light",
    common: {
      main:BLACK_COLOR_GENERAL,
      additional:WHITE_COLOR_GENERAL,
      active: ACTIVE_LINK_COLOR,
    },
    gradient: {
      footer: MOBILE_MENU_BG,
      header: MOBILE_MENU_BG,
      mobileMenu: FOOTER_BG,
    },
    secondary: {
      main: PURPLE_COLOR_GENERAL,
      marks: GRAY_COLOR_GENERAL,
      title: FEEDBACK_TITLE_PARAGRAPH
    },
    layerShadow: BLACK_SHADOW_LAYER_GENERAL
  }
};
export const DARK = {
  palette: {
    type: "dark",
    common: {
      main:BLACK_COLOR_GENERAL,
      additional:WHITE_COLOR_GENERAL,
      active: ACTIVE_LINK_COLOR,
    },
    gradient: {
      footer: FOOTER_BG,
      header: HEADER_BG,
      mobileMenu: MOBILE_MENU_BG,
    },
    secondary: {
      main: PURPLE_COLOR_GENERAL,
      marks: GRAY_COLOR_GENERAL,
      title: FEEDBACK_TITLE_PARAGRAPH
    },
    layerShadow: BLACK_SHADOW_LAYER_GENERAL
  }
};


