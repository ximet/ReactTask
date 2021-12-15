import React from 'react';
import { Box } from '@mui/material';
import * as S from '../style';
import PinDropSharpIcon from '@mui/icons-material/PinDropSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import { FEEDBACK_TEXT_COLOR } from '../../../app_data/styles_info';
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import { MuiSvgIconContainer } from '../style';

export function Feedback(props) {
  console.log(props);
  return (
    <S.Box>
      <S.Container maxWidth={970}>
        <S.Title m={'0 30px'} variant="h4" align="left">
          Send us a message
        </S.Title>
        <S.GridContainer container spacing={2}>
          <S.GridItem sm={6} md={6} item>
            <S.Paragraph component={'p'} m="0 0 10px">
              You can contact us with anything related to our Products. We'll get in touch with you
              as soon as possible.
            </S.Paragraph>
            <Box
              component="form"
              noValidate
              autoComplete="off"
            >
              <S.TextField
                fullWidth
                color={'secondary'}
                error={Boolean(props.name.error)}
                id="standard-error-helper-text"
                label={props.name.value}
                // defaultValue={props.name.value}
                helperText={props.name.error}
                variant="standard"
                onChange={event => {
                  props.changeName(event.target.value);
                }}
              />
              <S.TextField
                fullWidth
                color={'secondary'}
                error={Boolean(props.phone.error)}
                id="standard-error-helper-text"
                label={props.phone.value}
                // defaultValue={props.phone.value}
                helperText={props.phone.error}
                variant="standard"
                onChange={event => {
                  props.changePhone(event.target.value);
                }}
              />
              <S.TextField
                fullWidth
                color={'secondary'}
                error={Boolean(props.email.error)}
                id="standard-error-helper-text"
                label={props.email.value}
                helperText={props.email.error}
                variant="standard"
                onChange={event => {
                  props.changeEmail(event.target.value);
                }}
              />
              <S.TextField
                fullWidth
                color={'secondary'}
                error={Boolean(props.message.error)}
                helperText={props.message.error}
                id="standard-multiline-static"
                label={props.message.value}
                multiline
                rows={4}
                variant="standard"
                onChange={event => {
                  props.changeMessage(event.target.value);
                }}
              />

              <S.Button variant="contained">CONTACT US</S.Button>

            </Box>
          </S.GridItem>
          <S.GridItem sm={4} md={4} item marginLeft="auto">
            <S.DetailsContainer>
              <S.MuiSvgIconContainer>
                <PinDropSharpIcon />
              </S.MuiSvgIconContainer>
              <div>
                <S.Title m="30px 0 14px" variant="h6" align="left">
                  Find us at the office
                </S.Title>
                <div>
                  <S.Paragraph
                    component={'p'}
                    m="0 0 10px"
                    align="left"
                    color={FEEDBACK_TEXT_COLOR}
                  >
                    Bld Mihail Kogalniceanu, nr. 8, <br /> 7652 Bucharest, <br /> Romania
                  </S.Paragraph>
                </div>
              </div>
            </S.DetailsContainer>
            <S.DetailsContainer>
              <S.MuiSvgIconContainer>
                <LocalPhoneSharpIcon />
              </S.MuiSvgIconContainer>
              <div>
                <S.Title m="30px 0 14px" variant="h6" align="left">
                  Give us a ring
                </S.Title>
                <div>
                  <S.Paragraph
                    component={'p'}
                    m="0 0 10px"
                    align="left"
                    color={FEEDBACK_TEXT_COLOR}
                  >
                    Michael Jordan <br/> +40 762 321 762 <br/> Mon - Fri, 8:00-22:00
                  </S.Paragraph>
                </div>
              </div>
            </S.DetailsContainer>
            <S.DetailsContainer >
              <S.MuiSvgIconContainer>
                <BusinessCenterSharpIcon />
              </S.MuiSvgIconContainer>
              <div>
                <S.Title m="30px 0 14px" variant="h6" align="left">
                  Legal Information
                </S.Title>
                <div>
                  <S.Paragraph
                    component={'p'}
                    m="0 0 10px"
                    align="left"
                    color={FEEDBACK_TEXT_COLOR}
                  >
                    Creative Tim Ltd. <br/> VAT · EN2341241 <br/> IBAN · EN8732ENGB2300099123 <br/> Bank · Great Britain Bank
                  </S.Paragraph>
                </div>
              </div>
            </S.DetailsContainer>
          </S.GridItem>
        </S.GridContainer>
      </S.Container>
    </S.Box>
  );
}

export const mapStateToProps = ({ feedback: { name, email, phone, message } }) => {
  return {
    name,
    email,
    phone,
    message
  };
};
