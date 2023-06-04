import Image from 'next/image'
import Link from 'next/link';
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=2');

  return res.json();
}
export default async function Home() {
  const data = await getData();
  const name = 'hello world';
  console.log('hello world');
  return (
    <>
    <Link href='/address'>Address</Link>
    <h1>Hello world</h1>
    {data.map((item)=>{
      return <h6>{item.title.toUpperCase()}</h6>

    })}
    <h3>{name}</h3>
    </>
  )
}
