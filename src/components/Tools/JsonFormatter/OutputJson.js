import React from "react";
import JSONPretty from "react-json-pretty";
import './jsonFormatter.css'


const OutputJson = ({jsonData}) => {
  return (
    <>
    <div>
    <div className="jsonOutput">
    <JSONPretty  json={jsonData} ></JSONPretty>
    </div>
    </div>
    </>
  )
}

export default OutputJson