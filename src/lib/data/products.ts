export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  ratingCount: number;
  price: number;
  quantity: number;
  isSoldOut: boolean;
  discount?: number;
  image: string;
}

const sourceItems = [
  //women short
  {
    id: "1",
    category: "women short",
    name: "Sage Essential Chino",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-13-product.jpg?updatedAt=1767645264113",
  },
  {
    id: "2",
    category: "Blue short",
    name: "Azure Tailored Short",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-15-product.jpg?updatedAt=1767645264053",
  },
  {
    id: "3",
    category: "women short",
    name: "Heather Gray Lounge",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-14-product.jpg?updatedAt=1767645263992",
  },
  {
    id: "4",
    category: "women short",
    name: "Slate Soft-Touch Short",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-10-product.jpg?updatedAt=1767645263979",
  },
  {
    id: "5",
    category: "women short",
    name: "Alabaster Classic Short",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-12-product.jpg?updatedAt=1767645263935",
  },
  {
    id: "6",
    category: "women short",
    name: "Arctic Sculpt Biker",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-9-product.jpg?updatedAt=1767645263927",
  },
  {
    id: "7",
    category: "women short",
    name: "Cloud Contour Performance",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-11-product.jpg?updatedAt=1767645263834",
  },
  {
    id: "8",
    category: "women short",
    name: "Midnight Frayed Denim",
    image:
      "  https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-18-product.jpg?updatedAt=1767645263708",
  },
  {
    id: "9",
    category: "women short",
    name: "Stone Washed Denim",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-17-product.jpg?updatedAt=1767645263559",
  },
  {
    id: "10",
    category: "women short",
    name: "Slate Distressed Denim",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-17-product.jpg?updatedAt=1767645263559",
  },
  {
    id: "11",
    category: "women short",
    name: "Ivory Seamless Cycle",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-8-product.jpg?updatedAt=1767645263357",
  },
  {
    id: "12",
    category: "women short",
    name: "Onyx Compression Short",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-16-product.jpg?updatedAt=1767645263307",
  },
  {
    id: "13",
    category: "women short",
    name: "Aura Ribbed Lounge",
    image:
      "  https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-5-product.jpg?updatedAt=1767645262625s",
  },
  {
    id: "14",
    category: "women short",
    name: "Pure Cotton Sunday",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-6-product.jpg?updatedAt=1767645262388",
  },
  {
    id: "15",
    category: "women short",
    name: "Victory Mesh Training",
    image:
      "  https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-7-product.jpg?updatedAt=1767645262205",
  },
  {
    id: "16",
    category: "women short",
    name: "Forest Vintage Chino",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-3-product.jpg?updatedAt=1767645261242",
  },
  {
    id: "17",
    category: "women short",
    name: "Obsidian Core Short",
    image:
      "  https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-2-product.jpg?updatedAt=1767645258237",
  },
  {
    id: "18",
    category: "women short",
    name: "Charcoal Fleece Short",
    image:
      "  https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-4-product.jpg?updatedAt=1767645257050",
  },
  {
    id: "19",
    category: "women short",
    name: "Iris High-Waisted Short",
    image:
      "  https://ik.imagekit.io/8llkguagpe/New%20Folder/short-women-1-product.jpg?updatedAt=1767645256911  ",
  },

  //man short
  {
    id: "20",
    category: "mans short",
    name: "Alabaster Performance Short",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/short-man-6-product.jpg?updatedAt=1767645257212",
  },
  {
    id: "21",
    category: "mans short",
    name: "Slate Athletic Training Short",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/short-man-5-product.jpg?updatedAt=1767645257124",
  },
  {
    id: "22",
    category: "mans short",
    name: "Elite Court Basketball Short",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/short-man-3-product.jpg?updatedAt=1767645256764",
  },
  {
    id: "23",
    category: "mans short",
    name: "Arctic Aero-Ready Short",
    image:
      "  https://ik.imagekit.io/8llkguagpe/New%20Folder/short-man-1-product.jpg?updatedAt=1767645256735",
  },
  {
    id: "24",
    category: "mans short",
    name: "Silver Tech-Mesh Short",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/short-man-2-product.jpg?updatedAt=1767645256125",
  },

  //shoes women and men
  {
    id: "25",
    category: "Shoes",
    name: "Classic Court Leather Sneaker",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-12-product.jpg?updatedAt=1767645263033",
  },
  {
    id: "26",
    category: "Shoes",
    name: "Legacy Minimalist Trainer",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-11-product.jpg?updatedAt=1767645263002",
  },
  {
    id: "27",
    category: "Shoes",
    name: "Cloudfoam Comfort Runner",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-14-product.jpg?updatedAt=1767645262462",
  },
  {
    id: "28",
    category: "Shoes",
    name: "Lavender Accented Court Shoe",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-13-product.jpg?updatedAt=1767645262389",
  },
  {
    id: "29",
    category: "Shoes",
    name: "Vibrant Horizon Multi-Tone Sneaker",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-9-product.jpg?updatedAt=1767645262411",
  },
  {
    id: "30",
    category: "Shoes",
    name: "Tri-Color Performance Trainer",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-18-product.jpg?updatedAt=1767645262260",
  },
  {
    id: "31",
    category: "Shoes",
    name: "Steel Blue Comfort Sandal",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-15-product.jpg?updatedAt=1767645261914",
  },
  {
    id: "32",
    category: "Shoes",
    name: "Monochrome Strappy Slide",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-16-product.jpg?updatedAt=1767645261396",
  },
  {
    id: "33",
    category: "Shoes",
    name: "Sleek Midnight Block Heel",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-20-product.jpg?updatedAt=1767645261459",
  },
  {
    id: "34",
    category: "Shoes",
    name: "Sapphire Elegance Stiletto",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-24-product.jpg?updatedAt=1767645261388",
  },
  {
    id: "35",
    category: "Shoes",
    name: "Royal Velvet Evening Heel",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-19-product.jpg?updatedAt=1767645261356",
  },
  {
    id: "36",
    category: "Shoes",
    name: "Silver Mist Pointed Pump",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-23-product.jpg?updatedAt=1767645261350",
  },
  {
    id: "37",
    category: "Shoes",
    name: "Floral Petal Sport Sneaker",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-17-product.jpg?updatedAt=1767645261166",
  },
  {
    id: "38",
    category: "Shoes",
    name: "Electric Azure Formal Heel",
    image: "",
  },
  {
    id: "39",
    category: "Shoes",
    name: "Slate Urban High-Top",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-21-product.jpg?updatedAt=1767645260294",
  },
  {
    id: "40",
    category: "Shoes",
    name: "Mocha Fusion Walking Shoe",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-22-product.jpg?updatedAt=1767645259302",
  },
  {
    id: "41",
    category: "Shoes",
    name: "Pristine Ivory Tennis Shoe",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-10-product.jpg?updatedAt=1767645259585",
  },
  {
    id: "42",
    category: "Shoes",
    name: "Monochrome Classic Trainer",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-two-product.jpg?updatedAt=1767645256729",
  },
  {
    id: "43",
    category: "Shoes",
    name: "Vibrant Horizon Lifestyle Sneaker",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-seven-product.jpg?updatedAt=1767645256728",
  },
  {
    id: "44",
    category: "Shoes",
    name: "Onyx Court Vision Lo",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-three-product.jpg?updatedAt=1767645256632",
  },
  {
    id: "45",
    category: "Shoes",
    name: "Essential Airflow Sneaker",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-one-product.jpg?updatedAt=1767645256452",
  },
  {
    id: "46",
    category: "Shoes",
    name: "Motorsport Speedcat Pro",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-five-product.jpg?updatedAt=1767645256440",
  },
  {
    id: "47",
    category: "Shoes",
    name: "Contrast Panel Retro Sneaker",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-four-product.jpg?updatedAt=1767645256426",
  },
  {
    id: "48",
    category: "Shoes",
    name: "Classic Suede Monochrome",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-category.jpg?updatedAt=1767645256315",
  },
  {
    id: "49",
    category: "Shoes",
    name: "Emerald Flash Runner",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-six-product.jpg?updatedAt=1767645256335",
  },
  {
    id: "50",
    category: "Shoes",
    name: "Slate Minimalist Flat",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-26-product.jpg?updatedAt=1767645256302",
  },
  {
    id: "51",
    category: "Shoes",
    name: "Monochrome Edge Wedge",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-27-product.jpg?updatedAt=1767645256273",
  },
  {
    id: "52",
    category: "Shoes",
    name: "Ivory Patent Pointed Heel",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/shoes-25-product.jpg?updatedAt=1767645255988",
  },

  //Women Jeans
  {
    id: "53",
    category: "Jeams-w",
    name: "Arctic Blue Straight Leg Denim",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jeans-women-seven-product.jpg?updatedAt=1767645262081",
  },
  {
    id: "54",
    category: "jeans-w",
    name: "Alabaster Slim-Fit Denim",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jeans-women-one-product.jpg?updatedAt=1767645258402",
  },
  {
    id: "55",
    category: "jeans-w",
    name: "Obsidian High-Rise Skinny",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jeans-women-category.jpg?updatedAt=1767645262021",
  },
  {
    id: "56",
    category: "jeans-w",
    name: "Classic Indigo Relaxed Jean",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jeans-women-two-product.jpg?updatedAt=1767645258299",
  },
  {
    id: "57",
    category: "jeans-w",
    name: "Charcoal Acid-Wash Denim",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jeans-women-three-product.jpg?updatedAt=1767645258257",
  },
  {
    id: "58",
    category: "jeans-w",
    name: "Frost Distressed Boyfriend Jean",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jeans-women-nine-product.jpg?updatedAt=1767645253298",
  },
  {
    id: "59",
    category: "jeans-w",
    name: "Slate Grey Mom Jean",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jeans-women-nine-product.jpg?updatedAt=1767645253298",
  },
  {
    id: "60",
    category: "Jeams-w",
    name: "Classic Stonewash Bootcut Denim",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jeans-women-six-product.jpg?updatedAt=1767645254748",
  },

  //man jeans
  {
    id: "60",
    category: "Jeans-m",
    name: "Arctic Bleach Slim Fit",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jeans-man-five-product.jpg?updatedAt=1767645263939",
  },
  {
    id: "62",
    category: "Jeans-m",
    name: "Slate Tapered Denim",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jeans-man-six-product.jpg?updatedAt=1767645263555",
  },
  {
    id: "63",
    category: "Jeans-m",
    name: "Frost Wash Relaxed Jean",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jeans-man-four-product.jpg?updatedAt=1767645260812",
  },
  {
    id: "64",
    category: "Jeans-m",
    name: "Graphite Straight Leg",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jeans-man-seven-product.jpg?updatedAt=1767645260782",
  },
  {
    id: "65",
    category: "Jeans-m",
    name: "Ash Grey Comfort Denim",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jeans-man-nine-product.jpg?updatedAt=1767645260376",
  },
  {
    id: "66",
    category: "Jeans-m",
    name: "Obsidian Shadow Skinny",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jeans-man-one-product.jpg?updatedAt=1767645255008",
  },
  {
    id: "67",
    category: "Jeans-m",
    name: "Iron Grey Rugged Fit",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jeans-man-two-product.jpg?updatedAt=1767645254996",
  },
  {
    id: "68",
    category: "Jeans-m",
    name: "Stone Washed Essential",
    image: "",
  },
  {
    id: "69",
    category: "Jeans-m",
    name: "Sky Blue Distressed Jean",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jeans-man-three-product.jpg?updatedAt=1767645254945",
  },
  {
    id: "70",
    category: "Jeans-m",
    name: "Cloud-Touch Flex Denim",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jeans-man-eight-product.jpg?updatedAt=1767645253435",
  },

  //T-shirt
  {
    id: "71",
    category: "T-Shirt",
    name: "Optic White Essential Tee",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/hero-three.jpg?updatedAt=1767958714284",
  },
  {
    id: "72",
    category: "T-Shirt",
    name: "Classic Crewneck Alabaster",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/t-shirt-one-product.jpg?updatedAt=1767645263284",
  },
  {
    id: "73",
    category: "T-Shirt",
    name: "Saint Graphic Streetwear Tee",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/t-shirt-four-product.jpg?updatedAt=1767645263151",
  },
  {
    id: "74",
    category: "T-Shirt",
    name: "Sage Heritage Oversized Tee",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/t-shirt-six-product.jpg?updatedAt=1767645262887",
  },
  {
    id: "75",
    category: "T-Shirt",
    name: "Crimson Heather Active Tee",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/t-shirt-two-product.jpg?updatedAt=1767645262707",
  },
  {
    id: "76",
    category: "T-Shirt",
    name: "Pacific Two-Tone Jersey",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/t-shirt-three-product.jpg?updatedAt=1767645262525",
  },
  {
    id: "77",
    category: "T-Shirt",
    name: "Onyx Contrast Panel Tee",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/t-shirt-seven-product.jpg?updatedAt=1767645262500",
  },
  {
    id: "78",
    category: "T-Shirt",
    name: "Steel Blue Signature Tee",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/t-shirt-five-product.jpg?updatedAt=1767645262377",
  },
  {
    id: "79",
    category: "T-Shirt",
    name: "Cerulean Block Sport Tee",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/t-shirt-eight-product.jpg?updatedAt=1767645262389",
  },
  {
    id: "80",
    category: "T-Shirt",
    name: "Midnight Core Cotton Tee",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/T-shirt-category.jpg?updatedAt=1767645262353",
  },

  //Hoodies and Jacket
  {
    id: "81",
    category: "H&J",
    name: "Alabaster Windbreaker Jacket",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/hero-one.jpg?updatedAt=1767958714285",
  },
  {
    id: "82",
    category: "H&J",
    name: "Iris Oversized Pullover Hoodie",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/hero-four.jpg?updatedAt=1767958714298",
  },
  {
    id: "83",
    category: "H&J",
    name: "Cloud Heather Essentials Hoodie",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/long-shirt-category.jpg?updatedAt=1767645261357",
  },
  {
    id: "84",
    category: "H&J",
    name: "Arctic Teal Colorblock Hoodie",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jacket-five-product.jpg?updatedAt=1767645260382",
  },
  {
    id: "85",
    category: "H&J",
    name: "Forest Technical Bomber Jacket",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jacket-two-product.jpg?updatedAt=1767645260363",
  },
  {
    id: "86",
    category: "H&J",
    name: "Sunset Fusion Multi-Tone Jacket",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jacket-four-product.jpg?updatedAt=1767645259710",
  },
  {
    id: "87",
    category: "H&J",
    name: "Sky Graphite Performance Hoodie",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jacket-six-product.jpg?updatedAt=1767645259597",
  },
  {
    id: "88",
    category: "H&J",
    name: "Frost Mint Paneled Hoodie",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jacket-three-product.jpg?updatedAt=1767645259075",
  },
  {
    id: "89",
    category: "H&J",
    name: "Sage Shadow Pullover",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/long-shirt-four-product.jpg?updatedAt=1767645258821",
  },
  {
    id: "90",
    category: "H&J",
    name: "Crimson Slate Active Hoodie",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/long-shirt-six-product.jpg?updatedAt=1767645258811",
  },
  {
    id: "91",
    category: "H&J",
    name: "Midnight Stealth Zip Jacket",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jacket-category.jpg?updatedAt=1767645258388",
  },
  {
    id: "92",
    category: "H&J",
    name: "Obsidian Core Longline Hoodie",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/long-shirt-two-product.jpg?updatedAt=1767645258297",
  },
  {
    id: "93",
    category: "H&J",
    name: "Olive Drab Daily Hoodie",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/long-shirt-three-product.jpg?updatedAt=1767645253456",
  },
  {
    id: "94",
    category: "H&J",
    name: "Emerald Volt Tech Hoodie",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jacket-one-product.jpg?updatedAt=1767645253262",
  },
  {
    id: "95",
    category: "H&J",
    name: "Classic Moss Fleece Hoodie",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/long-shirt-five-product.jpg?updatedAt=1767645253113",
  },

  //Joggings man and women
  {
    id: "95",
    category: "Jogging M&W",
    name: "Midnight Pipestripe Joggers",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jogging-7-product.jpg?updatedAt=1767645263217",
  },
  {
    id: "96",
    category: "Jogging M&W",
    name: "Obsidian Unisex Core Joggers",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jogging-5-product.jpg?updatedAt=1767645262294",
  },
  {
    id: "97",
    category: "Jogging M&W",
    name: "Onyx Sculpt Contour Joggers",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jogging-8-product.jpg?updatedAt=1767645261959",
  },
  {
    id: "98",
    category: "Jogging M&W",
    name: "Slate Shadow Panel Joggers",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jogging-2-product.jpg?updatedAt=1767645261646",
  },
  {
    id: "99",
    category: "Jogging M&W",
    name: "Mocha Silk-Touch Joggers",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jogging-12-product.jpg?updatedAt=1767645260375",
  },
  {
    id: "100",
    category: "Jogging M&W",
    name: "Alabaster Sunday Joggers",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jogging-6-product.jpg?updatedAt=1767645259834",
  },
  {
    id: "101",
    category: "Jogging M&W",
    name: "Pristine Contrast Training Joggers",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jogging-9-product.jpg?updatedAt=1767645259320",
  },
  {
    id: "102",
    category: "Jogging M&W",
    name: "Royal Azure Heritage Joggers",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jogging-1-product.jpg?updatedAt=1767645259277",
  },
  {
    id: "103",
    category: "Jogging M&W",
    name: "Forest Tri-Tone Tech Joggers",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jogging-4-product.jpg?updatedAt=1767645258829",
  },
  {
    id: "104",
    category: "Jogging M&W",
    name: "Espresso Cream Colorblock Joggers",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jogging-11-product.jpg?updatedAt=1767645258507",
  },
  {
    id: "105",
    category: "Jogging M&W",
    name: "Steel Blue Relaxed Joggers",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/jogging-3-product.jpg?updatedAt=1767645253498",
  },

  //bags M&W
  {
    id: "106",
    category: "Bag M&W",
    name: "Amber Slate Shoulder Bag",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-nineteen-product.jpg?updatedAt=1767645261966",
  },
  {
    id: "107",
    category: "Bag M&W",
    name: "Monogram Heritage Tote",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-three-product.jpg?updatedAt=1767645260897",
  },
  {
    id: "108",
    category: "Bag M&W",
    name: "Sky Azure Pastel Satchel",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-eighteen-product.jpg?updatedAt=1767645260728",
  },
  {
    id: "109",
    category: "Bag M&W",
    name: "Majestic Lioness Embossed Bag",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-sixteen-product.jpg?updatedAt=1767645260343",
  },
  {
    id: "110",
    category: "Bag M&W",
    name: "Graphite Tech Training Duffel",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-nine-product.jpg?updatedAt=1767645259773",
  },
  {
    id: "111",
    category: "Bag M&W",
    name: "Lavender Canvas Day Bag",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-thirteen-product.jpg?updatedAt=1767645259832",
  },
  {
    id: "112",
    category: "Bag M&W",
    name: "Obsidian Midnight Clutch",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-twety-one-product.jpg?updatedAt=1767645259702",
  },
  {
    id: "113",
    category: "Bag M&W",
    name: "Espresso Leather Handbag",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-fourteen-product.jpg?updatedAt=1767645258669",
  },
  {
    id: "114",
    category: "Bag M&W",
    name: "Royal Navy Crest Messenger",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-ten-product.jpg?updatedAt=1767645258562",
  },
  {
    id: "115",
    category: "Bag M&W",
    name: "Tactical Urban Utility Backpack",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-fifteen-product.jpg?updatedAt=1767645258548",
  },
  {
    id: "116",
    category: "Bag M&W",
    name: "Orchid Performance Gym Bag",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-four-product.jpg?updatedAt=1767645257161",
  },
  {
    id: "117",
    category: "Bag M&W",
    name: "Stealth Black Sport Pack",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-eight-product.jpg?updatedAt=1767645257033",
  },
  {
    id: "118",
    category: "Bag M&W",
    name: "Panda Contrast Crossbody",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-seven-product.jpg?updatedAt=1767645257031",
  },
  {
    id: "119",
    category: "Bag M&W",
    name: "Milano Elite Designer Tote",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-one-product.jpg?updatedAt=1767645256942",
  },
  {
    id: "120",
    category: "Bag M&W",
    name: "Cerulean Signature Travel Bag",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-eleven-product.jpg?updatedAt=1767645256908",
  },
  {
    id: "121",
    category: "Bag M&W",
    name: "Iron Shadow Multi-Pocket Bag",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-twety-product.jpg?updatedAt=1767645253446",
  },
  {
    id: "122",
    category: "Bag M&W",
    name: "Frost Blue Luxury Satchel",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-seventeen-product.jpg?updatedAt=1767645252975",
  },
  {
    id: "123",
    category: "Hat",
    name: "Panda Signature Snapback",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/hero-two.jpg?updatedAt=1767958714300",
  },
  {
    id: "124",
    category: "Hat",
    name: "Slate Heritage Polo Cap",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/hat-1-prodcut.jpg?updatedAt=1767645260764",
  },
  {
    id: "125",
    category: "Hat",
    name: "Azure Circuit Racing Cap",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/hat-10-prodcut.jpg?updatedAt=1767645258692",
  },
  {
    id: "126",
    category: "Hat",
    name: "Alabaster Executive Cap",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/hat-9-prodcut.jpg?updatedAt=1767645257848",
  },
  {
    id: "127",
    category: "Hat",
    name: "Performance Aero-Bill Visor",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/hat-4-prodcut.jpg?updatedAt=1767645257735",
  },
  {
    id: "128",
    category: "Hat",
    name: "Victory Mesh Tennis Cap",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/hat-8-prodcut.jpg?updatedAt=1767645257607",
  },
  {
    id: "129",
    category: "Hat",
    name: "Contrast Panel Street Cap",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/hat-5-prodcut.jpg?updatedAt=1767645253403",
  },
  {
    id: "130",
    category: "Hat",
    name: "Midnight Luxury Embroidery Cap",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/hat-2-prodcut.jpg?updatedAt=1767645253395",
  },
  {
    id: "131",
    category: "Hat",
    name: "Flight Classic Jumpman Cap",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/hat-7-prodcut.jpg?updatedAt=1767645253012",
  },
  {
    id: "132",
    category: "Hat",
    name: "Monochrome Elite Tennis Cap",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/hat-6-prodcut.jpg?updatedAt=1767645252954",
  },
  {
    id: "133",
    category: "Hat",
    name: "Iconic Two-Tone Baseball Cap",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/hat-3-prodcut.jpg?updatedAt=1767645252948",
  },
  {
    id: "164",
    category: "Bag M&W",
    name: "Parisian Amber Slate Tote",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-two-product.jpg?updatedAt=1767645261136",
  },
  {
    id: "165",
    category: "Bag M&W",
    name: "Graphite City Lifestyle Bag",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-five-product.jpg?updatedAt=1767645260956",
  },
  {
    id: "166",
    category: "Bag M&W",
    name: "Midnight Gilded Heritage Bag",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/bag-three-product.jpg?updatedAt=1767645260897",
  },

  //Sanglasses
  {
    id: "134",
    category: "Sanglass",
    name: "Azure Horizon Polarized Shades",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/sunglass-1-prodcut.jpg?updatedAt=1767645262993",
  },
  {
    id: "135",
    category: "Sanglass",
    name: "Milano Signature Aviators",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/sunglass-2-prodcut.jpg?updatedAt=1767645262974",
  },
  {
    id: "136",
    category: "Sanglass",
    name: "Emerald Stealth Wayfarers",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/sunglass-5-prodcut.jpg?updatedAt=1767645262750",
  },
  {
    id: "137",
    category: "Sanglass",
    name: "Gilded Forest Luxury Frames",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/sunglass-4-prodcut.jpg?updatedAt=1767645262594",
  },
  {
    id: "138",
    category: "Sanglass",
    name: "Titanium Slate Geometric Shades",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/sunglass-3-prodcut.jpg?updatedAt=1767645262582",
  },
  {
    id: "139",
    category: "Sanglass",
    name: "Oceanic Tint Retro Frames",
    image: "",
  },

  //Watch
  {
    id: "140",
    category: "Watch",
    name: "Emerald Prestige Gold Chronograph",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-18-product.jpg?updatedAt=1767645263944",
  },
  {
    id: "141",
    category: "Watch",
    name: "Platinum Two-Tone Jubilee",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-16-product.jpg?updatedAt=1767645263919",
  },
  {
    id: "142",
    category: "Watch",
    name: "Minimalist Slate Leather Timepiece",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-10-product.jpg?updatedAt=1767645263960",
  },
  {
    id: "143",
    category: "Watch",
    name: "Graceful Silver Mesh Dress Watch",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-12-product.jpg?updatedAt=1767645263863",
  },
  {
    id: "144",
    category: "Watch",
    name: "Artisan Contemporary Pearl Watch",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-11-product.jpg?updatedAt=1767645263809",
  },
  {
    id: "145",
    category: "Watch",
    name: "Pristine Smart Series Digital",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-category.jpg?updatedAt=1767645263756",
  },
  {
    id: "146",
    category: "Watch",
    name: "Onyx Gold Professional Diver",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-15-product.jpg?updatedAt=1767645263742",
  },
  {
    id: "147",
    category: "Watch",
    name: "Midnight Gilded Masterpiece",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-14-product.jpg?updatedAt=1767645263746",
  },
  {
    id: "148",
    category: "Watch",
    name: "Cerulean Sunray Gold link",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-17-product.jpg?updatedAt=1767645263738",
  },
  {
    id: "149",
    category: "Watch",
    name: "Executive Graphite Steel Watch",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-3-product.jpg?updatedAt=1767645263733",
  },
  {
    id: "150",
    category: "Watch",
    name: "Shadow Stealth Chrono",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-6-product.jpg?updatedAt=1767645263563",
  },
  {
    id: "151",
    category: "Watch",
    name: "Classic Heritage Rose Gold",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-7-product.jpg?updatedAt=1767645263445",
  },
  {
    id: "152",
    category: "Watch",
    name: "Luxury Starry Night Bracelet",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-8-product.jpg?updatedAt=1767645263438",
  },
  {
    id: "153",
    category: "Watch",
    name: "Ivory Quartz Petite Watch",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-4-product.jpg?updatedAt=1767645263452",
  },
  {
    id: "154",
    category: "Watch",
    name: "Amethyst Bloom Fashion Watch",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-9-product.jpg?updatedAt=1767645263315",
  },
  {
    id: "155",
    category: "Watch",
    name: "Imperial Black Gold Chrono",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-2-product.jpg?updatedAt=1767645263291",
  },
  {
    id: "156",
    category: "Watch",
    name: "Violet Dusk Evening Watch",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-13-product.jpg?updatedAt=1767645263211",
  },
  {
    id: "157",
    category: "Watch",
    name: "Orchid Minimalist Mesh",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-5-product.jpg?updatedAt=1767645263126",
  },
  {
    id: "158",
    category: "Watch",
    name: "Midnight Smart Sport Series",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/watch-1-product.jpg?updatedAt=1767645262716",
  },

  //glove
  {
    id: "159",
    category: "Glove M&W",
    name: "Midnight Silk-Touch Gloves",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/glove-3-product.jpg?updatedAt=1767645259840",
  },
  {
    id: "160",
    category: "Glove M&W",
    name: "Obsidian Core Thermal Gloves",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/glove-1-product.jpg?updatedAt=1767645259087",
  },
  {
    id: "161",
    category: "Glove M&W",
    name: "Tactical Stealth Combat Gloves",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/glove-2-product.jpg?updatedAt=1767645258508",
  },
  {
    id: "162",
    category: "Glove M&W",
    name: "Amethyst Fleece Tech Gloves",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/glove-4-product.jpg?updatedAt=1767645257004",
  },
  {
    id: "163",
    category: "Glove M&W",
    name: "Panda Contrast Knitted Gloves",
    image:
      "https://ik.imagekit.io/8llkguagpe/New%20Folder/glove-5-product.jpg?updatedAt=1767645253029",
  },
];
