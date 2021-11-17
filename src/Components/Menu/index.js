import React, { Component } from 'react';
import Button from "../Button"
import icon1 from './icon1.png'
import icon2 from './icon2.png'

export default class Menu extends Component {
    render() {
        return (
            <>
                <nav>
            <ul>
                <li classname="Cadastro">
                    <a href="/">
                        <img  src={icon1}/>
                        <Button name="Cadastro"/>
                    </a>
                </li>
                <li classname="List">
                    <a href="/List">
                        <img  src={icon2}/>
                        <Button name="Lista de Cadastrados"/>
                    </a>
                </li>
            </ul>
        </nav>
            </>
        )
    }
}