import React, { useEffect, useState, createContext, useContext } from "react";

//Selector
export const getBasketTotal = (basketProducts) => {
  return (basketProducts.reduce((amount, item) => amount + item.price, 0));
}
export const StateContext = createContext();
const items = [
  {
    id: 1,
    Description:"Bennett Laptop Carrying Case T210, fits for 15.6-Inch Laptop and Tablet, Sleek Design, Durable and Water-Repellent Fabric, Business Casual or School, GX40Q17230 Casual Toploader - Blue",
    Attributes:<ul><li>Product Type: Computer Input Device</li><li>Package Quantity: 1</li><li>Package Weight: 2.0 lbs</li><li>Country Of Origin: China</li><li>15.6-Inch Laptop and Tablet, Sleek Design, Durable and Water-Repellent Fabric, Business Casual or School, GX40Q17230 Casual Toploader - Blue</li></ul>,
    title: "Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)",
    price: 100.76,
    rating: 5,
    image: "https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
  },
  {
    id: 2,
    Description:"12. 9-Inch edge-to-edge Liquid Retina display with Promotion, true Tone, and wide Color and A12X Bionic chip with Neural Engine and 12MP back camera, 7MP True Depth front camera",
    Attributes:<ul><li>Brand:Apple</li><li>Memory Storage Capacity:64GB</li><li>Display Resolution Maximum:2732x2048 Pixels</li><li>Screen Size:13.5 Inches</li><li>Liquid Retina display with Promotion, true Tone, and wide Color and A12X Bionic chip with Neural Engine and 12MP back camera, 7MP True Depth front camera</li></ul>,
    title: "New Apple iPad Pro (13.5-inch, Wi-Fi, 64GB) - Gray Ships to Germany(4th Generation)",
    price: 398.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/61DsXT1ldtL._AC_UY436_FMwebp_QL65_.jpg"
  }
  ,
  {
    id: 3,
    Description:"From Anthony Doerr, the highly acclaimed, multiple award-winning author of Cloud Cuckoo Land, the beautiful, stunningly ambitious instant New York Times bestseller about a blind French girl and a German boy whose paths collide in occupied France as both try to survive the devastation of World War II.",
    Attributes:<ul><li>Print length:552 pages</li><li>Language:English</li><li>Publisher:Scribner</li><li>Publication date:May 6, 2014</li><li> multiple award-winning author of Cloud Cuckoo Land, the beautiful, stunningly ambitious instant New York Times bestseller about a blind French girl and a German boy whose paths collide in occupied France as both try to survive the devastation of World War II</li></ul>,
    title: "All the Light we Cannot See",
    price: 16.39,
    rating: 3,
    image: "https://m.media-amazon.com/images/I/81RBTG28sCL._AC_UY436_FMwebp_QL65_.jpg"
  },
  {
    id: 4,
    Description:"Meet Echo - Our flagship smart speaker that connects to Alexa to play music, set alarms and timers, answer questions, control smart home devices, and more. Fits best in communal spaces, like living and family rooms.",
    Attributes:<ul><li>Size:5.8” x 3.4” x 3.4” (148 mm x 88 mm x 88 mm)</li><li>Weight:29.0 oz. (821 grams)</li><li>Audio:2.5” (63.5 mm) woofer and 0.6” (16 mm) tweeter</li><li>Wi-Fi connectivity:Dual-band Wi-Fi supports 802.11 a/b/g/n (2.4 and 5 GHz) networks. WiFi 6 (802.11 ax) is not currently supported. Does not support connecting to ad-hoc (or peer-to-peer) Wi-Fi networks.</li></ul>,
    title: "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
    price: 99.59,
    rating: 5,
    image: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
  },
  {
    id: 5,
    title: "VIZIO 43-inch MQ6 Series 4K QLED HDR Smart TV w/Dolby Vision, WiFi 6E, Bluetooth Headphone Capable, AMD FreeSync & Alexa Compatibility, M43Q6M-K04, 2023 Model",
    Description:"DYNAMIC CRYSTAL COLOR: Witness millions of shades of color through powerful Dynamic Crystal technology and 4K UHD UPSCALING: See what you’ve been missing on a crisp, clear picture that’s 4x the resolution of Full HD",
    Attributes:<ul><li>Screen Size:  43Inches</li><li>49Inches Brand: VIZIO</li><li>Supported Internet Services:  streaming services</li><li>Refresh Rate:60 Hz</li><li>VIZIO LC49RG90SSUXEN 43' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440</li></ul>,
    price: 1094.98,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/717v76mYt+L._AC_SX679_.jpg"
  },
  {
    id: 6,
    Description:"12. 9-Inch edge-to-edge Liquid Retina display with Promotion, true Tone, and wide Color and A12X Bionic chip with Neural Engine and 12MP back camera, 7MP True Depth front camera",
    Attributes:<ul><li>Brand:Apple</li><li>Memory Storage Capacity:128GB</li><li>Display Resolution Maximum:2732x2048 Pixels</li><li>Screen Size:12.9 Inches</li><li>Liquid Retina display with Promotion, true Tone, and wide Color and A12X Bionic chip with Neural Engine and 12MP back camera, 7MP True Depth front camera</li></ul>,
    title: " Apple iPad  (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
    price: 598.99,
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
  },
  {
    id: 7,
    Description:"12. 9-Inch edge-to-edge Liquid Retina display with Promotion, true Tone, and wide Color and A12X Bionic chip with Neural Engine and 12MP back camera, 7MP True Depth front camera",
    Attributes:<ul><li>Brand:Apple</li><li>Memory Storage Capacity:256GB</li><li>Display Resolution Maximum:2732x2048 Pixels</li><li>Screen Size:14.9 Inches</li><li>Liquid Retina display with Promotion, true Tone, and wide Color and A12X Bionic chip with Neural Engine and 12MP back camera, 7MP True Depth front camera</li></ul>,
    title: "New Apple iPad  (14.9-inch, Wi-Fi, 256GB) -Space Gray",
    price: 636.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/81gC7frRJyL._AC_UY436_FMwebp_QL65_.jpg"
  },
  {
    id: 8,
    Description:"This microwave oven ten speed power: Ten Speed Power, meet your various cooking needs, interior light and child safety lock: interior light, you can check the status without opening the door. The safety lock prevents children from operating unattended. Use the child safety lock option to lock the control panel to prevent children from accidental use or contact.",
    Attributes:<ul><li>Brand:IFB</li><li>Voltage:	120 Volts</li><li>Item Weight:13.8 Kilograms</li><li>Lock Type:Child Lock Available</li><li>Capacity:0.9 Cubic Feet</li><li>The safety lock prevents children from operating unattended. Use the child safety lock option to lock the control panel to prevent children from accidental use or contact</li></ul>,
    title: "IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)",
    price: 239.0,
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
  },
  {
    id: 9,
    title: "Fossil Stella Gen 6 Hybrid Smartwatch with Alexa Built-In, Heart Rate, Activity Tracking, Blood Oxygen and Smartphone Notifications ",
    Description:"Gen 6 Hybrid Smartwatches are compatible with phones running the latest version of Android or iOS. Improved power, more reliable connection and up to 4x range with Bluetooth 5. ",
    Attributes:<ul><li>Model: Name	Stella</li><li>Color:	Stella Rose Gold/Black</li><li>Style:	Gen 6 Hybrid Women's</li><li>Screen Size:	40 Millimeters</li><li>Compatible Devices:	Smartphone</li></ul>,
    price: 219.75,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/61sNwtSwDJL._AC_UX679_.jpg"
  },
  {
    id: 10,
    title: "Apple Watch Series 7 [GPS + Cellular 45mm] Smart Watch w/ Graphite Stainless Steel Case with Abyss Blue Sport Band. Fitness Tracker",
    Description:"WHY APPLE WATCH SERIES 7 — The most advanced Apple Watch features powerful health innovations like sensors and apps to measure your blood oxygen and take an ECG. The larger, Always-On Retina display makes it easier to use and read. The most durable Apple Watch. Charges faster so you can get going quicker.",
    Attributes:<ul><li>Brand:	Apple</li><li>Model Name:	Series 7</li><li>Style:	GPS + Cellular</li><li>Color:	Graphite Stainless Steel Case w Abyss Blue Band</li><li>Special: Feature	GPS</li></ul>,
    price: 294.98,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/51jP5xMV-EL._AC_SX679_.jpg"
  },
  {
    id: 11,
    title: "SAMSUNG Galaxy Watch 5 Pro + Buds 2 Bundle, 45mm LTE Smartwatch w/ Body, Health, Fitness, Sleep Tracker, Black Band and True Wireless",
    Description:"LTE CONNECTIVITY: Enjoy phone-like capabilities but leave your phone behind; All you need is your Galaxy Watch5 with LTE Connectivity; Make or take calls, track workouts, send texts and pull up a playlist anywhere, anytime, without your phone or Wi-Fi",
    Attributes:<ul><li>Brand:	SAMSUNG</li><li>Model Name:	Samsung Galaxy</li><li>Special Feature:	Heart Rate Monitor</li><li>Shape:	Heart</li><li>Connectivity technologies:	Bluetooth, Wi-Fi</li></ul>,
    price: 211.49,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/51sM4rjzQ1L._AC_SX679_.jpg"
  },
  {
    id: 12,
    title: "POLAR Ignite 2 - Fitness Smartwatch with Integrated GPS - Wrist-Based Heart Monitor - Personalized Guidance for Workouts",
    Description:"Create the lifestyle that gives you confidence with the help of our sports smartwatch for women and men. With smart features like music controls, weather forecast and push notifications – you have everything you need to come back stronger.",
    Attributes:<ul><li>Brand:	POLAR</li><li>Model Name:	Ignite 2</li><li>Color:	Black / Pearl</li><li>Style:	Modern</li><li>Special Feature:	Time Display, Sleep Monitor, GPS, Notifications, Heart Rate Monitor</li></ul>,
    price: 212.45,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71irtW7lypL._AC_SX679_.jpg"
  },
  {
    id: 13,
    title: "Polar Grit X - Rugged Multisport GPS Smart Watch - Ultra-Long Battery Life, Wrist-based Heart Rate, Military-Level Durability, Sleep and Recovery, Navigation",
    Description:"LIGHTEST OUTDOOR WATCH WITH ULTRA LONG BATTERY LIFE: Up to 40h battery life with full GPS and HR tracking (even up to 100h with power save options), up to 7 days in watch mode with 24/7 HR. At 64 grams, Grit X weights 20-30% less than usual outdoor watches.",
    Attributes:<ul><li>Brand:	POLAR</li><li>Model Name:	Grit X</li><li>Screen Size:	1.2 Inches</li><li>Map Type:	Worldwide</li><li>Special Feature:	Time Display, Sleep Monitor, Accelerometer, GPS, Elevation Tracker, Heart Rate Monitor</li></ul>,
    price: 214.55,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/61rNyQ-jObL._AC_SX679_.jpg"
  },
  {
    id: 14,
    title: "NASA Trend Plus Size Spring Autumn Tide Sweater Men's and Women's Hoodie Sweatshirt Pullover Couples Clothes",
    Description:"Please carefully check the size chart attached to each picture, not the size chart provided by Amazon. Because the product is manually measured by us, there may be an error of 1-3 cm. It is recommended that you choose a larger size.",
    Attributes:<ul><li>Size: M/L/XL/2XL/3XL/4XL</li><li>Pattern: cartoon animation NASA</li><li>Collar type: Hooded</li><li>Sleeve type: Conventional</li><li>Large size women's clothing Category: sweater/fleece shirt</li></ul>,
    price: 48.98,
    rating: 3,
    image: "https://m.media-amazon.com/images/I/71xvg4W6kkL._AC_UX679_.jpg"
  },
  {
    id: 15,
    title: "Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included",
    Description:"Quick access to Siri by saying “ Hey Siri ” AND Easily share audio between two sets of AirPods on your iPhone, iPad, iPod touch, or Apple TV and Effortless setup, in-ear detection, and automatic switching for a magical experience",
    Attributes:<ul><li>Brand:	Apple</li><li>Model Name:	AirPods</li><li>Color:	White</li><li>Form Factor	:In Ear</li><li>Connectivity Technology:	Bluetooth 5.0</li></ul>,
    price: 218.98,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61Zh467pKjL._AC_SX679_.jpg"
  },
  {
    id: 16,
    title: "RM Oral Charcoal Whitening Soft Brushes 4ct with 80 Count Charcoal Floss Picks",
    Description:"Charcoal infused bristles whiten teeth, whitening cups polish away stains, and spiral bristles at both tips have been added for extra whitening Power!",
    Attributes:<ul><li>Brand:	RM Oral</li><li>4Age Range (Description):	Adult</li><li>Special Feature:	Charcoal Infused Bristle</li><li>Power Source:	Corded Electric</li><li>item Firmness Description:	Soft</li></ul>,
    price: 194.98,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71xVIHbSGSL._AC_SX679_.jpg"
  },
  {
    id: 17,
    title: "Oral-B iO Series 5 Limited Electric Toothbrush with (3) Brush Head, Rechargeable, Black",
    Description:"You will receive (1) Oral-B iO5 Limited Electric Toothbrush, (1) Ultimate Clean Replacement Brush Head, (1) Gentle Care Replacement Brush Head, (1) Ultimate White Replacement Brush Head, (1) travel case, (1) travel refill holder, and (1) charger",
    Attributes:<ul><li>Brand:	Oral-B</li><li>Age Range (Description):	Adult</li><li>Power Source:	Corded Electric</li><li>Color:	Blac</li><li>Special Feature:	Travel Size, Brushing Timer, Pressure Sensor, Rechargeable</li></ul>,
    price: 149.98,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/41g5MBCjjVL._SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    id: 18,
    title: "SteelSeries Apex Pro TKL Mechanical Gaming Keyboard & Rival 600 Gaming Mouse - 12,000 CPI TrueMove3Plus Dual Optical Sensor ",
    Description:"OLED smart display: An integrated command center for adjusting settings and tracking on the fly info straight from your game, spotify, discord, and more",
    Attributes:<ul><li>Brand:	SteelSeries</li><li>Compatible Devices:	Gaming Console</li><li>Keyboard Description:	Gaming</li><li>Material	:Aluminum</li><li>Included Components:	1, Keyboard</li></ul>,
    price: 244.07,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/51HnJvI1bvS._AC_SX679_.jpg"
  },
  {
    id: 19,
    title: "Gaming Keyboard and Mouse Combo - Glorious GMMK 87% Percent Backlit RGB TKL Mechanical Keyboard (White Ice) + Model O Wireless Gaming RGB Matte White Mouse",
    Description:"Professional Ergonomic Cherry MX Profile GMMK TKL Keyboard, Preinstalled with Quite Typing Gateron Brown Switches and White ABS Keycaps. Compatible with Windows PC and Mac. Plug and Play Compatible.",
    Attributes:<ul><li>Brand:	Glorious PC Gaming Race</li><li>Color:	White, Black</li><li>Connectivity Technology:	USB</li><li>Special Feature:	Ergonomic, Backlit</li><li>Compatible Devices:	Personal Computer</li></ul>,
    price: 164.03,
    rating: 3,
    image: "https://m.media-amazon.com/images/I/71+eThaYxxL._AC_SX679_.jpg"
  },
  {
    id: 20,
    title: "Fnatic miniSTREAK Silent LED Backlit RGB Mechanical TKL Gaming Keyboard, MX Cherry Silent Red Switches, Small Compact Portable Tenkeyless Layout Pro Esports Gaming Keyboard",
    Description:"PREMIUM COMFORT AND DURABILITY - with perfectly balanced low-key height and soft rounded board edges, perfectly angled rubber feet, and an anodised metal top plate",
    Attributes:<ul><li>Brand:	Fnatic</li><li>Compatible Devices:	PC, Mac, PlayStation</li><li>Connectivity Technology:	USB</li><li>Recommended Uses For Product:	Gaming</li><li>Color:	Cherry MX RGB Silent Red Switches (TKL)</li></ul>,
    price: 145.44,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71rtA6KxKwL._AC_SX679_.jpg"
  },
  {
    id: 21,
    title: "AULA Typewriter Style Mechanical Gaming Keyboard and RGB Gaming Mouse and Compatible Devices	Laptop Tablet",
    Description:"Allow multi-keys to work simultaneously with high speed. Each key is controlled by independent switch, let you enjoy high-grade games with fast response, boosting your performance! The PC Gaming Keyboard has been ergonomically designed to be a superb typing tool for office work as well.",
    Attributes:<ul><li>Brand:	AULA</li><li>Compatible Devices:	PC, Mac, PlayStation</li><li>Connectivity Technology:	USB</li><li>Recommended Uses For Product:	Gaming</li><li>Color:	Cherry MX RGB Silent Red Switches </li></ul>,
    price: 61.64,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/813bjDmuOKL._AC_SX679_.jpg"
  },
  {
    id: 22,
    title: "XBOX ELITE WIRELESS CONTROLLER SERIES 2: Play like a pro with adjustable-tension thumbsticks, wrap-around rubberized grip",
    Description:"CORE ESSENTIALS: Includes just the components you need to unleash your best game. Additional components sold separately for even more customization with the Complete Component Pack.",
    Attributes:<ul><li>Platform : Xbox One, Windows, Xbox Series S, Xbox Series X</li><li>USB-C:Port + 9' cable</li></ul>,
    price: 89.51,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61H321AbQuL._SX522_.jpg"
  },
  {
    id: 23,
    title: "Tycoon Playing Cards (Blue) ( Made in the USA with certified FSC paper, fully recyclable) Six sided dice, 16 mm - perfect weight for easy, controlled rolls",
    Description:"Made in the USA on FSC-certified paper derived from sustainable forests using vegetable based inks and Featuring court cards licensed from Fournier in Villareal de Àlava, Spain",
    Attributes:<ul><li>Age Range (Description):	Adult</li><li>Number of Players:	1-99</li><li>Brand:	theory11</li><li>Theme:	Games</li><li>Material:	FSC-certified paper derived from sustainable forests using vegetable based inks</li></ul>,
    price: 40.98,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/91NwrlpmMrL._AC_SX679_.jpg"
  },
  {
    id: 24,
    title: "Bicycle Premium Playing Cards Bundle Dragon 1885 Playing Cards (2 Decks) and Made in the USA with certified FSC paper, fully recyclable Six sided dice, 16 mm - perfect weight for easy, controlled rolls ",
    Description:"Bundle includes: 1 Bicycle Dragon Playing Cards Deck and 1 Bicycle 1885 Playing Cards Deck and Made in the USA with certified FSC paper, fully recyclable",
    Attributes:<ul><li>Age Range (Description):	Adult</li><li>Number of Players:	1-99</li><li>Brand:	Bicycle</li><li>Theme:	Games</li><li>Material:	 paper derived from sustainable forests using vegetable based inks</li></ul>,
    price: 35.98,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/612pX8iJjVL._AC_SX679_.jpg"
  }
]
export const StateProvider = ({ children }) => {
  const [products, setProducts] = useState(items);
  const [basketProducts, setBasketProducts] = useState([]);

  useEffect(() => {
    //console.log("basket products updated", basketProducts)
  }, [basketProducts])

  const addToBasket = (idd) => {
    console.log('clicked', idd)
    const targetPr = products.find(i => i.id === idd)
    const isExist = basketProducts.findIndex(i => i.id === idd)
    // if isNotExist ====> isExist = -1
    if (isExist === -1) {
      setBasketProducts((prevState) => [...prevState, targetPr])
    }
    else {
      alert('Product already exist in basket')
      setBasketProducts((prevState) => [...prevState, targetPr])
    }
  }
  const removeFromBasket = (idd) => {
   // console.log('clicked', idd)
    const isExist = basketProducts.findIndex(i => i.id === idd)
    // if isNotExist ====> isExist = -1
    if (isExist === -1) {
      alert('Product not exist in basket')
    }
    else {
      //[{id:1},{id:2},{id:3}]
      basketProducts.forEach((elm, index, arr) => {
        if (elm.id === idd) {
          console.log("match id")
          arr.splice(index, 1)
        }
        // console.log("elm",elm)
        // console.log("index",index)
        // console.log("arr",arr)
      })
      //console.log("after remove", basketProducts)

      setBasketProducts(() => [...basketProducts])
    }
  }
  return <StateContext.Provider value={{ addToBasket, products, removeFromBasket, basketProducts }}>
    {children}
  </StateContext.Provider>
};

export const useStateValue = () => useContext(StateContext);