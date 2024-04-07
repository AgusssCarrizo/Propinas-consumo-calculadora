import type {MenuItems} from "../types";
type MenuItemProps = {
   item: MenuItems;
   addItems: (item: MenuItems) => void;
};

export default function MenuItems({item, addItems}: MenuItemProps) {
   return (
      <button
         className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between rounded-lg mt-10"
         onClick={() => addItems(item)}>
         <p>{item.name}</p>
         <p className=" font-semibold">${item.price}</p>
      </button>
   );
}
