interface GetNewXParams {
  x: number;
  leftBorder: number;
  wrapperWidth: number;
}

type GetPercentParams = Omit<GetNewXParams, 'leftBorder'>;

export const getNewX = ({ x, leftBorder, wrapperWidth }: GetNewXParams) => {
  let correctX = x - leftBorder;

  correctX = correctX <= 0 ? 0 : correctX;
  correctX = correctX >= wrapperWidth ? wrapperWidth : correctX;

  return correctX;
};

export const getPercent = ({ x, wrapperWidth }: GetPercentParams) => {
  return (x / wrapperWidth) * 100;
};
