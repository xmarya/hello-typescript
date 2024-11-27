import { menuList } from "../data/menuLists";
import MenuList from "./MenuList";

export default function Menu() {
    return (
        <div className="menu">
           {
            menuList.map((menu, index) => <MenuList key={index} 
            title={menu.title.toUpperCase()} 
            items={menu.items}/>
            )
           }
        </div>
    )
}

