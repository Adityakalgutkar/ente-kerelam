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

/* MENU — every item is a SAMPLE placeholder. Replace with the real menu:
   set sample:false, fill price (number), and swap the photo path. */
const MENU = [
  { id:"breakfast", label:"Breakfast & Tiffin", intro:"Steamed, fermented and lacy — Kerala's morning plates.", items:[
    { name:"Appam & Stew", photo:"images/m-appam.jpg", desc:"Sample: lacy fermented rice hoppers with a mild coconut-milk stew.", price:null, veg:true, tone:"t-rice" },
    { name:"Puttu & Kadala", photo:"images/m-puttu.jpg", desc:"Sample: steamed rice and coconut cylinders with black chickpea curry.", price:null, veg:true, tone:"t-ember" },
    { name:"Idiyappam & Egg Curry", photo:"images/m-idiyappam.jpg", desc:"Sample: string hoppers with a coconut-based egg curry.", price:null, veg:false, tone:"t-curry" }
  ]},
  { id:"sadya", label:"Sadya", intro:"The banana-leaf feast, served in its traditional order.", items:[
    { name:"Sadya on Banana Leaf", photo:"images/m-sadya.jpg", desc:"Sample: rice with a spread of curries, thoran, pickles, papadam and payasam.", price:null, veg:true, tone:"t-leaf" },
    { name:"Avial", photo:"images/m-avial.jpg", desc:"Sample: mixed vegetables in a ground coconut and yoghurt base, finished with coconut oil.", price:null, veg:true, tone:"t-rice" },
    { name:"Olan", photo:"images/m-olan.jpg", desc:"Sample: ash gourd and cowpeas gently cooked in coconut milk.", price:null, veg:true, tone:"t-sea" }
  ]},
  { id:"coast", label:"From the Coast", intro:"Kerala's seafood, sour, red and full of curry leaf.", items:[
    { name:"Karimeen Pollichathu", photo:"images/m-karimeen.jpg", desc:"Sample: pearl spot fish in spiced masala, wrapped and roasted in banana leaf.", price:null, veg:false, tone:"t-leaf" },
    { name:"Kerala Fish Curry", photo:"images/m-fishcurry.jpg", desc:"Sample: fish simmered with kudampuli and red chilli in a clay pot.", price:null, veg:false, tone:"t-ember" },
    { name:"Prawn Roast", photo:"images/m-prawn.jpg", desc:"Sample: prawns roasted dry with onion, pepper and curry leaves.", price:null, veg:false, tone:"t-curry" }
  ]},
  { id:"curries", label:"Curries & Sides", intro:"The everyday pots of a Kerala kitchen.", items:[
    { name:"Nadan Chicken Curry", photo:"images/m-chicken.jpg", desc:"Sample: home-style chicken curry with roasted coconut and spices.", price:null, veg:false, tone:"t-teak" },
    { name:"Thoran", photo:"images/m-thoran.jpg", desc:"Sample: finely chopped seasonal vegetables stir-fried with grated coconut.", price:null, veg:true, tone:"t-leaf" },
    { name:"Erissery", photo:"images/m-erissery.jpg", desc:"Sample: pumpkin and lentils with toasted coconut.", price:null, veg:true, tone:"t-curry" }
  ]},
  { id:"sweets", label:"Sweets", intro:"Jaggery, coconut and cardamom to finish.", items:[
    { name:"Payasam", photo:"images/m-payasam.jpg", desc:"Sample: slow-cooked pudding with jaggery, coconut milk and cardamom.", price:null, veg:true, tone:"t-brass" },
    { name:"Unniyappam", photo:"images/m-unniyappam.jpg", desc:"Sample: small fried rice-and-banana dumplings sweetened with jaggery.", price:null, veg:true, tone:"t-ember" },
    { name:"Ela Ada", photo:"images/m-elaada.jpg", desc:"Sample: rice parcels with sweet coconut filling, steamed in banana leaf.", price:null, veg:true, tone:"t-leaf" }
  ]}
];

const CREDITS = [{"t": "Kerala Sadya 02", "a": "Ganesh Mohan T", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Kerala_Sadya_02.jpg"}, {"t": "Massa Stew with Appam", "a": "Sudiptorana", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Massa_Stew_with_Appam.jpg"}, {"t": "Chazhur Kovilakam Nalukettu", "a": "HARISREE", "l": "CC BY-SA 3.0", "lu": "https://creativecommons.org/licenses/by-sa/3.0/", "u": "https://commons.wikimedia.org/wiki/File:Chazhur_Kovilakam_Nalukettu.JPG"}, {"t": "Coconut being grated", "a": "Subhashish Panigrahi", "l": "CC BY-SA 3.0", "lu": "https://creativecommons.org/licenses/by-sa/3.0/", "u": "https://commons.wikimedia.org/wiki/File:Coconut_being_grated.jpg"}, {"t": "Traditional Onam Sadya 2024", "a": "Bhuvana Meenakshi", "l": "CC BY 4.0", "lu": "https://creativecommons.org/licenses/by/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Traditional_Onam_Sadya_2024.jpg"}, {"t": "Grated Coconut - Howrah 2013-10-18 3541", "a": "Biswarup Ganguly", "l": "CC BY 3.0", "lu": "https://creativecommons.org/licenses/by/3.0/", "u": "https://commons.wikimedia.org/wiki/File:Grated_Coconut_-_Howrah_2013-10-18_3541.JPG"}, {"t": "Karimeen Ilayill Pollichathu", "a": "Jiss Tom palelil", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Karimeen_Ilayill_Pollichathu.JPG"}, {"t": "Karthikai Deepam", "a": "Aravind Sivaraj", "l": "CC BY-SA 3.0", "lu": "https://creativecommons.org/licenses/by-sa/3.0/", "u": "https://commons.wikimedia.org/wiki/File:Karthikai_Deepam.jpg"}, {"t": "Kerala Sadhya (കേരള സദ്യ )", "a": "Manukrishnan80", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Kerala_Sadhya_(%E0%B4%95%E0%B5%87%E0%B4%B0%E0%B4%B3_%E0%B4%B8%E0%B4%A6%E0%B5%8D%E0%B4%AF_).jpg"}, {"t": "Puttu Kadala Curry and Pazham", "a": "Jyothishbabu", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Puttu_Kadala_Curry_and_Pazham.jpg"}, {"t": "Nilavilakku", "a": "Vis M", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Nilavilakku.jpg"}, {"t": "20260317 Murraya koenigii 02", "a": "Flocci Nivis", "l": "CC BY 4.0", "lu": "https://creativecommons.org/licenses/by/4.0/", "u": "https://commons.wikimedia.org/wiki/File:20260317_Murraya_koenigii_02.jpg"}, {"t": "Padmanabhapuram Palace-2", "a": "Jagadhatri", "l": "CC BY-SA 3.0", "lu": "https://creativecommons.org/licenses/by-sa/3.0/", "u": "https://commons.wikimedia.org/wiki/File:Padmanabhapuram_Palace-2.JPG"}, {"t": "Meen curry 2", "a": "Kalakki at Malayalam Wikipedia", "l": "CC BY-SA 2.5", "lu": "https://creativecommons.org/licenses/by-sa/2.5/", "u": "https://commons.wikimedia.org/wiki/File:Meen_curry_2.JPG"}, {"t": "Onam sadya", "a": "Abraham Jacob John", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Onam_sadya.jpg"}, {"t": "Paal payasam", "a": "Ross thres", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Paal_payasam.JPG"}, {"t": "Appam and stew", "a": "Nithajay", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Appam_and_stew.jpg"}, {"t": "GKN Puttu Kadala DSC 0555", "a": "Pranchiyettan", "l": "CC BY-SA 2.5 in", "lu": "https://creativecommons.org/licenses/by-sa/2.5/in/", "u": "https://commons.wikimedia.org/wiki/File:GKN_Puttu_Kadala_DSC_0555.JPG"}, {"t": "Idiyappam with Egg Masala Curry", "a": "Viewfinder18", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Idiyappam_with_Egg_Masala_Curry.jpg"}, {"t": "Onam Sadhya served on banana leaf at Wiki Conference India 2026 in Crown Plaza Hotel in Kochi 02", "a": "Dev Jadiya", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Onam_Sadhya_served_on_banana_leaf_at_Wiki_Conference_India_2026_in_Crown_Plaza_Hotel_in_Kochi_02.jpg"}, {"t": "Aviyal,Kerala cuisine", "a": "Samphotography", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Aviyal,Kerala_cuisine.jpg"}, {"t": "Olan", "a": "Kavya Manohar", "l": "CC BY-SA 3.0", "lu": "https://creativecommons.org/licenses/by-sa/3.0/", "u": "https://commons.wikimedia.org/wiki/File:Olan.jpg"}, {"t": "Karimeen Pollichathu", "a": "Anupama1002", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Karimeen_Pollichathu.jpg"}, {"t": "Kerala spicy Fish Curry", "a": "Ramesh NG", "l": "CC BY-SA 2.0", "lu": "https://creativecommons.org/licenses/by-sa/2.0/", "u": "https://commons.wikimedia.org/wiki/File:Kerala_spicy_Fish_Curry.jpg"}, {"t": "Kerala Style Prawns Roast", "a": "Dhanyagopalakrishnan", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Kerala_Style_Prawns_Roast.jpg"}, {"t": "Kerala Chicken Curry 2024", "a": "Nikolasivy13", "l": "CC0", "lu": "https://creativecommons.org/publicdomain/zero/1.0/", "u": "https://commons.wikimedia.org/wiki/File:Kerala_Chicken_Curry_2024.jpg"}, {"t": "Thoran curry, Kerala style (20945090716)", "a": "Ramesh NG from Bangalore, INDIA", "l": "CC BY-SA 2.0", "lu": "https://creativecommons.org/licenses/by-sa/2.0/", "u": "https://commons.wikimedia.org/wiki/File:Thoran_curry,_Kerala_style_(20945090716).jpg"}, {"t": "Erisseri", "a": "Kavya Manohar", "l": "CC BY-SA 3.0", "lu": "https://creativecommons.org/licenses/by-sa/3.0/", "u": "https://commons.wikimedia.org/wiki/File:Erisseri.jpg"}, {"t": "Semiya payasam, Alappuzha", "a": "Vis M", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Semiya_payasam,_Alappuzha.jpg"}, {"t": "Unniyappam - Karayappam - Kuzhiyappam", "a": "Mullookkaaran", "l": "CC BY-SA 3.0", "lu": "https://creativecommons.org/licenses/by-sa/3.0/", "u": "https://commons.wikimedia.org/wiki/File:Unniyappam_-_Karayappam_-_Kuzhiyappam.jpg"}, {"t": "Kerala Ela Ada", "a": "Samphotography", "l": "CC BY-SA 4.0", "lu": "https://creativecommons.org/licenses/by-sa/4.0/", "u": "https://commons.wikimedia.org/wiki/File:Kerala_Ela_Ada.jpg"}];
