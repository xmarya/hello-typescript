interface List {
  title: string;
  items: Items[];
}

interface Items {
  label: string;
  link: string;
  icon?: string;
}

/* OLD CODE (leaved for reference): 
  // export const menuList:List = [

  the previous implementation was throwing this warning :
  Type '{ title: string; items: { label: string; link: string; icon: string; }[]; }[]'
   is missing the following properties from type 'List': title, items

   it's due to that the menu list is actually and array of object containg List, so I had to change its type from one single List to be array of Lists
    */
export const menuList: List[] = [
  {
    title: "main",
    items: [
      {
        label: "homepage",
        link: "/",
        icon: "home.svg",
      },
      {
        label: "profile",
        link: "/profile",
        icon: "profile.svg",
      },
    ],
  },
  {
    title: "lists",
    items: [
      {
        label: "users",
        link: "/users",
        icon: "user.svg",
      },
      {
        label: "products",
        link: "/products",
        icon: "product.svg",
      },
      {
        label: "orders",
        link: "/orders",
        icon: "order.svg",
      },
      {
        label: "posts",
        link: "/posts",
        icon: "post2.svg",
      },
    ],
  },
  {
    title: "general",
    items: [
      {
        label: "elements",
        link: "/elements",
        icon: "element.svg",
      },
      {
        label: "notes",
        link: "/notes",
        icon: "note.svg",
      },
      {
        label: "forms",
        link: "/forms",
        icon: "form.svg",
      },
      {
        label: "calendar",
        link: "/calendar",
        icon: "calendar.svg",
      },
    ],
  },
  {
    title: "maintenance",
    items: [
      {
        label: "settings",
        link: "/settings",
        icon: "setting.svg",
      },
      {
        label: "backup",
        link: "/backup",
        icon: "backup.svg",
      },
    ],
  },
  {
    title: "analytics",
    items: [
      {
        label: "charts",
        link: "/",
        icon: "chart.svg",
      },
      {
        label: "logs",
        link: "/",
        icon: "log.svg",
      },
    ],
  },
];

export function addListItem(itemObj: List): void {
  menuList.push(itemObj);
}

export type { List as List };
export type { Items as Items };
