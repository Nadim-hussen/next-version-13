'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
export default function Address() {
  const { push } = useRouter();
  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  // });
  // const handleChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    const data = {
      email : e.target.email.value,
      password : e.target.password.value
    }
  //   if(data.email=='') {
  //     alert('email required!')
  //     push('/address')
  // }
  //   if(data.password=='') return alert('password required!')
    console.log(data);
    alert(`your name is ${data.email} ${data.password}. your email address is ${data.email}. your password is ${data.password}. It means you are hacked.hahaha(evil laugh)`)

    e.preventDefault();

  };
  const resend = (e) => {
    return push('/')
  };
  return (
    <div className='container'>
    <form onSubmit={handleSubmit} method="post" >
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email"  className="form-control" name="email"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password"  className="form-control" name="password" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button> */
  }
</form>
  <button onClick={resend}>Home</button>
    {/* <Link href='/'>Home</Link> */}
    </div>
  )
}