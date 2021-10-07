import 'styled-components';
import { LayoutSize, ColorVariant } from 'types/enums';
import { PaletteItem } from 'types/entities';

declare module 'styled-components' {
  export interface DefaultTheme {
    shape: {
      borderRadius: string;
      boxShadow: string;
    };
    spacing: (multiplier?: number) => string;
    typography: {
      fontFamily: string;
      fontSizes: string[];
    };
    breakpoints: { values: Record<LayoutSize, string> };
    transition: string;
    palette: {
      primary: PaletteItem;
      secondary: PaletteItem;
      error: PaletteItem;
      background: PaletteItem;
      text: Record<ColorVariant, string>;
      divider: string;
      gray: Record<
        50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
        string
      >;
    };
  }
}
