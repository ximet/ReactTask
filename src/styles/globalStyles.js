import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --text: rgb(250, 250, 250);
    --borders: rgb(128,255,145);
    --page-background: rgb(250, 250, 250);
    --container-background: rgb(64, 99, 127);
    --card-background: rgb(112, 193, 179);
    --spinner-color: rgb(69, 36, 216);
    --grey-color: rgb(241,241,241);
    --black-color: rgb(37, 37, 37);
    --dark-grey-color: rgb(166, 166, 166);
    --warning-color:rgb(204,51,0);
    --input-error: rgb(180,14,14);
    --success-message: rgb(129, 246, 158);
    --star-color: rgb(255, 222, 43);
    --border-error-color: rgb(143,0,0);
    --border-success-color: rgb(38,227,0);
    --input-bg-error-color: rgb(255,120,120);
    --input-bg-success-color: rgb(241,241,241);
    --success-color: rgb(102,187,106);
    --default-color: rgb(0,99,204);
    --destructive-color: rgb(204,51,0);


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
