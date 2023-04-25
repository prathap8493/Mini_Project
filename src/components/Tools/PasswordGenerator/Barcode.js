import React, { useEffect, useRef } from 'react'
const bwipjs = require('bwip-js')

const generateQrCode = (value) =>
  bwipjs.toCanvas('#qr-code', {
    bcid: 'qrcode',
    text: JSON.stringify(value),
    scale: 3,
    backgroundcolor: 'ffffff'
  })

export const Barcode = ({ qrData }) => {
  let canvasRef = useRef()

  useEffect(() => {
    generateQrCode(qrData)
  }, [qrData])
  return <canvas data-cy="wifi-setup-qr-canvas" id="qr-code" className="canvas" ref={canvasRef} />
}