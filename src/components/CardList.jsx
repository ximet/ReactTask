import PropTypes from 'prop-types';
import Card from './Card';
import * as Styled from '../styles/globalStyles';

const CardList = ({ items }) => {
  return (
    <Styled.Container>
      {items.map(item => (
        <Card key={item.id}>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </Card>
      ))}
    </Styled.Container>
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CardList;
