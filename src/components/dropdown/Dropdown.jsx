import * as S from './Dropdown.styles';

const Dropdown = ({ data }) => {
  return (
    <S.Dropdown>
      {data.map(el => (
        <S.ElementStyle
          key={el.id}
          dangerouslySetInnerHTML={{
            __html: el.description
          }}
        ></S.ElementStyle>
      ))}
    </S.Dropdown>
  );
};

export default Dropdown;
