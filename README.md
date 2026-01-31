# Movie Discovery Application

This project is a modern web application designed for browsing and searching through a vast database of movies. It utilizes high-performance frontend technologies to provide a smooth user experience, featuring real-time search and dynamic data fetching.
[Movie-Hub | Live Demo](https://erftube-moviehub.netlify.app/)

![Example Image](preview.png)

## Core Purpose

The application serves as a discovery tool where users can see the most popular movies currently trending or search for specific titles. It retrieves all movie metadata, including posters, ratings, and release dates, directly from the TMDB (The Movie Database) API.

## Technical Specifications

The project is built using a modern stack focused on speed and developer efficiency:

- React 19: Uses the latest version of React for UI management and state handling.
- Tailwind CSS 4.x: Employs the latest standard of utility-first CSS for styling, including custom text gradients and responsive layouts.
- Vite: Used as the build tool and development server for rapid hot-module replacement.
- TMDB API: Integrated as the primary data source for movie information.
- Debounced Search: Implements custom hooks to prevent excessive API calls by waiting for a user to stop typing before executing a search.

## Key Features

- Discover View: On initial load, the app displays a list of currently popular movies sorted by their popularity score.
- Real-time Search: Users can type into the search bar to find specific films. The search logic includes a 500ms debounce to optimize performance.
- Dynamic Movie Cards: Each card presents a high-resolution poster, the film's title, a star rating, the original language, and the release year.
- Loading States: Includes an animated SVG spinner to provide visual feedback while data is being fetched from the server.
- Error Management: Built-in error handling to inform the user if the API is unreachable or if no results are found.
- Fully Responsive: Utilizing Tailwind's grid system, the layout adjusts from a single column on mobile to up to four columns on large desktop screens.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies:
   npm install

3. Environment Setup:
   The application requires access to the TMDB API. You should set up your API keys in a .env file to keep them secure:
   VITE_TMDB_API_KEY=your_api_key_here
   VITE_TMDB_TOKEN=your_bearer_token_here

4. Run the development server:
   npm run dev

## Styles and UI

The application uses a "dark mode" aesthetic by default, with a primary background color of #030014. It features a custom hero pattern and uses the DM Sans font family for high readability. Technical UI details like image masking and glassmorphism in the search bar are handled through Tailwind utility classes.

## Development Constraints

The current production build uses minified logic for hooks and component rendering. For further development, refer to the source components located in the /src directory (typically divided into Search, MovieCard, and Loading components).

## License

This project is open-source and intended for educational and portfolio use.
