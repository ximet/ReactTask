import { TokenType } from './enums';

export interface TokenData {
  access_token: string;
  expires_in: number;
  token_type: TokenType;
}

export type Color = `#${string}`;

export type PaletteItem = Partial<
  Record<'main' | 'contrastText' | 'dark' | 'light', Color>
>;
