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
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/64949294-241b-468c-acdc-f4b6d22a252f" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Pegasus Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/45d662ef-4f35-4272-a283-936d6f00b132" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Dragon Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/e5b0d6d1-f8e7-4bb3-b812-04b9add99c9e" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Cygnus Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/6c3455a4-a51b-4502-93e3-f562a0d96cf5" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Andromeda Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/df061d3f-0a8c-4c61-bcb9-a7d3633ce085" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
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
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/5e0790a3-98f3-4c14-a1d5-ca45e9ee609f" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Pegasus Seiya
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/e0796c8e-228e-47c6-8296-3b52130d804a" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Dragon Shiryu
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/09eba5c7-4a83-47c1-ba6a-b45c79a2884c" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Cygnus Hyoga
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/33e3db64-0078-4dc1-b600-e9be8fae03db" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Andromeda Shun
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/cc22e0ed-b9b6-4316-9d21-fc19d1522121" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
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
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/bd9adc6d-8275-42fa-a512-5346bac583f0" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Aries Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/21b9c467-90cc-4e6e-a7e5-438a8f217665" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Taurus Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/304bc87c-7e11-43de-929a-0d4832305d1b" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Gemini Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/4a8d3917-dc2c-4bc5-9c62-c7b7cd8723aa" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Leo Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/7d8a5fcf-166d-4f8a-bc3d-4ec3d277d7c2" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Cancer Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/1411ed14-c897-47a5-b97b-c4c70f6e518a" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Capricorn Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/dfc0fd89-c8c0-4a15-96f6-920423bb103c" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Sagittarius Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/830d72ec-b97f-4ffa-a6b9-ba5a930ab8f9" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Scorpio Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/5e76f499-8eab-43a2-9a3a-1c53dcc4e5db" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Libra Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/ada4d48e-fe4b-489d-a134-547d578ab564" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Virgo Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/824f3d15-9b97-4c2c-b08a-e243ef0c97dc" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
                      Acuarius Armor
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/94846abb-dd0a-4fc3-9f98-a92bff2bda56" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
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
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/d66aabec-8c5c-4336-922d-3978cc3fe384" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Aries Mu
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/6bedd3a9-9b6b-45dd-8c94-f2036719b913" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Taurus Aldebaran
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/c0c0842d-3e02-41ad-873e-0918b71a8d58" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Gemini Saga
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/b592f640-12ba-4bca-b565-9b05d7311686" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
                      Leo Aiolia
                    </NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem className='mdbdropdownmenu'>
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/45c5a181-c6f4-4205-9941-9a03b2bf20f8" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-top" : "nav-link link-light rounded-top")}>
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
                    <NavLink to="/react-single-page-application/build/saint_seiya_characters/7beff614-a2ef-4164-8628-fa36c3a1f38e" className={({isActive})=> (isActive ? "link-activated nav-link link-light rounded-bottom" : "nav-link link-light rounded-bottom")}>
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
