import { IItem } from '../../../../redux/cartSlice';

type UpdateStock = {
  itemList: IItem[];
  item: IItem;
  operation: 'add' | 'remove';
};

export const updateStock = ({ itemList, item, operation }: UpdateStock) => {
  return itemList?.map((el) => {
    if (el.id !== item.id) return el;

    if (operation === 'add') {
      return { ...el, stock: el.stock + 1 };
    } else {
      return { ...el, stock: el.stock - 1 };
    }
  });
};
