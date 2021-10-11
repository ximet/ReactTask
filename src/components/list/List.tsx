import * as React from 'react';
import { DirectionVariant } from 'types/enums';
import * as S from './styles';
import { listSelectors } from './duck';

export interface ListProps<TItem extends {}> {
  data: TItem[];
  direction?: DirectionVariant;
  renderItem: (props: TItem) => React.ReactNode;
}
const List = <TItem extends {}>({
  data,
  direction,
  renderItem,
}: ListProps<TItem>): React.ReactElement => {
  const dataWithIds = React.useMemo(
    () => listSelectors.getDataWithIds(data),
    [data],
  );

  return (
    <S.UnorderedList direction={direction}>
      {dataWithIds.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </S.UnorderedList>
  );
};

export default List;
