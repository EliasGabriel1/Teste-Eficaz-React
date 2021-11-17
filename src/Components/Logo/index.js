import React from 'react';
import imagem from './logo.png'

export default function Cadastro() {
    return (
      <>
        <div className="logo">
            <figure>
                <img width="170" src={imagem} alt="logo" load="lazy"/>
                </figure>
        </div>
      </>
    );
  }
  