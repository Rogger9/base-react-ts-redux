import { IItem } from '../../../../redux/cartSlice';

export const filterItems = (items: IItem[], keyword: string) => {
  return items.filter((item) => item.name.includes(keyword));
};
