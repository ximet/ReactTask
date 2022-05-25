import { getWeatherIcon } from '../../services/functions';
import PropTypes from 'prop-types';
import * as S from './WeatherCard.styles';

const WeatherCard = ({ data }) => {
  return (
    <S.Container>
      {data.map(({ symbol, maxTemp, maxWindSpeed, date }, index) => (
        <S.CardContainer key={index}>
          <S.ImageWrapper>
            <img src={getWeatherIcon(symbol)} alt={symbol} />
          </S.ImageWrapper>
          <section>
            <S.DescriptionWrapper>{maxTemp} C</S.DescriptionWrapper>
            <S.DescriptionWrapper>{maxWindSpeed} m/s</S.DescriptionWrapper>
            <S.DescriptionWrapper>{date}</S.DescriptionWrapper>
          </section>
        </S.CardContainer>
      ))}
    </S.Container>
  );
};

WeatherCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      maxTemp: PropTypes.number.isRequired,
      maxWindSpeed: PropTypes.number.isRequired,
      symbol: PropTypes.string.isRequired
    })
  )
};

export default WeatherCard;
