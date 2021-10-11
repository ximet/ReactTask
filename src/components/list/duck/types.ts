export type GetDataWithIds = <TItem extends { id?: string }>(
  data: TItem[],
) => (TItem & { id: string })[];
