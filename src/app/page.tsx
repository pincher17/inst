'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Input from "./components/input/input";
import { getAllComments } from "@/redux/commentsSlice";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";

export default function Home() {

  const [text, setText] = useState("");
  const dispatch = useAppDispatch()
  const getComment:any = () => {
    if(text){
      dispatch(getAllComments(text))
    }
    
}

  return (
    <main>
      <input type='text'
        onChange={(e) => setText(e.target.value)}
        />
      <button onClick={getComment}>send</button>
    </main>
  );
}