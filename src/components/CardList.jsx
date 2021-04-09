import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({ items }) => {
  return (
    <div className="card-list">
      {items.map(item => (
        <Card key={item.id}>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </Card>
      ))}
    </div>
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CardList;
