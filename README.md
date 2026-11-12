# Ente Keralam

Pre-launch website for **Ente Keralam**, a Kerala cuisine restaurant opening soon in Mapusa, Goa.

## Draft handoff

**Live draft:** https://claude.ai/artifact/NS7YbZyWC5XbKezCd49VJC (private until shared from the page's Share menu)
**Status:** Draft v3 · 10 Nov 2026
**Pages**
| File | Page | Contents |
|---|---|---|
| `index.html` | Home | Hero, launch line, dish marquee, story intro, menu preview, The Kerala Experience, visit band |
| `story.html` | Our Story | The name and Kerala cooking, The Kerala Experience |
| `menu.html` | Menu | Sample menu with categories and veg filter, Kerala food glossary |
| `gallery.html` | Gallery | Photo grid with captions and a full-screen viewer |
| `contact.html` | Contact | Location, contact placeholders, WhatsApp, map placeholder |

**Shared files**
- `assets/css/styles.css`: all styles for every page
- `assets/js/content.js`: all editable content (contact details, photos, menu, credits)
- `assets/js/main.js`: shared behaviour (navigation, menu, gallery viewer, reveals)
- `images/`: 31 photos

The header, footer and mobile action bar are repeated in each HTML file; change all five when editing them. Menu categories can be linked directly, e.g. `menu.html#coast`.

**Run locally:** open `index.html` in a browser, or serve the folder with any static server, e.g. `npx serve .`

**Deploy:** any static host works (GitHub Pages, Netlify, Vercel). For GitHub Pages: Settings → Pages → Deploy from branch `main`, folder `/`.

## What's on the site
- Sticky nav with Reserve a Table CTA; mobile menu and a bottom action bar on phones (Menu / Directions / Reserve)
- Hero: "Kerala's flavours. Now in Mapusa." with coming-soon indicator, Discover Our Menu and Find Us CTAs
- Launch line band and a scrolling strip of dish names in English and Malayalam
- Our Story: introduces the name (എന്റെ കേരളം, "my Kerala") and Kerala cooking; no founder story or history
- Menu: 5 categories, 15 sample dishes with photos, a vegetarian filter and veg/non-veg marks. All marked Sample, prices "₹ —"
- New to Kerala food?: glossary of 8 terms (sadya, appam, puttu, pollichathu, kudampuli, thoran, payasam, nilavilakku)
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
- `MENU`: categories and dishes; set `price` to a number and `sample: false` for real items
Adding a WhatsApp number turns every Reserve button into a WhatsApp chat link.

## Photos
Current images are Creative Commons photos from Wikimedia Commons (mostly CC BY-SA), credited in the footer. They illustrate Kerala cuisine and are not the restaurant's own. Replace them with the restaurant's photography before launch and remove credits for any photo that's gone.

## Needed from the restaurant
- Logo (currently the name set in type)
- Own food and interior photography
- Confirmed menu: dishes, prices, veg/non-veg
- Address, phone, WhatsApp, opening hours, opening date
- Instagram / Facebook / Google Business links and exact Google Maps link
- Founder or chef story, if they want one
- Domain and hosting
