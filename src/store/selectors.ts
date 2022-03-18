import { StoreInterface } from './interfaces';

const tokenSelector = (store: StoreInterface) : string => store.token;
const themeSelector = (store: StoreInterface) : string => store.theme;

export { tokenSelector, themeSelector };
