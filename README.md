# TravelTrucks

Frontend for a camper-rental web app built with **Vite + React + Redux Toolkit + React Router + Axios**. CSS Modules for styling, `react-hot-toast` for notifications, favourites are persisted to `localStorage` so they survive a page reload.

- **Live demo:** <https://goit-cs-hw-web.vercel.app>
- **Repository:** <https://github.com/Zadorozhnyi/goit-cs-hw-web>
- **Mock API:** <https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers>

## Features

- **Home** — hero banner with the **View Now** call-to-action.
- **Catalog** — list of campers with sidebar filters (location, vehicle type, equipment), pagination via **Load more**, add/remove favourites (persisted in `localStorage`), and **Show more** that opens the camper details in a new browser tab.
- **Camper details** — photo gallery, rating, location, price, description; nested tabs for **Features** (with vehicle details) and **Reviews**; booking form with validation and a success toast.
- Pre-fetch reset: switching filters wipes the previous results before the new request resolves.
- Loader on every async request and graceful error toasts.

## Tech stack

- Vite, React 19, React Router v7 (lazy pages + nested routes)
- Redux Toolkit (favourites stored in `localStorage` directly from the slice)
- Axios
- CSS Modules + global CSS variables
- react-hot-toast, react-datepicker, react-icons, clsx

## Project structure

```
src/
├── components/      # Header, Layout, Loader, CamperCard, Filters, Gallery, BookingForm, ...
├── pages/           # HomePage, CatalogPage, CamperDetailsPage (+ Features/Reviews subroutes), NotFoundPage
├── redux/           # store + campers/filters/favorites slices
├── services/api.js  # Axios instance + endpoints
├── utils/           # equipment metadata, price formatter
└── styles/          # global.css + variables.css
```

## Getting started

Requirements: **Node.js 20+** and **npm 10+**.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into ./dist
npm run preview  # preview the production build locally
npm run lint     # ESLint
```

## Routing

| Path                | Page                                |
| ------------------- | ----------------------------------- |
| `/`                 | Home (hero + CTA)                   |
| `/catalog`          | Catalog with filters + Load more    |
| `/catalog/:id`      | Camper details (redirects to features) |
| `/catalog/:id/features` | Features + booking form          |
| `/catalog/:id/reviews`  | Reviews + booking form           |

## Deployment

The repo includes:

- `vercel.json` — SPA rewrites for **Vercel**.
- `public/_redirects` — SPA fallback for **Netlify**.

### Deploy to Vercel

1. Push the repo to GitHub.
2. Open <https://vercel.com/new>, import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output `dist`.
4. Click **Deploy**.

## License

For educational purposes (GoIT Career Strategies homework).
