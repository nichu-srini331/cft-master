import React, { useEffect, useState } from 'react'
import { db } from "./firebase";
import {
    collection, getDoc, getDocs
  } from "firebase/firestore";

function Result() {
    const[alldocs,setAllDocs]=useState({})

    useEffect(()=>{

        const func1 = async() => {

            const usersCollectionsRef = collection(db, "flaghost");
    
            const snap = await getDocs(usersCollectionsRef)
    
            const doct = snap.docs.map((doc)=>setAllDocs(doc.data()))
    
            console.log(alldocs)
        }

        func1()
    },alldocs)
  return (
    <div>
        <button>FETCH DATA</button>
        <ul>
            {alldocs}
        </ul>
    </div>
  )
}

export default Result