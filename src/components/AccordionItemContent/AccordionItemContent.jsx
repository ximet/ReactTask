import PropTypes from 'prop-types';
import * as S from './AccordionItemContent.styles';

const Dropdown = ({ data }) => {
  return (
    <S.Dropdown>
      {data.map(({ id, description }) => (
        <S.ElementStyle
          key={id}
          dangerouslySetInnerHTML={{
            __html: description
          }}
        ></S.ElementStyle>
      ))}
    </S.Dropdown>
  );
};

Dropdown.defaultProps = {
  data: []
};

Dropdown.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};

export default Dropdown;
