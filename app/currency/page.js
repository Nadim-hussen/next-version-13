import React from 'react'
import './currency.css'
export default function page() {
  return (
    <>
    <div className='father'>
        <h1>Currency Converter</h1>
        <div>
            <label>From</label>
            <input type="number"></input>
        </div>
        <div>
            <label>To</label>
            <input type="number"></input>
        </div>
        <div>
            <button>Converter</button>
        </div>
    </div>
    page</>
  )
}
