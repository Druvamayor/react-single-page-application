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
          <MDBIcon icon='bars' fas />
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
