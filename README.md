# CQuInf Website

**Classical and Quantum Information Processing Research Group**  
Department of Electrical Engineering, IIT Delhi

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
cquinf-website/
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── package.json
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Router & shell
    ├── styles.css              # All global styles & design tokens
    ├── data/
    │   └── content.js         ← EDIT ALL TEXT CONTENT HERE
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   └── PageHero.jsx
    └── pages/
        ├── HomePage.jsx
        ├── GroupPage.jsx
        ├── ResearchPage.jsx
        ├── GrantsPage.jsx
        ├── TalksPage.jsx
        ├── ContactPage.jsx
        └── MiscPage.jsx
```

---

## How to Update Content

**All site text, names, links, and data live in one file:**

```
src/data/content.js
```

### Adding a photo (PI / member / group)
1. Place your image in `src/assets/` (e.g. `src/assets/aditya.jpg`)
2. In `content.js`, import it at the top:
   ```js
   import adityaPhoto from '../assets/aditya.jpg'
   ```
3. Set the `photo` field:
   ```js
   PI = { ..., photo: adityaPhoto, ... }
   ```

### Adding a publication
In `content.js`, add to `RESEARCH.publications`:
```js
{
  title: "Paper Title",
  authors: "A. Nema, ...",
  venue: "IEEE ISIT 2025",
  year: 2025,
  link: "https://arxiv.org/...",
  type: "Conference" // or "Journal" / "Preprint"
}
```
Then set `RESEARCH.comingSoon = false` and update `ResearchPage.jsx` to render them.

### Adding a talk
In `content.js`, add to `TALKS.list`:
```js
{
  id: 1,
  title: "Talk Title",
  event: "Conference / Workshop Name",
  location: "City, Country",
  date: "June 2025",
  type: "Invited",       // "Invited" | "Contributed" | "Seminar"
  slides: "https://...", // optional
  video: "https://..."   // optional
}
```
Then set `TALKS.comingSoon = false`.

### Adding a group member
In `content.js`, add to the appropriate `GROUP.members` array:
```js
{
  name: "Full Name",
  salutation: "Mr." | "Ms." | "Dr." | "",
  role: "PhD Student",
  photo: null, // or imported image
  interests: "Optional research interests"
}
```
Available categories: `pi`, `btech`, `jrf` — add more categories as needed and update `GroupPage.jsx`.

### Enabling the Misc page
1. Set `MISC.comingSoon = false` in `content.js`
2. Add entries to `MISC.content`:
```js
{ title: "Section Title", body: "Content text..." }
```

---

## Design Tokens (styles.css)

All colours, fonts, and spacing live as CSS custom properties at the top of `styles.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--navy` | `#0b1524` | Background, navbar |
| `--gold` | `#c8922a` | Accent, headings |
| `--slate` | `#8da4bf` | Muted text |
| `--cream` | `#f5f2eb` | Page background |
| `--font-mono` | IBM Plex Mono | Display / headings |
| `--font-sans` | IBM Plex Sans | Body text |
| `--font-serif` | Crimson Pro | Italic accents |

---

## Tech Stack

- **React 18** (no external router — lightweight hash-based routing built in)
- **Vite** for development and build
- **IBM Plex Mono / Sans / Crimson Pro** via Google Fonts
- Pure CSS (no CSS framework)
