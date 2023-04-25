import React from 'react';
import './currency.css'


const Dropdown = (props) => {
  

   
  return (
   <>
    <select className='form_field select registerdropdown' value={props.value} onChange={(e)=>props.setCurrency(e.target.value)} >
            <option className='text-center' value="none" selected  hidden>Select currency </option>
            <i class="toggle icon icon-arrow-down"></i>
    <i class="toggle icon icon-arrow-up"></i>
            <option className='text-center option title' value="AFN">AFN </option>
            <option className='text-center' value="AED">AED</option>
            <option className='text-center' value="ALL">ALL</option>
            <option className='text-center' value="AMD">AMD </option>
            <option className='text-center' value="AND">ANG</option>
            <option className='text-center' value="AOA">AOA </option>
            <option className='text-center' value="ARS">ARS </option>
            <option className='text-center' value="AUD">AUD  </option>
            <option className='text-center' value="AWG">AWG </option>
            <option className='text-center' value="AZN">AZN </option>
            <option className='text-center' value="BAM">BAM </option>
            <option className='text-center' value="BBD">BBD </option>
            <option className='text-center' value="BDT">BDT </option>
            <option className='text-center' value="BGN">BGN </option>
            <option className='text-center' value="BHD">BHD </option>
            <option className='text-center' value="BIF">BIF </option>
            <option className='text-center' value="BMD">BMD </option>
            <option className='text-center' value="BND">BND </option>
            <option className='text-center' value="BOB">BOB </option>
            <option className='text-center' value="BRL">BRL </option>
            <option className='text-center' value="BSD">BSD </option>
            <option className='text-center' value="BTC">BTC </option>
            <option className='text-center' value="BTN">BTN </option>
            <option className='text-center' value="BWP">BWP </option>
            <option className='text-center' value="BYN">BYN </option>
            <option className='text-center' value="BYR">BYR </option>
            <option className='text-center' value="BZD">BZD </option>
            <option className='text-center' value="CAD">CAD</option>
            <option className='text-center' value="CDF">CDF </option>
            <option className='text-center' value="CHF">CHF </option>
            <option className='text-center' value="CLF">CLF </option>
            <option className='text-center' value="CLP">CLP </option>
            <option className='text-center' value="CNY">CNY </option>
            <option className='text-center' value="COP">COP </option>
            <option className='text-center' value="CRC">CRC </option>
            <option className='text-center' value="CUC">CUC </option>
            <option className='text-center' value="CUP">CUP </option>
            <option className='text-center' value="CVE">CVE </option>
            <option className='text-center' value="CZK">CZK </option>
            <option className='text-center' value="DJF">DJF </option>
            <option className='text-center' value="DKK">DKK</option>
            <option className='text-center' value="DOP">DOP</option>
            <option className='text-center' value="DZD">DZD </option>
            <option className='text-center' value="EGP">EGP</option>
            <option className='text-center' value="ERN">ERN </option>
            <option className='text-center' value="ETB">ETB</option>
            <option className='text-center' value="EUR">EUR</option>
            <option className='text-center' value="FJD">FJD</option>
            <option className='text-center' value="FKP">FKP</option>
            <option className='text-center' value="GBP">GBP</option>
            <option className='text-center' value="GEL">GEL</option>
            <option className='text-center' value="GGP">GGP</option>
            <option className='text-center' value="GHS">GHS</option>
            <option className='text-center' value="GIP">GIP</option>
            <option className='text-center' value="GMD">GMD</option>
            <option className='text-center' value="GNF">GNF</option>
            <option className='text-center' value="GTQ">GTQ </option>
            <option className='text-center' value="GYD">GYD</option>
            <option className='text-center' value="HKD">HKD</option>
            <option className='text-center' value="HNL">HNL </option>
            <option className='text-center' value="HRK">HRK</option>
            <option className='text-center' value="HTG">HTG </option>
            <option className='text-center' value="HUF">HUF </option>
            <option className='text-center' value="IDR">IDR  </option>
            <option className='text-center' value="ILS">ILS </option>
            <option className='text-center' value="IMP">IMP </option>
            <option className='text-center' value="INR">INR </option>
            <option className='text-center' value="IQD">IQD </option>
            <option className='text-center' value="IRR">IRR </option>
            <option className='text-center' value="ISK">ISK </option>
            <option className='text-center' value="JEP">JEP </option>
            <option className='text-center' value="JMD">JMD </option>
            <option className='text-center' value="JOD">JOD </option>
            <option className='text-center' value="JPY">JPY </option>
            <option className='text-center' value="KES">KES </option>
            <option className='text-center' value="KGS">KGS  </option>
            <option className='text-center' value="KHR">KHR </option>
            <option className='text-center' value="KMF">KMF </option>
            <option className='text-center' value="KPW">KPW </option>
            <option className='text-center' value="KRW">KRW </option>
            <option className='text-center' value="KWD">KWD</option>
            <option className='text-center' value="KYD">KYD </option>
            <option className='text-center' value="KZT">KZT </option>
            <option className='text-center' value="LAK">LAK </option>
            <option className='text-center' value="LBP">LBP </option>
            <option className='text-center' value="LKR">LKR  </option>
            <option className='text-center' value="LRD">LRD </option>
            <option className='text-center' value="LSL">LSL </option>
            <option className='text-center' value="LTL">LTL </option>
            <option className='text-center' value="LVL">LVL </option>
            <option className='text-center' value="LYD">LYD </option>
            <option className='text-center' value="MAD">MAD </option>
            <option className='text-center' value="MDL">MDL </option>
            <option className='text-center' value="MGA">MGA </option>
            <option className='text-center' value="MKD">MKD  </option>
            <option className='text-center' value="MMK">MMK </option>
            <option className='text-center' value="MNT">MNT </option>
            <option className='text-center' value="MOP">MOP </option>
            <option className='text-center' value="MRO">MRO</option>
            <option className='text-center' value="MUR">MUR </option>
            <option className='text-center' value="MVR">MVR </option>
            <option className='text-center' value="MWK">MWK </option>
            <option className='text-center' value="MXN">MXN </option>
            <option className='text-center' value="MYR">MYR </option>
            <option className='text-center' value="MZN">MZN  </option>
            <option className='text-center' value="NAD">NAD </option>
            <option className='text-center' value="NGN">NGN </option>
            <option className='text-center' value="NIO">NIO </option>
            <option className='text-center' value="NOK">NOK </option>
            <option className='text-center' value="NPR">NPR</option>
            <option className='text-center' value="NZD">NZD </option>
            <option className='text-center' value="OMR">OMR </option>
            <option className='text-center' value="PAB">PAB </option>
            <option className='text-center' value="PEN">PEN </option>
            <option className='text-center' value="PGK">PGK </option>
            <option className='text-center' value="PHP">PHP  </option>
            <option className='text-center' value="PKR">PKR </option>
            <option className='text-center' value="PLN">PLN </option>
            <option className='text-center' value="PYG">PYG  </option>
            <option className='text-center' value="QAR">QAR </option>
            <option className='text-center' value="RON">RON </option>
            <option className='text-center' value="RSD">RSD </option>
            <option className='text-center' value="RUB">RUB </option>
            <option className='text-center' value="RWF">RWF </option>
            <option className='text-center' value="SAR">SAR </option>
            <option className='text-center' value="SBD">SBD </option>
            <option className='text-center' value="SCR">SCR </option>
            <option className='text-center' value="SDG">SDG </option>
            <option className='text-center' value="SEK">SEK </option>
            <option className='text-center' value="SGD">SGD </option>
            <option className='text-center' value="SHP">SHP </option>
            <option className='text-center' value="SLL">SLL </option>
            <option className='text-center' value="SOS">SOS </option>
            <option className='text-center' value="SRD">SRD  </option>
            <option className='text-center' value="STD">STD </option>
            <option className='text-center' value="SVC">SVC  </option>
            <option className='text-center' value="SYP">SYP </option>
            <option className='text-center' value="SZL">SZL</option>
            <option className='text-center' value="THB">THB </option>
            <option className='text-center' value="TJS">TJS </option>
            <option className='text-center' value="TMT">TMT </option>
            <option className='text-center' value="TND">TND </option>
            <option className='text-center' value="TOP">TOP </option>
            <option className='text-center' value="TRY">TRY </option>
            <option className='text-center' value="TTD">TTD </option>
            <option className='text-center' value="TWD">TWD </option>
            <option className='text-center' value="TZS">TZS </option>
            <option className='text-center' value="UAH">UAH </option>
            <option className='text-center' value="UGX">UGX </option>
            <option className='text-center' value="USD">USD</option>
            <option className='text-center' value="UYU">UYU </option>
            <option className='text-center' value="UZS">UZS  </option>
            <option className='text-center' value="VEF">VEF  </option>
            <option className='text-center' value="VND">VND  </option>
            <option className='text-center' value="VUV">VUV </option>
            <option className='text-center' value="WST">WST </option>
            <option className='text-center' value="XAF">XAF </option>
            <option className='text-center' value="XAG">XAG </option>
            <option className='text-center' value="XAU">XAU </option>
            <option className='text-center' value="XCD">XCD</option>
            <option className='text-center' value="XDR">XDR </option>
            <option className='text-center' value="XOF">XOF </option>
            <option className='text-center' value="XPF">XPF </option>
            <option className='text-center' value="YER">YER </option>
            <option className='text-center' value="ZAR">ZAR </option>
            <option className='text-center' value="ZMK">ZMK </option>
            <option className='text-center' value="ZMW">ZMW </option>
            <option className='text-center' value="ZWL">ZWL  </option>
        </select>
        {/*  */}
        
   </>
  )
}

export default Dropdown
