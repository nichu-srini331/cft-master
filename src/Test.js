import React, { useState } from "react";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  updateDoc,
  setDoc,
  collection,
  arrayUnion,
  serverTimestamp
} from "firebase/firestore";
import { Navigate } from "react-router-dom";

function Test(props) {
  const navigate = useNavigate();
  const [ans, setans] = useState([]);
  const [fans, setfans] = useState([]);
  const [nam, setnam] = useState("");
  const [id, setid] = useState("");

const l= process.env.REACT_APP_LIST;

    
  const scs = JSON.parse(process.env.REACT_APP_SCS)

  let [scr, setscr] = useState(0);

  const usersCollectionsRef = collection(db, "flaghost");

  function funm() {
    setnam(props.nam);
    setid(props.id);

    if (l.includes(ans) && !fans.includes(ans)) {
      setscr((scr = scr + scs[ans]));
      setfans([...fans, ans]);

      // setscr(scr+scs.ans)
      alert("Flag Accepted");
    } else {
      alert("Flag Rejected");
    }
  }
  const fu = async () => {
    await addDoc(usersCollectionsRef, {
      ans: fans,
      score: scr,
      name: nam,
      id: id,
      createdat:serverTimestamp()
    }).then((res) => {
    });
    navigate("/")
  };
  return (
    <div className="box">
      <h2>Enter the Answer :</h2>
      <input
        style={{ width: "200px", height: "25px", borderRadius: "5px" }}
        type="text"
        onChange={(e) => {
          setans(e.target.value);
        }}
      />
      <br />
      <h3>Score: {scr}</h3>
      <button className="mb-5" onClick={funm}>
        Check
      </button>{" "}
      <button className="mb-5" onClick={fu}>
        Submit
      </button>
      <h2 className="note">*Note : Only if u press SUBMIT your response will be stored</h2>
    </div>
  );
}

export default Test;
