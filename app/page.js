"use client"
import Image from 'next/image'

import Link from 'next/link';
import { useState, useEffect } from 'react';
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=2');

  return res.json();
}
export default async function Home() {
  let [count, setCount] = useState(0);
  useEffect(() => {
        setCount(count+=1);

  }, []);
  const data = await getData();
  const name = 'hello world';
  // console.log('hello world');
  return (
    <div className='container text-primary'>
    <Link href='/address'>Address</Link>
    <h1>Hello world</h1>
    <h1>{count}</h1>
    <button  type="button" className="btn btn-primary">Add</button>
    {data.map((item,i)=>{
      return <h6 key={i}>{item.title.toUpperCase()}</h6>

    })}
    <h3>{name}</h3>
    </div>
  )
}
