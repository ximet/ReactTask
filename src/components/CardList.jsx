import PropTypes from 'prop-types';
import Card from './Card';
import * as S from './Theme/GlobalStyles';

const CardList = ({ items }) => {
  return (
    <S.CardList>
      {items.map(item => (
        <Card key={item.id}>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </Card>
      ))}
    </S.CardList>
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CardList;
