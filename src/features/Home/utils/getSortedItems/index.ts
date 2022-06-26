import { IItem } from '../../../../redux/cartSlice';

export type GetSortedItems = {
  items: IItem[];
  sortBy: string;
};

export const getSortedItems = ({ items, sortBy }: GetSortedItems) => {
  switch (sortBy) {
    case 'minPrice':
      return items.sort((a, b) => a.price - b.price);
    case 'maxPrice':
      return items.sort((a, b) => b.price - a.price);
    default:
      return items;
  }
};
