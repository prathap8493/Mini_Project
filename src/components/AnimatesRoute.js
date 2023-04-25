import React from 'react'
import {BrowserRouter as Router, Route,Routes,useLocation} from "react-router-dom";
import Calculator from "./Tools/Calculator/Calculator";
import CurrencyExchage from "./Tools/CurrencyExchanger/CurrencyExchage";
import ImgToText from "./Tools/ImgToText/components/ImgToText";
import TexttoSpeech from "./Tools/TextToSpeech/TexttoSpeech";
import {AnimatePresence} from 'framer-motion'
import TextEditor from './Tools/TextEditor/TextEditor'
import PasswordGenerator from './Tools/PasswordGenerator/PasswordGenerator';
import BoxShadow from './Tools/BoxShadow/BoxShadow';
import JsonFormatter from './Tools/JsonFormatter/JsonFormatter';
import UrlShortner from './Tools/UrlShortner/UrlShortner';
import TodoList from './Tools/TodoList/TodoList';
import Spendee from './Tools/Spendee/Spendee';

const AnimatesRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location = {location} key={location.pathname}>
        <Route exact path="/" element={<ImgToText />} />
        <Route exact path="/texttospeach" element={<TexttoSpeech />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/currencyexchange" element={<CurrencyExchage />} />
        <Route exact path="/texteditor" element={<TextEditor /> }   /> 
        <Route exact path="/passwordgenerater" element={<PasswordGenerator /> }   /> 
        <Route exact path="/boxshadow" element={<BoxShadow /> }   /> 
        <Route exact path="/jsonformatter" element={<JsonFormatter /> }   />
        <Route exact path="/urlshortner" element={<UrlShortner /> }   />
        <Route exact path="/notes" element={<TodoList /> }   />
        <Route exact path='/spendee' element={<Spendee />} />
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatesRoute
