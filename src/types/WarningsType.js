// @flow
export type WarningType = {
  type: string,
  significance: string,
  attribution: string,
  validFrom: string,
  validUntil: string,
  description: Array<WarningDescrMsgType>,
  attributionUrl: string,
  link: string,
  sent: string,
  name: string,
  significanceDescription: string
};

type WarningDescrMsgType = {
  lang: string,
  text: string
};

export type WarningsType = Array<WarningType>;
