import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: cyan;
    --text: rgb(250, 250, 250);
    --borders: #EBF0F8;
    --page-background: rgb(250, 250, 250);
    --container-background: rgb(64, 99, 127);
    --card-background: rgb(112, 193, 179);
    --spinner-color: rgb(69, 36, 216);
    --grey-color: rgb(241,241,241);
    --black-color: rgb(37, 37, 37);
    --dark-grey-color: rgb(166, 166, 166);
    --text: rgb(255, 255, 255);


    --card-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3), 0 17px 17px 0 rgba(0, 0, 0, 0.15)
    --card-second-shadow: rgba(0, 0, 0, 0.15)

    --x1: 4px;
    --x2: 8px;
    --x3: 16px;
    --x4: 24px;
    --x5: 32px;
    --x6: 64px;

    --f1: 0.75rem;
    --f2: 0.875rem;
    --f3: 1rem;
    --f4: 1.25rem;
    --f5: 1.5rem;
    --f6: 1.75rem;
    --f7: 2rem;
    --f8: 2.25rem;
    --f9: 2.5rem;
    --f10: 2.75rem;
    --f11: 3rem;
    --f12: 3.25rem;
    --f13: 3.5rem;
    --f20: 5rem;
  }
`;
