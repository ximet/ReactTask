import { uniqueId } from 'lodash-es';
import * as Types from './types';

export const getDataWithIds: Types.GetDataWithIds = (data) =>
  data.map((item) => ({
    ...item,
    id: item.id ? String(item.id) : uniqueId('list_item'),
  }));
