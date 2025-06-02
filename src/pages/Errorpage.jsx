import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom';
function Errorpage() {
  const error = useRouteError();
  console.log(error);
  if(error.status == 404){
    return <div className='text-3xl font-bold text-center mt-16'>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist or has been moved.</p>
      <p>Don't worry, you can go back to the homepage.</p><br />
      <Link to="/" className='p-3 bg-blue-600 rounded-2xl text-white hover:bg-blue-500'>Backg to Home</Link>
    </div>
  }

  return (
    <div className='text-center text-2xl font-bold mt-15'>
      <h1>Oops! Something went wrong.</h1>
      <p>It looks like something broke on our end.</p>
      <p>Try reloading the page or contact support <br /> if the problem continues.</p>
    </div>
  )
}

export default Errorpage