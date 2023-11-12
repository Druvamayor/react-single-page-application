
```markdown
# React Single Page Application with Routes - Web Page About Saint Seiya Characters

## Prerequisites

1. **Node.js**: Ensure Node.js is installed on your machine. Download it [here](https://nodejs.org/).

2. **Visual Studio Code**: Download and install Visual Studio Code from [here](https://code.visualstudio.com/).

## Setting Up the Project

### Step 1: Install create-react-app

Open a terminal on your computer or Visual Code editor and run:

```bash
npm install -g create-react-app
```

### Step 2: Create React App

Create a folder called "react-single-page-application" or any name and import it in Visual Code editor, 
navigate to that folder and run:

```bash
npx create-react-app react-single-page-application .
```

### Step 3: Navigate to the Project Folder on Visual Code editor terminal and install the CSS framework MDB Bootstrap for React:

```bash
cd react-single-page-application
```

```bash
npm i mdb-react-ui-kit
```
```bash
npm i @fortawesome/fontawesome-free
```

Add the following lines in your index.js file before the App.js file import:

```plaintext
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
```

Add the following line in public/index.html file inside head section:

```plaintext
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
```

Set font family in globally css file for example src/index.css inside src folder as in the example:

```plaintext
body {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
```

### Step 4: Create Project Structure

```plaintext
src
|-- Navbar.js
|-- saint_seiya_characters
|   |-- assets
|       |-- [images in .webp format o any image format]
|   |-- Home.js
|   |-- Model.js
|   |-- Error404.js
|   |-- App.js
|   |-- App.css
```

### Step 5: Set Up Routes

```bash
npm install react-router-dom
```

In `src/App.js`, import the following components and wrap `App` component with 
`<BrowserRouter></BrowserRouter>` tag for create the SPA routes:

```jsx
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Home from './saint_seiya_characters/Home';
import Model from './saint_seiya_characters/Model';
import Error404 from "./saint_seiya_characters/Error404";
import Navbar from './Navbar';

export default function App() {
  return (
      <MDBRow>
        <MDBCol size='12' className='container_2 px-0 bg_gradient'>
            <BrowserRouter>
            <Navbar />
            <div className='content text-center'>
            <Routes>
              <Route path="/react-single-page-application/build" element={<Home />} />
              <Route path="/Home" element={<Navigate to = "/react-single-page-application/build" />} />
              <Route path="/react-single-page-application/build/saint_seiya_characters/:characters" element={<Model />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
            </div>
            </BrowserRouter>
        </MDBCol>
      </MDBRow>

    );
}

```

### Step 6: Create Navbar Component

In `src/Navbar.js`, create a simple navigation bar or do it with MDB Bootstrap for React and customize it.
I created a complex navigation bar with MDB Bootstrap, but you can do it simple without so many items or images.
Import the needed components as follow:

```jsx
import { NavLink} from 'react-router-dom'
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' className='mdbnavbar mb-6'>
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <NavLink to="/react-single-page-application/build" className="link-light">Saint Seiya Characters</NavLink>
          </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon className='mb-3 text-light' icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
                <NavLink active aria-current='page' to="/react-single-page-application/build" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                  Home
                </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link link-light' role='button'>
                  Bronze Saints Armors
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Pegasus_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Pegasus Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Dragon_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Dragon Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Cygnus_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Cygnus Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Andromeda_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Andromeda Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Phoenix_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Phoenix Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Athenea_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Athenea Armor
                    </NavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link link-light' role='button'>
                  Bronze Saints Characters
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Pegasus_Seiya" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Pegasus Seiya
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Dragon_Shiryu" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Dragon Shiryu
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Cygnus_Hyoga" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Cygnus Hyoga
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Andromeda_Shun" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Andromeda Shun
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Phoenix_Ikki" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Phoenix Ikki
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Athenea_Saori_Kiddo" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Athenea Saori Kiddo
                    </NavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link link-light' role='button'>
                  Gold Saints Armors
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Aries_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Aries Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Taurus_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Taurus Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Gemini_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Gemini Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Leo_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Leo Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Cancer_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Cancer Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Capricorn_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Capricorn Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Sagittarius_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Sagittarius Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Scorpio_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Scorpio Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Libra_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Libra Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Virgo_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Virgo Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Acuarius_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Acuarius Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Pisces_Armor" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Pisces Armor
                    </NavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link link-light' role='button'>
                  Gold Saints Characters
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Aries_Mu" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Aries Mu
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Taurus_Aldebaran" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Taurus Aldebaran
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Gemini_Saga" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Gemini Saga
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Leo_Aiolia" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Leo Aiolia
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Cancer_Deathmask" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Cancer Deathmask
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Capricorn_Shura" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Capricorn Shura
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Sagittarius_Aiolos" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Sagittarius Aiolos
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Scorpio_Milo" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Scorpio Milo
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Libra_Dohko" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Libra Dohko
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Virgo_Shaka" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Virgo Shaka
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Aquarius_Camus" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Acuarius Camus
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/Pisces_Aphrodite" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Pisces Aphrodite
                    </NavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

```

### Step 7: Create Home Component

In `src/saint_seiya_characters/home.js`, create a functional component called Home. The main goal of this component is to render a grid of Saint Seiya characters, where each character is displayed as an image. The component uses the Link component from the react-router-dom library to create links to individual pages for each character.

```jsx
// Importing the Link component from react-router-dom
import { Link } from "react-router-dom"

// Functional component named Home
export default function Home() {
    // List of characters
    const list = ["Phoenix_Ikki", "Andromeda_Shun", "Cygnus_Hyoga", "Dragon_Shiryu", "Pegasus_Seiya",
        "Athenea_Saori_Kiddo", "Aries_Mu", "Taurus_Aldebaran", "Gemini_Saga", "Leo_Aiolia", "Cancer_Deathmask",
        "Scorpio_Milo", "Virgo_Shaka", "Capricorn_Shura", "Libra_Dohko", "Pisces_Aphrodite",
        "Pegasus_Armor", "Dragon_Armor", "Cygnus_Armor", "Andromeda_Armor", "Phoenix_Armor", "Athenea_Armor",
        "Aries_Armor", "Taurus_Armor", "Gemini_Armor", "Cancer_Armor", "Leo_Armor",
        "Capricorn_Armor", "Sagittarius_Armor", "Libra_Armor", "Virgo_Armor", "Acuarius_Armor", "Pisces_Armor"]

    // Rendering the component
    return (
        // Container div with flexbox properties
        <div className="d-flex flex-wrap justify-content-center align-items-center w-100 characters_grid">
            {
                // Mapping over the list of characters and creating Link components for each
                list.map(character =>
                    <Link key={character} to={`/react-single-page-application/build/saint_seiya_characters/${character}`}>
                        {/* Image element for each character with dynamic source */}
                        <img
                            className="w-50 mb-5 border border-4 rounded-5 border-danger bg-whitesmoke"
                            alt={character}
                            src={`https://raw.githubusercontent.com/Druvamayor/react-single-page-application/main/src/saint_seiya_characters/assets/${character}.webp`}
                        />
                    </Link>)
            }
        </div>
    )
}

```

### Step 8: Create Model Component

In `src/saint_seiya_characters/model.js`, write the following code, this with the purpose to display a specific character from the Saint Seiya series based on the route parameter passed through the URL. It uses the useParams hook from the react-router-dom library to retrieve the parameter, replaces underscores in the character's name with spaces, and then renders an image and the cleaned character name.

Here's the commented code:

```jsx
// Importing the useParams hook from react-router-dom
import { useParams } from "react-router-dom";

// Functional component named Model
export default function Model() {
  // Extracting the 'characters' parameter from the URL
  const { characters } = useParams();

  // In my case I need replace underscores with spaces in the character name (This code only apply if the name has more than one word separated with some typographical symbol and it should be removed and replaced with spaces)
  const cleanedCharacters = characters.replace(/_/g, ' ');

  // Rendering the component
  return (
    // Container div with margin
    <div className='m-4'>
      {/* Image element for the character with dynamic source */}
      <img
        className="img-fluid mb-4 border border-5 rounded-6 border-danger bg-whitesmoke"
        src={`https://raw.githubusercontent.com/Druvamayor/react-single-page-application/main/src/saint_seiya_characters/assets/${characters}.webp`}
        alt={characters}
      />
      {/* Caption for the character name with specified styles */}
      <figcaption id="Namecharacter" className="fs-3 fw-bold text-light">
        {cleanedCharacters}
      </figcaption>
    </div>
  );
}

```
This component is designed to be used in conjunction with React Router, and it dynamically fetches the character name from the URL, transforms it (by replacing underscores with spaces), and then displays the corresponding character image along with the cleaned character name.

### Step 9: Create Error404 Component

In `src/saint_seiya_characters/Error404.js`, handle 404 errors:

```jsx
import React from 'react'

export default function Error_404() {
  return (
    <div className='text-white mt-4 fs-2'>Error 404, page not found.</div>
  )
}

```

### Step 10: Integrate Components into App.js

In `src/App.js`, thie following code sets up a basic React application with routing using React Router. It includes a navigation bar, home page, character details page, and a 404 error page. The layout is structured using the MDBRow and MDBCol components from mdb-react-ui-kit. The routing is managed using the BrowserRouter component, and different pages are rendered based on the URL path using the Routes and Route components.

```jsx
// Importing components and styles from external libraries and files
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './saint_seiya_characters/Home';
import Model from './saint_seiya_characters/Model';
import Error404 from "./saint_seiya_characters/Error404";
import Navbar from './Navbar';

// Functional component named App
export default function App() {
  // Rendering the component
  return (
    // Main row container
    <MDBRow>
      {/* Column container with a gradient background */}
      <MDBCol size='12' className='container_2 px-0 bg_gradient'>
        {/* Setting up the BrowserRouter for routing */}
        <BrowserRouter>
          {/* Including the Navbar component */}
          <Navbar />
          {/* Content container with text center alignment */}
          <div className='content text-center'>
            {/* Routes for different pages */}
            <Routes>
              {/* Route for the home page */}
              <Route path="/react-single-page-application/build" element={<Home />} />
              {/* Route for redirecting to the home page */}
              <Route path="/Home" element={<Navigate to="/react-single-page-application/build" />} />
              {/* Route for displaying character details */}
              <Route path="/react-single-page-application/build/saint_seiya_characters/:characters" element={<Model />} />
              {/* Route for handling 404 errors */}
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        </BrowserRouter>
      </MDBCol>
    </MDBRow>
  );
}

```

## Running the Application

In the terminal, run:

```bash
npm start
```

Visit `http://localhost:3000` in your browser to see your Single Page Application!

Feel free to customize styles and functionalities based on your project requirements.
```
