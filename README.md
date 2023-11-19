# Terribly Tiny Tales Assignment

## Overview

This project is a frontend clone of a prototype provided by Terribly Tiny Tales in the form of a screenshot. The implementation is done using React.js.

## Table of Contents

- [Components](#components)
- [Folder Structure](#folder-structure)
- [Libraries and Plugins](#libraries-and-plugins)
- [Responsive Design](#responsive-design)
- [How to Run](#how-to-run)
- [Hosted Link](#hosted-link)

## Components

1. **Profile Component**

   The main root file where all components, except Navbar, are added. Linked to `App.js`.

2. **Post Count Component**

   A static/dummy component for displaying the hardcoded total post count.

3. **Post Components (Post1, Post2, Post3)**

   Three components displaying posts as per the provided screenshot, utilizing HTML tags.

4. **Dp Component**

   Displays the profile's display picture using `<Div>`, `<img>`, and includes the `<Connect/>` component for proper alignment.

5. **Details Component**

   Shows profile details such as Instagram handle, user position, likes, etc.

6. **Connections Component**

   Hardcoded component displaying followers and following numbers using `<div>` and `<i>` tags.

7. **Banner Component**

   Displays the banner image using the image tag with the image located in the `Assets` folder.

8. **Header Components (Navbar)**

   Cloned prototype for the header using `<div>` and `<button>` tags.

## Folder Structure

- `src/`
  - `components/`
    - `Body/`
      - `Banner.jsx` and `Banner.css`
      - `Connections.jsx` and `Connections.css`
      - `Details.jsx` and `Details.css`
      - `Post1.jsx` and `Post1.css`
      - `Post2.jsx` and `Post2.css`
      - `Post3.jsx` and `Post3.css`
      - `PostCount.jsx` and `PostCount.css`
      - `Profile.jsx` and `Profile.css`
    - `Header/`
      - `Navbar.jsx` and `Navbar.css`
    - `Assets/`
      - `ProfilePicture.jpg`
      - `BannerImage.jpg`

## Libraries and Plugins

- React
- Flaticon Uicons (for icons)
- Fortawesome (for fonts)

## Responsive Design

Media queries have been implemented to ensure optimal user experience across various devices. The layout and styling adapt to different screen sizes, optimizing navigation bars and adjusting element sizes and placements.

## How to Run

1. Navigate to the project folder: `cd assignment`
2. Run the application: `npm start`

## Hosted Link

The project is hosted on Netlify. You can access it [here](https://assignment-terribly.netlify.app/).
