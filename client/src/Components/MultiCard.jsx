import * as Style from './MultiCard.styles';
import dateHelper from '../Utils/dateHelper';

const MultiWeather = ({ data }) => {
  return (
    <Style.Container>
      {data.map((info, index) => (
        <Style.CardContainer key={index}>
          <section>
            <Style.Description>
              Low:{info.minTemp}C High:{info.maxTemp} C
            </Style.Description>
            <Style.Description>{info.maxWindSpeed} m/s</Style.Description>
            <Style.Description>{dateHelper(info.date)}</Style.Description>
          </section>
        </Style.CardContainer>
      ))}
    </Style.Container>
  );
};

export default MultiWeather;
