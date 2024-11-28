
type ChartDays<Key extends string> = {
    day: "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat",
} & { [key in Key]: number}

export type ChartFullData<Key extends string> = {
    title:string,
    datakey:Key,
    number:string,
    data:ChartDays<Key>[],
    percentage:number,
    colour:string,
    icon:string
}

export type ChartBriefData<Key extends string> = Omit<ChartFullData<Key>, "number" | "icon" | "percentage">
  
  export const chartBoxUser:ChartFullData<"users"> = {
    colour: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "11.238",
    datakey: "users",
    percentage: 45,
    data: [
      { day: "Sun", users: 400 },
      { day: "Mon", users: 600 },
      { day: "Tue", users: 500 },
      { day: "Wed", users: 700 },
      { day: "Thu", users: 400 },
      { day: "Fri", users: 500 },
      { day: "Sat", users: 450 },
    ],
  };
  
  export const chartBoxProduct:ChartFullData<"products"> = {
    colour: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "238",
    datakey: "products",
    percentage: 21,
    data: [
      { day: "Sun", products: 400 },
      { day: "Mon", products: 600 },
      { day: "Tue", products: 500 },
      { day: "Wed", products: 700 },
      { day: "Thu", products: 400 },
      { day: "Fri", products: 500 },
      { day: "Sat", products: 450 },
    ],
  };
  export const chartBoxRevenue:ChartFullData<"revenue"> = {
    colour: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$56.432",
    datakey: "revenue",
    percentage: -12,
    data: [
      { day: "Sun", revenue: 400 },
      { day: "Mon", revenue: 600 },
      { day: "Tue", revenue: 500 },
      { day: "Wed", revenue: 700 },
      { day: "Thu", revenue: 400 },
      { day: "Fri", revenue: 500 },
      { day: "Sat", revenue: 450 },
    ],
  };
  export const chartBoxConversion:ChartFullData<"ratio"> = {
    colour: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.6",
    datakey: "ratio",
    percentage: 12,
    data: [
      { day: "Sun", ratio: 400 },
      { day: "Mon", ratio: 600 },
      { day: "Tue", ratio: 500 },
      { day: "Wed", ratio: 700 },
      { day: "Thu", ratio: 400 },
      { day: "Fri", ratio: 500 },
      { day: "Sat", ratio: 450 },
    ],
  };
  
  export const barChartBoxRevenue:ChartBriefData<"profit"> = {
    title: "Profit Earned",
    colour: "#8884d8",
    datakey: "profit",
    data: [
      {
        day: "Sun",
        profit: 4000,
      },
      {
        day: "Mon",
        profit: 3000,
      },
      {
        day: "Tue",
        profit: 2000,
      },
      {
        day: "Wed",
        profit: 2780,
      },
      {
        day: "Thu",
        profit: 1890,
      },
      {
        day: "Fri",
        profit: 2390,
      },
      {
        day: "Sat",
        profit: 3490,
      },
    ],
  };
  
  export const barChartBoxVisit:ChartBriefData<"visit"> = {
    title: "Total Visit",
    colour: "#FF8042",
    datakey: "visit",
    data: [
      {
        day: "Sun",
        visit: 4000,
      },
      {
        day: "Mon",
        visit: 3000,
      },
      {
        day: "Tue",
        visit: 2000,
      },
      {
        day: "Wed",
        visit: 2780,
      },
      {
        day: "Thu",
        visit: 1890,
      },
      {
        day: "Fri",
        visit: 2390,
      },
      {
        day: "Sat",
        visit: 3490,
      },
    ],
  };
  