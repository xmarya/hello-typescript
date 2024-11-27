import { Link } from "react-router-dom";
import { Items, List } from "../data/menuLists";

// type List = {
//   title: string;
//   items: Items[];
// };

// type Items = {
//   label: string;
//   link: string;
//   icon: string;
// };

export default function MenuList({ title, items }: List) {
  return (
    <div className="menu-list">
      <h3>{title}</h3>

      <div className="menu-items">
        {items.map(
          (item:Items, index:number): React.ReactNode => (
            <Link className="menu-one-item" to={item.link} key={index}>
              {item.icon && <img src={item.icon} alt={item.label} />}
              <span>{item.label}</span>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
