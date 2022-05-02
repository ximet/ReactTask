import * as S from './Dropdown.styles';

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

export default Dropdown;
