import React from "react";
import Button from 'react-bootstrap/Button';

import arah from '../Komponen/image/arrow.png'
import {  Link } from "react-router-dom";

export const Home = () => {
    return(
        <div>
            <Link to="/BukuKontak">
            <Button href="#BukuKontak" className="masuk"  style={{ width: '350px',height:'80px', backgroundImage: 'linear-gradient(to left,#9410B8,#7310B8,#E341A6)',marginTop:'180px',marginLeft:'700px', borderRadius: '25px' , border:'none',fontSize:'35px' }}>Ayo Masuk {'   '} <img  src={arah} alt="logo" width="60" height="60" marginLeft="60px" className="d-inline-block align-top" />{'   '}</Button>{' '}
            </Link>
        </div>
    )
}