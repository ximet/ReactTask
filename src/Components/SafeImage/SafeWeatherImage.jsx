import { useState } from 'react';

function SafeWeatherImage({ symbolCode }) {
  const [isImageExist, setIsImageExist] = useState(true);

  return (
    isImageExist && (
      <img
        src={`https://developer.foreca.com/static/images/symbols/${symbolCode}.png`}
        onError={() => {
          setIsImageExist(false);
        }}
      />
    )
  );
}

export default SafeWeatherImage;
