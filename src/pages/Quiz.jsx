import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import Test from '../components/Test';
import Result from '../components/Result';

function Quiz() {
  const {title} = useParams();
  const {data,isPending} = useFetch('http://0.0.0.0:10000/quiz');

  useEffect(() => {
        document.title = "Quiz" + " " + title;
  },[title])
// console.log(data);


  return (
    <section className='w-196 h-116 bg-indigo-900 flex justify-around items-center text-white '>
      {isPending && <h1 className='translate-x-38 -translate-y-26'>Loading...</h1>}
      {data && <Test questions={data[0]}/>}
      {/* <Result/> */}
    </section>
  )
}

export default Quiz
