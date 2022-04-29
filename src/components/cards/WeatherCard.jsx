import { getWeatherIcon } from '../../services/functions';
import * as S from './WeatherCard.styles';

const WeatherCard = ({ data }) => {
  return (
    <S.Container>
      {data.map((info, index) => (
        <S.CardContainer key={index}>
          <S.ImageWrapper>
            <img src={getWeatherIcon(info.symbol)} alt={info.symbol} />
          </S.ImageWrapper>
          <section>
            <S.DescriptionWrapper>{info.maxTemp} C</S.DescriptionWrapper>
            <S.DescriptionWrapper>{info.maxWindSpeed} m/s</S.DescriptionWrapper>
            <S.DescriptionWrapper>{info.date}</S.DescriptionWrapper>
          </section>
        </S.CardContainer>
      ))}
    </S.Container>
  );
};

export default WeatherCard;
