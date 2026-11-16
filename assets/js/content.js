/* =====================================================================
   CONTENT CONFIG — edit these to update the site. Nothing else needs
   to change. Empty strings show as "To be announced".
   ===================================================================== */
const SITE = {
  address: "",                       // e.g. "Shop 4, Main Road, Mapusa, Goa 403507"
  phone: "",                         // e.g. "+91 98xxxxxxxx"
  whatsapp: "",                      // digits only with country code, e.g. "9198xxxxxxxx"
  hours: "",                         // e.g. "Tue–Sun · 12–3:30 pm, 7–11 pm"
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mapusa%2C+Goa", // replace with exact place link
  social: [                          // add url when ready, e.g. "https://instagram.com/entekeralam"
    { name: "Instagram", url: "" },
    { name: "Facebook",  url: "" },
    { name: "Google",    url: "" }
  ],
  whatsappMessage: "Hi Ente Keralam! I'd like to reserve a table.",
  draft: true                        // shows the "Draft preview" strip; set false for launch
};

/* Photos: current images are Creative Commons photos from Wikimedia Commons (credited in the footer).
   Swap `src` for the restaurant's own photographs; an empty src shows a designed placeholder. */
const PHOTOS = {
  hero:       { src:"images/hero.jpg", eager:true, alt:"Kerala sadya served on a banana leaf", brief:"Sadya on banana leaf, overhead, soft daylight" },
  heroInset:  { src:"images/hero-inset.jpg", eager:true, alt:"Appam with stew", brief:"Appam with stew, close" },
  story:      { src:"images/story.jpg", alt:"Wooden pillars around the courtyard of a traditional Kerala nalukettu", brief:"Kerala wood craft — carved teak, warm light" },
  storyInset: { src:"images/story-inset.jpg", alt:"Fresh coconut being grated by hand", brief:"Fresh coconut being grated" },
  expLeaf:    { src:"images/exp-leaf.jpg", alt:"A sadya laid out on a banana leaf", brief:"Banana leaf being laid, rice first" },
  expCoconut: { src:"images/exp-coconut.jpg", alt:"Freshly grated coconut on a plate", brief:"Coconut, curry leaves, whole spices" },
  expCoast:   { src:"images/exp-coast.jpg", alt:"Karimeen pollichathu, fish roasted in banana leaf", brief:"Fish pollichathu, opened leaf" },
  expLamp:    { src:"images/exp-lamp.jpg", alt:"A lit brass oil lamp", brief:"Brass nilavilakku, lit, low light" }
};

const GALLERY = [
  { src:"images/g-sadya.jpg", alt:"A full Kerala sadya on banana leaf", brief:"Full sadya spread, wide", tone:"t-leaf" },
  { src:"images/g-puttu.jpg", alt:"Puttu with kadala curry and banana", brief:"Puttu & kadala curry", tone:"t-ember" },
  { src:"images/g-lamps.jpg", alt:"Brass nilavilakku lamps", brief:"Lamp flame detail", tone:"t-brass" },
  { src:"images/g-curryleaf.jpg", alt:"Fresh curry leaves", brief:"Curry leaves", tone:"t-leaf" },
  { src:"images/g-palace.jpg", alt:"Carved wooden ceiling, Padmanabhapuram Palace", brief:"Dining room, evening", tone:"t-teak" },
  { src:"images/g-meencurry.jpg", alt:"Kerala fish curry with curry leaves", brief:"Fish curry in clay chatti", tone:"t-curry" },
  { src:"images/g-rice.jpg", alt:"Rice and curry being mixed by hand on a sadya leaf", brief:"Hands serving rice", tone:"t-rice" },
  { src:"images/g-payasam.jpg", alt:"Paal payasam", brief:"Payasam in brass uruli", tone:"t-sea" }
];

/* MENU — the Ente Keralam opening menu (Central Travancore Nasrani cuisine).
   price: a number in rupees, or text such as "₹290 / ₹380". veg: true / false.
   photo: optional; dishes with a photo show a thumbnail. */
const MENU = [
 {
  "id": "breakfast",
  "label": "Breakfast",
  "intro": "Appam, puttu and idiyappam, the way Central Travancore starts the day.",
  "items": [
   {
    "name": "Appam with Vegetable Stew",
    "desc": "Soft rice pancake with coconut milk, served with mixed vegetable stew",
    "price": 100,
    "veg": true,
    "photo": "images/m-appam.jpg"
   },
   {
    "name": "Puttu with Kadala Curry",
    "desc": "Steamed rice cylinders with coconut, served with black chickpea curry",
    "price": 100,
    "veg": true,
    "photo": "images/m-puttu.jpg"
   },
   {
    "name": "Idiyappam with Egg Curry",
    "desc": "Steamed rice flour noodles served with spicy egg curry",
    "price": 125,
    "veg": false,
    "photo": "images/m-idiyappam.jpg"
   },
   {
    "name": "Dosa with Chicken Curry",
    "desc": "Crisp fermented rice crepe served with spicy chicken curry",
    "price": 160,
    "veg": false
   },
   {
    "name": "Puttu with Beef Fry",
    "desc": "Steamed rice puttu served with Kerala-style roasted beef",
    "price": 200,
    "veg": false
   },
   {
    "name": "Appam with Mutton Stew",
    "desc": "Soft rice pancake served with slow-cooked mutton in coconut gravy",
    "price": 250,
    "veg": false
   },
   {
    "name": "Vellayappam with Duck Curry",
    "desc": "Soft white appam served with rich spicy duck curry",
    "price": 270,
    "veg": false
   }
  ]
 },
 {
  "id": "lunch",
  "label": "Lunch",
  "intro": "Banana-leaf meals, biriyanis and the roasts Nasrani homes are known for.",
  "items": [
   {
    "name": "Kerala Meals on Banana Leaf",
    "desc": "Traditional feast on banana leaf with ghee rice and curries",
    "price": 200,
    "veg": true,
    "photo": "images/m-sadya.jpg"
   },
   {
    "name": "Fish Curry Meals",
    "desc": "Rice meals with Kerala fish curry and sides",
    "price": 225,
    "veg": false,
    "photo": "images/m-fishcurry.jpg"
   },
   {
    "name": "Kappa with Beef Curry",
    "desc": "Mashed tapioca served with spicy beef curry",
    "price": 250,
    "veg": false
   },
   {
    "name": "Chicken Curry",
    "desc": "Homestyle chicken in roasted coconut gravy",
    "price": 270,
    "veg": false,
    "photo": "images/m-chicken.jpg"
   },
   {
    "name": "Malabar Biriyani · Chicken / Mutton / Beef",
    "desc": "Fragrant layered rice with spiced meat, raita and pickle",
    "price": "₹290 / ₹380",
    "veg": false
   },
   {
    "name": "Thalassery Chicken Biriyani",
    "desc": "Thalassery-style dum biriyani with tender chicken",
    "price": 315,
    "veg": false
   },
   {
    "name": "Beef Ularthiyathu",
    "desc": "Dry-roasted beef with coconut slices and curry leaves",
    "price": 315,
    "veg": false,
    "photo": "images/m-ularthiyathu.jpg"
   },
   {
    "name": "Mutton Roast",
    "desc": "Slow-roasted mutton in onion, spice and coconut",
    "price": 380,
    "veg": false
   },
   {
    "name": "Duck Roast",
    "desc": "Roasted duck in thick spicy masala",
    "price": 405,
    "veg": false
   }
  ]
 },
 {
  "id": "dinner",
  "label": "Dinner",
  "intro": "Clay-pot rice, kappa biriyani and breads with slow-cooked curries.",
  "items": [
   {
    "name": "Idiyappam with Chicken Stew",
    "desc": "Rice noodles with mild chicken stew",
    "price": 200,
    "veg": false
   },
   {
    "name": "Chatti Choru",
    "desc": "Rice and curries layered and served in a clay pot",
    "price": 225,
    "veg": false,
    "photo": "images/m-chatti.jpg"
   },
   {
    "name": "Pathiri with Beef Curry",
    "desc": "Thin rice flatbread with beef curry",
    "price": 260,
    "veg": false
   },
   {
    "name": "Kappa Biriyani",
    "desc": "Tapioca mixed with biriyani masala and meat",
    "price": 270,
    "veg": false,
    "photo": "images/m-kappabiriyani.jpg"
   },
   {
    "name": "Parotta with Beef Roast",
    "desc": "Flaky layered bread with beef roast",
    "price": 270,
    "veg": false,
    "photo": "images/m-beefroast.jpg"
   },
   {
    "name": "Appam with Mutton Curry",
    "desc": "Soft appam with spicy mutton curry",
    "price": 290,
    "veg": false
   },
   {
    "name": "Ghee Rice with Mutton Curry",
    "desc": "Fragrant ghee rice with mutton curry",
    "price": 360,
    "veg": false
   }
  ]
 },
 {
  "id": "starters",
  "label": "Starters",
  "intro": "Fried, roasted and peppered. Served in the evening.",
  "items": [
   {
    "name": "Beef Cutlet",
    "desc": "Crumb-fried spiced beef patty",
    "price": 125,
    "veg": false
   },
   {
    "name": "Chicken Cutlet",
    "desc": "Crumb-fried spiced chicken patty",
    "price": 125,
    "veg": false
   },
   {
    "name": "Chicken 65",
    "desc": "Spicy deep-fried chicken with curry leaves",
    "price": 250,
    "veg": false,
    "photo": "images/m-chicken65.jpg"
   },
   {
    "name": "Chicken Kondattam",
    "desc": "Sun-dried marinated chicken, crisp fried",
    "price": 270,
    "veg": false
   },
   {
    "name": "Kerala Fish Fry",
    "desc": "Fish marinated in chilli, shallow fried",
    "price": 290,
    "veg": false,
    "photo": "images/m-fishfry.jpg"
   },
   {
    "name": "Beef Dry Fry",
    "desc": "Dry-roasted beef with coconut and spices",
    "price": 315,
    "veg": false
   },
   {
    "name": "Prawns Fry",
    "desc": "Prawns fried with spices and curry leaves",
    "price": 335,
    "veg": false,
    "photo": "images/m-prawn.jpg"
   },
   {
    "name": "Mutton Pepper Fry",
    "desc": "Mutton tossed in crushed black pepper",
    "price": 380,
    "veg": false
   }
  ]
 },
 {
  "id": "snacks",
  "label": "Snacks",
  "intro": "Tea-time snacks from a Kerala chayakkada.",
  "items": [
   {
    "name": "Parippu Vada",
    "desc": "Crisp lentil fritters with curry leaves",
    "price": 45,
    "veg": true,
    "photo": "images/m-parippuvada.jpg"
   },
   {
    "name": "Uzhunnu Vada",
    "desc": "Soft doughnut-shaped urad dal vada",
    "price": 45,
    "veg": true
   },
   {
    "name": "Pazham Pori",
    "desc": "Banana fritters in crisp batter",
    "price": 70,
    "veg": true,
    "photo": "images/m-pazhampori.jpg"
   },
   {
    "name": "Kozhukkatta",
    "desc": "Steamed rice dumpling with coconut filling",
    "price": 80,
    "veg": true
   },
   {
    "name": "Ela Ada",
    "desc": "Rice cake steamed in banana leaf",
    "price": 80,
    "veg": true,
    "photo": "images/m-elaada.jpg"
   },
   {
    "name": "Chakka Ada",
    "desc": "Jackfruit rice cake steamed in leaf",
    "price": 90,
    "veg": true
   },
   {
    "name": "Unnakkaya",
    "desc": "Fried banana stuffed with egg and coconut",
    "price": 100,
    "veg": false
   },
   {
    "name": "Mutton Cutlet",
    "desc": "Crumb-fried spiced mutton patty",
    "price": 145,
    "veg": false
   }
  ]
 },
 {
  "id": "sweets",
  "label": "Sweets",
  "intro": "Payasams and pradhamans, slow-cooked with jaggery and coconut milk.",
  "items": [
   {
    "name": "Unniyappam",
    "desc": "Sweet fried rice and banana fritters",
    "price": 70,
    "veg": true,
    "photo": "images/m-unniyappam.jpg"
   },
   {
    "name": "Vattayappam",
    "desc": "Soft steamed rice and coconut cake",
    "price": 80,
    "veg": true
   },
   {
    "name": "Kozhukkatta",
    "desc": "Steamed dumpling with sweet coconut filling",
    "price": 80,
    "veg": true
   },
   {
    "name": "Semiya Payasam",
    "desc": "Vermicelli pudding in sweet milk",
    "price": 115,
    "veg": true,
    "photo": "images/m-payasam.jpg"
   },
   {
    "name": "Palada Payasam",
    "desc": "Milk pudding with rice flakes",
    "price": 135,
    "veg": true
   },
   {
    "name": "Ada Pradhaman",
    "desc": "Jaggery and coconut milk dessert with rice ada",
    "price": 155,
    "veg": true
   },
   {
    "name": "Chakka Pradhaman",
    "desc": "Jackfruit and jaggery coconut dessert",
    "price": 155,
    "veg": true
   }
  ]
 },
 {
  "id": "drinks",
  "label": "Tea, coffee & juices",
  "intro": "Kerala's everyday drinks. For mocktails and cocktails, see the Drinks page.",
  "items": [
   {
    "name": "Chaya / Kattan Chaya",
    "desc": "Kerala tea, with milk or black spiced",
    "price": 40,
    "veg": true
   },
   {
    "name": "Kerala Filter Coffee",
    "desc": "Strong South Indian coffee with hot milk",
    "price": 50,
    "veg": true,
    "photo": "images/d-filtercoffee.jpg"
   },
   {
    "name": "Sulaimani",
    "desc": "Spiced lemon black tea, light and refreshing",
    "price": 50,
    "veg": true,
    "photo": "images/d-sulaimani.jpg"
   },
   {
    "name": "Buttermoru / Sambharam",
    "desc": "Spiced Kerala buttermilk with curry leaves",
    "price": 60,
    "veg": true,
    "photo": "images/d-sambharam.jpg"
   },
   {
    "name": "Tender Coconut Water · Karikku",
    "desc": "Fresh chilled tender coconut water",
    "price": 70,
    "veg": true
   },
   {
    "name": "Fresh Lime Soda · Sweet / Salt / Mixed",
    "desc": "Sparkling lime soda, sweet, salted or mixed",
    "price": 80,
    "veg": true
   },
   {
    "name": "Mango Juice",
    "desc": "Fresh mango juice, no added sugar",
    "price": 120,
    "veg": true,
    "photo": "images/d-mango.jpg"
   },
   {
    "name": "Orange Juice",
    "desc": "Freshly squeezed orange juice",
    "price": 120,
    "veg": true
   }
  ]
 },
 {
  "id": "fusion",
  "label": "Kerala coolers",
  "intro": "Fusion coolers and shakes made with Kerala fruit and spice.",
  "items": [
   {
    "name": "Kulukki Sarbath",
    "desc": "Shaken Kerala lime sarbath with basil seeds",
    "price": 150,
    "veg": true
   },
   {
    "name": "Kerala Spice Iced Tea",
    "desc": "Iced tea infused with cardamom, ginger and lemongrass",
    "price": 160,
    "veg": true
   },
   {
    "name": "Pineapple Ginger Fizz",
    "desc": "Pineapple, ginger and soda, fizzy and fresh",
    "price": 170,
    "veg": true
   },
   {
    "name": "Tender Coconut Mojito",
    "desc": "Coconut water, mint, lime and soda cooler",
    "price": 180,
    "veg": true
   },
   {
    "name": "Mango Chilli Cooler",
    "desc": "Mango, chilli, lime and soda, sweet and tangy",
    "price": 180,
    "veg": true
   },
   {
    "name": "Coconut Pineapple Shake",
    "desc": "Coconut milk and pineapple blended into a creamy shake",
    "price": 190,
    "veg": true
   },
   {
    "name": "Jackfruit Smoothie · Chakka Shake",
    "desc": "Jackfruit, milk and honey blended smooth",
    "price": 190,
    "veg": true
   },
   {
    "name": "Filter Coffee Cold Shake",
    "desc": "Cold Kerala filter coffee blended with milk and ice cream",
    "price": 190,
    "veg": true
   }
  ]
 }
];

/* DRINKS — The Heritage Drinks Collection (Drinks page). colour tints the glass icon. */
const DRINKS = {
 "mocktails": [
  {
   "name": "Elaneer Royal",
   "note": "The taste of Kerala",
   "desc": "Tender coconut water, coconut flesh, lime and mint.",
   "price": 260,
   "colour": "#e9e4d4",
   "signature": true
  },
  {
   "name": "Malabar Kokum Cooler",
   "note": "The Malabar refreshment",
   "desc": "Kokum, lime, mint and sparkling water.",
   "price": 220,
   "colour": "#a3253a"
  },
  {
   "name": "Alleppey Pineapple Fizz",
   "note": "The tropical classic",
   "desc": "Fresh pineapple, ginger, lime and soda.",
   "price": 220,
   "colour": "#e7b93a"
  },
  {
   "name": "Kottayam Coconut Colada",
   "note": "The creamy indulgence",
   "desc": "Coconut milk, pineapple and cardamom.",
   "price": 280,
   "colour": "#f1e7cf"
  },
  {
   "name": "Nannari Lime Sparkle",
   "note": "Traditional Kerala sarbath",
   "desc": "Nannari, lime and sparkling water.",
   "price": 200,
   "colour": "#b06a2b"
  },
  {
   "name": "Mango Pepper Splash",
   "note": "Sweet and spicy",
   "desc": "Mango, lime, black pepper and soda.",
   "price": 240,
   "colour": "#f0a12a"
  },
  {
   "name": "Fort Kochi Rose Cooler",
   "note": "The elegant floral drink",
   "desc": "Lychee, rose, lime and coconut water.",
   "price": 260,
   "colour": "#f2b9c4"
  }
 ],
 "cocktails": [
  {
   "name": "Malabar Coconut Mojito",
   "note": "Kerala meets the Caribbean",
   "desc": "White rum, coconut water, lime and mint.",
   "price": 390,
   "colour": "#dfe8c9"
  },
  {
   "name": "Travancore Spice Punch",
   "note": "Warm Central Travancore character",
   "desc": "Dark rum, pineapple, cinnamon and pepper.",
   "price": 420,
   "colour": "#b5652a"
  },
  {
   "name": "Malabar Mango Martini",
   "note": "A modern Kerala favourite",
   "desc": "Vodka, mango, lime and a hint of chilli.",
   "price": 420,
   "colour": "#f2a83a"
  },
  {
   "name": "Cochin Ruby Gin",
   "note": "A premium botanical cocktail",
   "desc": "Gin, kokum, lime and tonic.",
   "price": 450,
   "colour": "#c23a55",
   "signature": true
  },
  {
   "name": "Kottayam Old Fashioned",
   "note": "The after-dinner drink",
   "desc": "Aged or dark rum, cardamom, bitters and orange.",
   "price": 480,
   "colour": "#8a4a1c",
   "signature": true
  }
 ]
};

const CREDITS = [{"t": "Kerala Sadya 02", "a": "Ganesh Mohan T", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Kerala_Sadya_02.jpg"}, {"t": "Massa Stew with Appam", "a": "Sudiptorana", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Massa_Stew_with_Appam.jpg"}, {"t": "Chazhur Kovilakam Nalukettu", "a": "HARISREE", "l": "CC BY-SA 3.0", "lu": "https://creativecommons.org/licenses/by-sa/3.0/", "u": "https://commons.wikimedia.org/wiki/File:Chazhur_Kovilakam_Nalukettu.JPG"}, {"t": "Coconut being grated", "a": "Subhashish Panigrahi", "l": "CC BY-SA 3.0", "lu": "https://creativecommons.org/licenses/by-sa/3.0/", "u": "https://commons.wikimedia.org/wiki/File:Coconut_being_grated.jpg"}, {"t": "Traditional Onam Sadya 2024", "a": "Bhuvana Meenakshi", "l": "CC BY 4.0", "lu": "https://creativecommons.org/licenses/by/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Traditional_Onam_Sadya_2024.jpg"}, {"t": "Grated Coconut - Howrah 2013-10-18 3541", "a": "Biswarup Ganguly", "l": "CC BY 3.0", "lu": "https://creativecommons.org/licenses/by/3.0/", "u": "https://commons.wikimedia.org/wiki/File:Grated_Coconut_-_Howrah_2013-10-18_3541.JPG"}, {"t": "Karimeen Ilayill Pollichathu", "a": "Jiss Tom palelil", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Karimeen_Ilayill_Pollichathu.JPG"}, {"t": "Karthikai Deepam", "a": "Aravind Sivaraj", "l": "CC BY-SA 3.0", "lu": "https://creativecommons.org/licenses/by-sa/3.0/", "u": "https://commons.wikimedia.org/wiki/File:Karthikai_Deepam.jpg"}, {"t": "Kerala Sadhya (കേരള സദ്യ )", "a": "Manukrishnan80", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Kerala_Sadhya_(%E0%B4%95%E0%B5%87%E0%B4%B0%E0%B4%B3_%E0%B4%B8%E0%B4%A6%E0%B5%8D%E0%B4%AF_).jpg"}, {"t": "Puttu Kadala Curry and Pazham", "a": "Jyothishbabu", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Puttu_Kadala_Curry_and_Pazham.jpg"}, {"t": "Nilavilakku", "a": "Vis M", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Nilavilakku.jpg"}, {"t": "20260317 Murraya koenigii 02", "a": "Flocci Nivis", "l": "CC BY 4.0", "lu": "https://creativecommons.org/licenses/by/4.0/", "u": "https://commons.wikimedia.org/wiki/File:20260317_Murraya_koenigii_02.jpg"}, {"t": "Padmanabhapuram Palace-2", "a": "Jagadhatri", "l": "CC BY-SA 3.0", "lu": "https://creativecommons.org/licenses/by-sa/3.0/", "u": "https://commons.wikimedia.org/wiki/File:Padmanabhapuram_Palace-2.JPG"}, {"t": "Meen curry 2", "a": "Kalakki at Malayalam Wikipedia", "l": "CC BY-SA 2.5", "lu": "https://creativecommons.org/licenses/by-sa/2.5/", "u": "https://commons.wikimedia.org/wiki/File:Meen_curry_2.JPG"}, {"t": "Onam sadya", "a": "Abraham Jacob John", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Onam_sadya.jpg"}, {"t": "Paal payasam", "a": "Ross thres", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Paal_payasam.JPG"}, {"t": "Appam and stew", "a": "Nithajay", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Appam_and_stew.jpg"}, {"t": "GKN Puttu Kadala DSC 0555", "a": "Pranchiyettan", "l": "CC BY-SA 2.5 in", "lu": "https://creativecommons.org/licenses/by-sa/2.5/in/", "u": "https://commons.wikimedia.org/wiki/File:GKN_Puttu_Kadala_DSC_0555.JPG"}, {"t": "Idiyappam with Egg Masala Curry", "a": "Viewfinder18", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Idiyappam_with_Egg_Masala_Curry.jpg"}, {"t": "Onam Sadhya served on banana leaf at Wiki Conference India 2026 in Crown Plaza Hotel in Kochi 02", "a": "Dev Jadiya", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Onam_Sadhya_served_on_banana_leaf_at_Wiki_Conference_India_2026_in_Crown_Plaza_Hotel_in_Kochi_02.jpg"}, {"t": "Kerala spicy Fish Curry", "a": "Ramesh NG", "l": "CC BY-SA 2.0", "lu": "https://creativecommons.org/licenses/by-sa/2.0/", "u": "https://commons.wikimedia.org/wiki/File:Kerala_spicy_Fish_Curry.jpg"}, {"t": "Kerala Style Prawns Roast", "a": "Dhanyagopalakrishnan", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Kerala_Style_Prawns_Roast.jpg"}, {"t": "Kerala Chicken Curry 2024", "a": "Nikolasivy13", "l": "CC0", "lu": "https://creativecommons.org/publicdomain/zero/1.0/", "u": "https://commons.wikimedia.org/wiki/File:Kerala_Chicken_Curry_2024.jpg"}, {"t": "Semiya payasam, Alappuzha", "a": "Vis M", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Semiya_payasam,_Alappuzha.jpg"}, {"t": "Unniyappam - Karayappam - Kuzhiyappam", "a": "Mullookkaaran", "l": "CC BY-SA 3.0", "lu": "https://creativecommons.org/licenses/by-sa/3.0/", "u": "https://commons.wikimedia.org/wiki/File:Unniyappam_-_Karayappam_-_Kuzhiyappam.jpg"}, {"t": "Kerala Ela Ada", "a": "Samphotography", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Kerala_Ela_Ada.jpg"}, {"t": "Kerala Kapppa Biriyani", "a": "Acm142454", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Kerala_Kapppa_Biriyani.jpg"}, {"t": "Whiskey Old Fashioned1", "a": "Erich Wagner (www.eventografie.de)", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Whiskey_Old_Fashioned1.jpg"}, {"t": "Glass of Mango Juice", "a": "Lisa Pinehill", "l": "CC BY-SA 2.0", "lu": "https://creativecommons.org/licenses/by-sa/2.0/", "u": "https://commons.wikimedia.org/wiki/File:Glass_of_Mango_Juice.jpg"}, {"t": "Traditional Beef Ularthiyathu", "a": "Shobha Elizabeth John", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Traditional_Beef_Ularthiyathu.JPG"}, {"t": "Chicken 65 (Dish)", "a": "Amiyashrivastava", "l": "CC BY-SA 3.0", "lu": "https://creativecommons.org/licenses/by-sa/3.0/", "u": "https://commons.wikimedia.org/wiki/File:Chicken_65_(Dish).jpg"}, {"t": "MojitoReydelmojito", "a": "Raimonsocial", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:MojitoReydelmojito.jpg"}, {"t": "KERALA SULAIMANI", "a": "Shajahan.kps", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:KERALA_SULAIMANI.jpg"}, {"t": "Soda Sambharam", "a": "Vis M", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Soda_Sambharam.jpg"}, {"t": "Kokum or Punarpuli sharbat", "a": "Prajna Prabhu", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Kokum_or_Punarpuli_sharbat.jpg"}, {"t": "Top Up shot of parotta with Beef Roast", "a": "Aiwin Soji", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Top_Up_shot_of_parotta_with_Beef_Roast.jpg"}, {"t": "Kerala Fish Fry", "a": "Reshmi R S", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Kerala_Fish_Fry.jpg"}, {"t": "Chatti Chor- A traditional kerala dish", "a": "Sony Raveendran", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Chatti_Chor-_A_traditional_kerala_dish.jpg"}, {"t": "Uzhunnu Vada and Parippu Vada", "a": "Vis M", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Uzhunnu_Vada_and_Parippu_Vada.jpg"}, {"t": "Pazham pori making 05b", "a": "Vis M", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Pazham_pori_making_05b.jpg"}, {"t": "Pina Colada at Aruba", "a": "DDJJ", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Pina_Colada_at_Aruba.jpg"}, {"t": "Tender Coconut Water", "a": "meshamanth", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Tender_Coconut_Water.jpg"}, {"t": "South Indian breakfast with filter coffee, poori and fried snacks, Kerala", "a": "ReetiSingh14", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:South_Indian_breakfast_with_filter_coffee,_poori_and_fried_snacks,_Kerala.jpg"}];
