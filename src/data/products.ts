
export const products = [
    {
      id: 1,
      img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
      title: "Playstation 5 Digital Edition",
      colour: "white",
      producer: "Sony",
      price: "$250.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 2,
      img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
      title: "Dell Laptop KR211822",
      colour: "black",
      producer: "Dell",
      price: "$499.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 3,
      img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
      title: "Samsung TV 4K SmartTV",
      colour: "gray",
      producer: "Samsung",
      price: "$999.49",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 4,
      img: "https://raylo.imgix.net/iphone-14-blue.png",
      title: "Apple Iphone 14 Pro Max",
      colour: "white",
      producer: "Apple",
      price: "$799.49",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 5,
      img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
      title: "Philips Hue Play Gradient",
      colour: "rainbow",
      producer: "Philips",
      price: "$39.99",
      createdAt: "01.02.2023",
    },
    {
      id: 6,
      img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
      title: "Logitech MX Master 3",
      colour: "black",
      producer: "Logitech",
      price: "$59.49",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 7,
      img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
      title: "Rode Podcast Microphone",
      colour: "gray",
      producer: "Rode",
      price: "$119.49",
      createdAt: "01.02.2023",
    },
    {
      id: 8,
      img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
      title: "Toshiba Split AC 2",
      colour: "white",
      producer: "Toshiba",
      price: "$899.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 9,
      img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
      title: "Sony Bravia KDL-47W805A",
      colour: "black",
      producer: "Sony",
      price: "$970.49",
      createdAt: "01.02.2023",
    },
    {
      id: 10,
      img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
      title: "Acer Laptop 16 KL-4804",
      colour: "black",
      producer: "Acer",
      price: "$599.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
  ];
  
  export const singleUser = {
    id: 1,
    title: "John Doe",
    img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    info: {
      username: "Johndoe99",
      fullname: "John Doe",
      email: "johndoe@gmail.com",
      phone: "123 456 789",
      status: "verified",
    },
    chart: {
      datakeys: [
        { name: "visits", colour: "#82ca9d" },
        { name: "clicks", colour: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          clicks: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          clicks: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          clicks: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          clicks: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          clicks: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          clicks: 4300,
        },
      ],
    },
    activities: [
      {
        text: "John Doe purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "John Doe added 3 items into their wishlist",
        time: "1 week ago",
      },
      {
        text: "John Doe purchased Sony Bravia KD-32w800",
        time: "2 weeks ago",
      },
      {
        text: "John Doe reviewed a product",
        time: "1 month ago",
      },
      {
        text: "John Doe added 1 items into their wishlist",
        time: "1 month ago",
      },
      {
        text: "John Doe reviewed a product",
        time: "2 months ago",
      },
    ],
  };
  export const singleProduct = {
    id: 1,
    title: "Playstation 5 Digital Edition",
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    info: {
      productId: "Ps5SDF1156d",
      colour: "white",
      price: "$250.99",
      producer: "Sony",
      export: "Japan",
    },
    chart: {
      datakeys: [
        { name: "visits", colour: "#82ca9d" },
        { name: "orders", colour: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          orders: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          orders: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          orders: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          orders: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          orders: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          orders: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          orders: 4300,
        },
      ],
    },
    activities: [
      {
        text: "John Doe purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
        time: "1 week ago",
      },
      {
        text: "Mike Doe purchased Playstation 5 Digital Edition",
        time: "2 weeks ago",
      },
      {
        text: "Anna Doe reviewed the product",
        time: "1 month ago",
      },
      {
        text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
        time: "1 month ago",
      },
      {
        text: "Helen Doe reviewed the product",
        time: "2 months ago",
      },
    ],
  };
  