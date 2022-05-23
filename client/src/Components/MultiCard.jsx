import * as Style from './MultiCard.styles';

import dateToWeekdayHelper from '../Utils/dateHelper';

const MultiWeather = ({ data }) => {
  return (
    <Style.Container>
      {data.map(({minTemp, maxTemp, maxWindSpeed, date} , index) => (
        <Style.CardContainer key={index}>
          <section>
            <Style.Description>
              Low:{minTemp}C High:{maxTemp} C
            </Style.Description>
            <Style.Description>{maxWindSpeed} m/s</Style.Description>
            <Style.Description>{dateToWeekdayHelper(date)}</Style.Description>
          </section>
        </Style.CardContainer>
      ))}
    </Style.Container>
  );
};

export default MultiWeather;
