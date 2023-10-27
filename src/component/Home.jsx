import React, { useEffect } from 'react'

const Home = () => {
 
 const mouseOverFunc = (e)=>{
  console.log(e.clientX)
  console.log(e.clienty)
 }
 useEffect(()=>{
  document.addEventListener("mousemove", mouseOverFunc)

  return()=>{
    document.removeEventListener("mousemove", mouseOverFunc)
  };
 },[])
  return (
    <>
    <div>Home</div>
    </>
  )
}

export default Home