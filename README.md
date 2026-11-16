# Ente Keralam

Pre-launch website for **Ente Keralam**, a Central Travancore Nasrani (Kerala) restaurant opening soon in Mapusa, Goa.

## Draft handoff

**Live draft:** https://claude.ai/artifact/NS7YbZyWC5XbKezCd49VJC (private until shared from the page's Share menu)
**Status:** Draft v5 · 17 Nov 2026
**Pages**
| File | Page | Contents |
|---|---|---|
| `index.html` | Home | Hero, launch line, dish marquee, story intro, menu preview, The Kerala Experience, visit band |
| `story.html` | Our Story | The name and Kerala cooking, The Kerala Experience |
| `menu.html` | Menu | Opening menu (8 sections) with veg filter, glossary of terms on the menu |
| `drinks.html` | Drinks | The Heritage Drinks Collection: 7 mocktails, 5 cocktails |
| `gallery.html` | Gallery | Photo grid with captions and a full-screen viewer |
| `contact.html` | Contact | Location, contact placeholders, WhatsApp, map placeholder |

**Shared files**
- `assets/css/styles.css`: all styles for every page
- `assets/js/content.js`: all editable content (contact details, photos, menu, credits)
- `assets/js/main.js`: shared behaviour (navigation, menu, gallery viewer, reveals)
- `images/`: 43 photos

The header, footer and mobile action bar are repeated in each HTML file; change all six when editing them. Menu sections can be linked directly, e.g. `menu.html#dinner` or `menu.html#drinks`.

**Run locally:** open `index.html` in a browser, or serve the folder with any static server, e.g. `npx serve .`

**Deploy:** any static host works (GitHub Pages, Netlify, Vercel). For GitHub Pages: Settings → Pages → Deploy from branch `main`, folder `/`.

## What's on the site
- Sticky nav with Reserve a Table CTA; mobile menu and a bottom action bar on phones (Menu / Directions / Reserve)
- Hero: "Kerala's flavours. Now in Mapusa." with coming-soon indicator, Discover Our Menu and Find Us CTAs
- Launch line band and a scrolling strip of dish names in English and Malayalam
- Our Story: introduces the name (എന്റെ കേരളം, "my Kerala") and Central Travancore Nasrani cooking; no founder story or history
- Menu: the opening menu in 8 sections (Breakfast, Lunch, Dinner, Starters, Snacks, Sweets, Tea/coffee/juices, Kerala coolers) with prices, veg/non-veg marks, a vegetarian filter and photos for 21 dishes
- Drinks: The Heritage Drinks Collection, 7 mocktails and 5 cocktails, with colour-coded glass icons and a photo strip
- New to Kerala food?: glossary of 8 terms from the menu (Nasrani, chatti choru, appam, puttu, kappa, ularthiyathu, kondattam, pradhaman)
- The Kerala Experience: banana leaf, coconut, coast, lamp-lit warmth
- Gallery: 8 photos with captions and a viewer with previous/next and swipe
- Find Us: Mapusa, Goa; address, phone, WhatsApp and hours all "To be announced"; Google Maps search link
- Footer: navigation, visit details, social placeholders, photo credits
- Draft preview strip at the top of every page (turn off with `draft: false` in `content.js`)

## Design direction
- Colours: deep forest green, coconut cream, antique brass, teak brown, banana-leaf green
- Type: Gloock (display), Hanken Grotesk (body), Noto Serif Malayalam (script)
- Kasavu gold stripe marks the edges between sections; arched hero photo frame echoes Kerala doorways
- Light and dark mode supported

## How to update content
Everything editable sits in `assets/js/content.js`:
- `SITE`: address, phone, whatsapp (digits with country code), hours, mapsUrl, social links, draft flag
- `PHOTOS` / `GALLERY`: image path + alt text for each slot
- `MENU`: sections and dishes; `price` is a number in rupees or text like "₹290 / ₹380"; `photo` is optional
- `DRINKS`: mocktails and cocktails; `colour` tints the glass icon, `signature: true` adds a Signature badge
Adding a WhatsApp number turns every Reserve button into a WhatsApp chat link.

## Photos
Current images are Creative Commons photos from Wikimedia Commons (mostly CC BY-SA), credited in the footer. They illustrate Kerala cuisine and are not the restaurant's own. Replace them with the restaurant's photography before launch and remove credits for any photo that's gone.

## Needed from the restaurant
- Logo (currently the name set in type)
- Own food and interior photography
- Answers to the menu questions below
- Address, phone, WhatsApp, opening hours, opening date
- Instagram / Facebook / Google Business links and exact Google Maps link
- Founder or chef story, if they want one
- Domain and hosting

## Menu and drinks: questions for Matthew (Nov 2026)
The menu comes from Matthew's 4-page food menu and the drinks from his beverage programme. A few things need confirming:

1. **Puttu with Beef Fry** appears twice in Breakfast (₹160 and ₹200). The site shows it once at ₹200.
2. **Dosa with Chicken Curry**: the description was cut off. The site says "Crisp fermented rice crepe served with spicy chicken curry".
3. **Malabar Biriyani** has three meats (chicken / mutton / beef) but two prices (₹290 / ₹380). Which price is which?
4. **Kozhukkatta** is listed under both Snacks and Sweets at ₹80. Keep it in one section?
5. **Unniyappam** has a garbled veg/non-veg mark. The site marks it vegetarian. **Unnakkaya** (egg filling) is marked non-veg.
6. **Kerala Spice Iced Tea** shows ₹160 and ₹60. The site uses ₹160.
7. Garbled drinks on page 4 were left out: "Kerala Spice" (₹150), a second "Orange Juice" (₹150), "Filter … Shakam", and an unreadable buttermilk item (₹60).
8. **Overlap between drinks lists:** the menu's Tender Coconut Mojito (₹180) and Pineapple Ginger Fizz (₹170) are close to the Heritage collection's Elaneer Royal (₹260) and Alleppey Pineapple Fizz (₹220). Keep both or merge?
9. Beverage prices are the "suggested selling prices" from the programme document. Confirm before launch.

**Not published on purpose:** recipes, costs, margins, purchasing budget and sales projections (internal), and the Kerala beer and wine concepts (proposed, not confirmed products).

**Drink photos:** the photos Matthew shared were screenshots of other websites' images, so they are not used. The Drinks page uses Creative Commons photos as stand-ins until the restaurant photographs its own drinks.
