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
        <MDBCol size='12' className='px-0'>
            <BrowserRouter>
            <Navbar />
            <div className='content text-center'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Navigate to = "/" />} />
              <Route path="/saint_seiya_characters/:characters" element={<Model />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
            </div>
            </BrowserRouter>
        </MDBCol>
      </MDBRow>

    );
}

