 import React from 'react'
import FirstHomesec from './FirstHomeSec'
import SecondHomesec from './SecondHomeSec'
import ThirdHomeSec from './ThirdHomeSec'
import FouthHomeSec from './FouthHomeSec'
import { useState,useEffect } from 'react';
import { firestoreDB } from '../FireBase';
import { getDocs,collection } from 'firebase/firestore';
import { FifthHomeSec } from './FifthHomeSec';
import SixHomeSec from './SixHomeSec'
import SevenHomeSec from './SevenHomeSec'
import { Footer } from './footer'


// import {StorageApp} from './StorageApp'

export const HomeStoreFiles = () => {
  const [movieList,setMovieList] =useState([]);
const moviesCollectionRef = collection(firestoreDB,"photos")
useEffect(()=>{
const getMovieList= async ()=>{
 try{
const data= await getDocs(moviesCollectionRef)
const filteredData= data.docs.map((doc)=>({
  ...doc.data(),
  id:doc.id
}))
setMovieList(filteredData)
 }catch(err){
  console.error(err)
 }
}
getMovieList()
},[])
  return (
    <>
   
    {movieList.map((movie)=>
        <>
        <FirstHomesec/>
    <SecondHomesec apartMovie={movie}/>
    <ThirdHomeSec />
    <FouthHomeSec apartMovie={movie}/>
    <FifthHomeSec/>
  <SixHomeSec commerceLists={movie}/>
  <SevenHomeSec/>
  <Footer/>
    </>
        )}
       
  {/* <StorageApp/> */}
  
    </>
  )
}
