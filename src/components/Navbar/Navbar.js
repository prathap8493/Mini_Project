import React from 'react'
import {Link} from 'react-router-dom';
import logo from './logo.png';
import mainlogo from './mainlogo.png';

const Navbar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-dark ">
            <div class="container-fluid">
                <a class="navbar-brand text-white" href="#"><img src={logo}  width='50px'/><img src={mainlogo}  width='50px' />   </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item "><Link className="nav-link text-white" to='/'>Image to speech</Link></li>
                <li class="nav-item "><Link className="nav-link text-white" to='/texttospeach'>Text to speech</Link></li>
                <li class="nav-item "><Link className="nav-link text-white" to='/texteditor'>Text Editor</Link></li>
                <li class="nav-item "><Link className="nav-link text-white" to='/calculator'>Calculator</Link></li>
                <li class="nav-item "><Link className="nav-link text-white" to='/currencyexchange'>CurrencyExchage</Link></li>
                <li class="nav-item "><Link className="nav-link text-white" to='/passwordgenerater'>PasswordGenerator</Link></li>
                <li class="nav-item "><Link className="nav-link text-white" to='/boxshadow'>Box Shadow</Link></li>
                <li class="nav-item "><Link className="nav-link text-white" to='/jsonformatter'>JSON Formatter</Link></li>
                <li class="nav-item "><Link className="nav-link text-white" to='/urlshortner'>URL Shortner</Link></li>
                <li class="nav-item "><Link className="nav-link text-white" to='/notes'>I Notes</Link></li>
                <li class="nav-item "><Link className="nav-link text-white" to='/spendee'>Spendee</Link></li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar