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
    console.log('clicked', idd)
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