# Himal Bhanchha — Restaurant Menu & Table Ordering

A responsive restaurant menu where customers browse dishes, build an order and see their full bill (with service charge and VAT) before sending it to the kitchen. Built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**.

## Features

- **REST API integration** — the menu is served from a Next.js API route (`GET /api/menu`) and fetched on the client with query parameters for category, search text and veg-only filtering.
- **Loading, empty and error states** — debounced search, request cancellation with `AbortController`, and a retry button if the request fails.
- **Cart with live bill** — add/remove items, quantity controls, 10% service charge and 13% VAT calculated automatically (Nepal restaurant billing).
- **Responsive layout** — order panel beside the menu on desktop; floating order bar and bottom sheet on mobile.
- **Accessible UI** — keyboard focus styles, ARIA labels on quantity buttons, `aria-pressed` category filters and reduced-motion support.
- Veg / non-veg markers and spice-level indicators for each dish.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Data | Next.js Route Handler (REST JSON API) |

## Project structure

```
app/
  api/menu/route.ts   # REST endpoint: filters menu by category, search and veg
  layout.tsx          # Fonts and page metadata
  page.tsx            # Menu page: filters, list, cart, mobile bottom sheet
components/
  MenuCard.tsx        # One dish with add / quantity controls
  Cart.tsx            # Order summary and bill
  Badges.tsx          # Veg marker and spice level
lib/
  useMenu.ts          # Custom hook that fetches the menu from the API
  menu-data.ts        # Menu items
  format.ts           # Currency formatting and bill calculation
  types.ts            # Shared TypeScript types
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Try the API directly at http://localhost:3000/api/menu?category=Momo&veg=true.

## Possible next steps

- Connect to a real backend and database for menu items and orders
- Order status tracking for the kitchen
- Nepali language toggle

## Author

Rabi Prasad Devkota — rabiprasaddevkota@gmail.com
