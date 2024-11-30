type DataKeys = {
    name: string;
    colour: string;
  };
  
  type Details<Key extends string> = {
    day: "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";
    visits: number;
  } & {[key in Key]: number};
  

export type Activities = {
    text: string;
    time: string;
  };
  
  export type OneChart<Key extends string> = {
    datakeys:DataKeys[];
    data: Details<Key>[];
  }