import React, {useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import {  Link } from "react-router-dom";
import { getListkontak } from "../actions/kontakaction";

// import arah from '../Komponen/image/arrow.png'
// +


export const BukuKontak = () => {

    const dispatch = useDispatch()
    const {getListKontakResult,getListKontakLoading,getListKontakError  } =useSelector((state)=>state.kontak)

    useEffect(()=>{

        dispatch(getListkontak())

    },[dispatch])



    return(
        <div>
            <Link to="/">
            <Button href="#Home" className="masuk"  style={{ width: '200px',height:'60px', backgroundImage: 'linear-gradient(to left,#F12404,#F12404)',marginTop:'2px',marginBottom:'100px',marginLeft:'900px', borderRadius: '25px' , border:'none',fontSize:'35px' }}>Exit {'   '} {'   '}</Button>{' '}
            </Link>
        <div className="row mt-5 mb-5 " >
            
            {getListKontakResult ? (
                getListKontakResult.map((datanya)=>{
                    return(
                        <Card key={datanya.id} className='cardnya mb-5' style={{    height :'300px' ,width: '250px', backgroundImage: 'linear-gradient(to left,#10B8B3,#F18504)', margin: 'auto', borderRadius: '15px' }}>
                        <Card.Img variant="top" src={datanya.foto} className="fotokontak" />
                            <Card.Body>
                                <Card.Title className="namanya">{datanya.nama}</Card.Title>
                                <Card.Text className="nomornya"> 
                                {datanya.nomor}
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>

                    )
                })
            ):getListKontakLoading ? (
                <p>Loading..</p>
            ):(
                <p>{getListKontakError ? getListKontakError : "Data tidak ditemukan"}</p>
            )}
    
        </div>
        </div>
    )
}