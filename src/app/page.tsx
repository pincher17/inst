'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Input from "./components/input/input";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppDispatch } from "@/redux/hooks";
import { instAPI } from "@/api/instapi";


export default function Home() {

const [text, setText] = useState("");
  const dispatch = useAppDispatch()
  
 
    async function getServerSideProps(shortcode: string) {
      const options = {
        method: 'GET',
        url: `https://instagram243.p.rapidapi.com/postcomments/${shortcode}/{end_cursor}/{scraperid}`,
        headers: {
          'X-RapidAPI-Key': 'e7ce4be56dmsh5a48db0a991fc59p135f27jsn8135aa51b71e',
        }
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data.data.comments);
      } catch (error) {
        console.error(error);
      }
  
  }

  const getComment:any = () => {
    if(text){
      getServerSideProps(text)
      /* dispatch(getAllComments(text)) */
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