# Fullstack Prints React App

## Overview
This is a React application built with Vite for a lab assignment. It's a product gallery application (Fullstack Prints) that displays images from an Unsplash-like API with pagination, routing, and search/filter functionality.

## Project Structure
- **Frontend**: React 18 with React Router for client-side routing
- **Build Tool**: Vite (modern, fast development server)
- **Styling**: Tachyons CSS framework (minimal, utility-first)
- **Data**: Local JSON file with product data (`src/data/full-products.json`)

## Key Technologies
- React 18.2.0
- React Router DOM 6.7.0
- Vite 4.5.5
- Tachyons 4.12.0
- Vitest (for testing)

## Architecture
- **Components**: Modular React components in `src/components/`
  - `Header.jsx`: Navigation header
  - `Card.jsx`: Individual product card with routing
  - `CardList.jsx`: Product list with pagination
  - `SingleView.jsx`: Detailed product view
  - `Search.jsx`: Search/filter component
  - `Button.jsx`: Reusable button component
- **Routing**: Client-side routing with React Router
  - `/` - Product list view
  - `/product/:id` - Single product detail view
- **State Management**: React hooks (useState, useEffect) for local state

## Replit Configuration
- **Dev Server**: Runs on `0.0.0.0:5000` (configured for Replit's proxy environment)
- **HMR**: Configured for WebSocket over WSS on port 443
- **Workflow**: "React Dev Server" runs `npm run dev`
- **Deployment**: Static site deployment from `dist` folder

## Development
- Run `npm run dev` to start the development server
- Run `npm run build` to build for production
- Run `npm test` to run tests

## Recent Changes (December 1, 2025)
- Configured Vite for Replit environment (0.0.0.0:5000, HMR over WSS)
- Updated package.json scripts to use standard Vite commands
- Set up "React Dev Server" workflow
- Configured static deployment settings
- Installed all npm dependencies

## Lab Assignment Features
The app includes:
1. Product gallery with image cards
2. Pagination (10 items per page)
3. Single product detail view
4. Search/filter by tags functionality
5. React Router for client-side navigation

## User Preferences
None documented yet.
