'use client'
import React from 'react'
import './currency.css'
export default function page() {
 const handleSubmit=(e)=>{
  let data={
    currency:e.target.floatingSelect.value,
    from: e.target.from.value
  }
  let result = 0
  if(data.from == 0){
    e.preventDefault()
    return alert('from required!')
  }
  if(data.currency == 'dollar'){
    result = data.from *90
  }
  if(data.currency == 'pound'){
    result = data.from *120
  }
  if(data.currency == 'euro'){
    result = data.from *110
  }
  console.log(result);
  e.target.convert.value = result
  e.preventDefault();
  console.log('hello world');
 }
  return (
    <>
    <div className='father'>
        <h1>Currency(Taka) Converter</h1>
       <form onSubmit={handleSubmit} method='post'>
          <div className="form-floating">
            <select className="form-select" id="floatingSelect" name="foatingSelect" style={{width:200}}>
              {/* <option selected>Open this select menu</option> */}
              <option value="dollar">Dollar</option>
              <option value="pound">Pound</option>
              <option value="euro">Euro</option>
            </select>
            <label htmlFor="floatingSelect" style={{fontSize:20 ,fontWeight:500}}>Select currency</label>
          </div>

          <div>
              <label htmlFor="from" className="form-label">From</label>
              <input type="number" min="0" name="from"></input>
          </div>
          <div>
              <label htmlFor="convert" className="form-label">To</label>
              <input type="number" name='convert' disabled></input>
          </div>
          <div>
              <button >Converter</button>
          </div>

       </form>
    </div>
    page</>
  )
}
