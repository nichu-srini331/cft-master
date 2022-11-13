import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import {db} from './firebase'
import {addDoc, updateDoc,setDoc,collection,arrayUnion} from "firebase/firestore"
import './index.css'
import cyber from './cy.png'

function First(props) {

    const navigate = useNavigate();
    const[id,setid] = useState("")
    const[name,setname] = useState("")
   const[score,setscore] = useState("")
    const[ans,setans] = useState(["nichu"])

    const usersCollectionsRef = collection(db,"flaghost")

    const nxt = async() => {
      navigate("/t")
      props.onsubmit(name)
      props.sub(id)
    }

    
    const func =async() => {
        
        await addDoc(usersCollectionsRef,{name:name,id:id,ans:ans,score:score}).then((res)=>{
        })
        await setDoc(usersCollectionsRef,
          { ans: arrayUnion(...ans) }
          , {merge: true});
    } 

    useEffect(()=>{
    })

  return (
    <div>
      <img src={cyber} width='80' style={{marginLeft:'-950px'}}/>
      <h1>CAPTURE THE FLAG</h1>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Unique ID : </Form.Label>
      <Form.Control className='mb-4' type="email" placeholder="Enter ID" onChange={(e)=>{setid(e.target.value)}}/>
    </Form.Group><br/>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name : </Form.Label>
      <Form.Control className='mb-4' type="email" placeholder="Enter name" onChange={(e)=>{setname(e.target.value)}} />
    </Form.Group><br/>
    <Button className='mb-5' variant="primary" type="submit" onClick={nxt}>
      Submit
    </Button>
  </Form></div>
  )
}

export default First