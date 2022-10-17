export const getSymbol = (symbol: string): string => {
  return `https://developer.foreca.com/static/images/symbols/${symbol}.png`;
};

export const getBackgroundImg = (url: string): string => {
  return `https://res.cloudinary.com/dlvhpqrkd/image/upload/v1662749226/weather/${url.replace(
    /\s+/g,
    ''
  )}.jpg`;
};

export const getBannerImage =
  'https://res.cloudinary.com/dlvhpqrkd/image/upload/v1665474967/weather/2400x0_21_bzs6wr.jpg';
