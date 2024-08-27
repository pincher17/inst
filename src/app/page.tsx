'use client'


import { useEffect, useState } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { H1, H2, IconLikeCommentWrapper, Img, ImgPost, ImgPostSuccess, ImgPostWrapper, ImgProfileSuccess, Input2, InputButtonWrapper, InputLabel, InstagramPost, LikeCount, Main, MainWrapper, PostWrapper, Text, TextField2, UserName, UserNameWrapper, UserPictureDiv } from "./Page.styles";
import { Box, Button, TextField } from "@mui/material";
import Image from "next/image";
import userIcon from './icons8User.png'
import likeIcon from './likeicon.png'
import commentIcon from './commenticon.png'
import noImagePost from './no-image.svg'
import { addDataPoster } from "@/redux/dataPoster";
import Headers from "./components/Headers/Header";
import Header from "./components/Headers/Header";


export default function Home() {

const [text, setText] = useState("");
  const dispatch = useAppDispatch()
  const dataPoster: any = useAppSelector(state => state.dataPoster.dataPoster);
 
    async function getServerSideProps(shortcode: string) {
      const options = {
        method: 'GET',
        url: `https://instagram243.p.rapidapi.com/postdetail/${shortcode}/`,
        headers: {
          'X-RapidAPI-Key': 'e7ce4be56dmsh5a48db0a991fc59p135f27jsn8135aa51b71e',
        }
      };
      
      try {
        const response = await axios.request(options);
        dispatch(addDataPoster(response.data.data))
        console.log(response.data.data);
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
    <>
    <Header />
    <Main>
      <MainWrapper>
      <PostWrapper>
        <InstagramPost>
          
      <UserNameWrapper>
      <UserPictureDiv>
        { dataPoster.user?.profile_pic_url  
          ?<ImgProfileSuccess crossOrigin="anonymous" alt="user" src={`https://youtogift.com/api/proxy?image=${dataPoster.user?.profile_pic_url}`} width={46} height={46}/>
          : <Img alt="user" src={userIcon} width={46} height={46}/>
        }
        </UserPictureDiv>
        { dataPoster.user?.username 
          ? <UserName>{dataPoster.user.username}</UserName>
          : <UserName>user_name</UserName>}
      </UserNameWrapper>
      <ImgPostWrapper>
      { dataPoster.image_versions2?.candidates[0]?.url
        ? <ImgPostSuccess crossOrigin="anonymous" alt="user" src={`https://youtogift.com/api/proxy?image=${dataPoster.image_versions2?.candidates[0]?.url}`} width={350} height={350}/>
        : <ImgPost alt="user" src={noImagePost} width={350} height={350}/>
        }
      <IconLikeCommentWrapper>
      <ImgPost alt="user" src={likeIcon} width={30} height={30}/>
      {dataPoster?.like_count ?
        <LikeCount> {dataPoster.like_count}</LikeCount>
        : <LikeCount> 0</LikeCount>
      }
      <ImgPost alt="user" src={commentIcon} width={30} height={30}/>
      {dataPoster?.comment_count ?
        <LikeCount> {dataPoster.comment_count}</LikeCount>
        : <LikeCount> 0</LikeCount>
      }
      </IconLikeCommentWrapper>
      </ImgPostWrapper>
      
      </InstagramPost>
      <div>
      <H1>Розыгрыш в instagram</H1>
      <div>
      <H2>По комментариям</H2>
      <Text>Выбор победителей производится среди тех, кто оставил комментарий под конкурсной записью.</Text>
      </div>
      <div>
      <InputLabel>УКАЖИТЕ ССЫЛКУ НА ПОСТ</InputLabel>
      <InputButtonWrapper>
        <Box
        sx={{
          width: 300,
          maxWidth: '100%',
        }}
      >
        <TextField2 onChange={(e) => setText(e.target.value)} fullWidth label="Ссылка на пост" id="fullWidth"/>
      </Box>

      <Box sx={{ '& button': { m: 1 } }}>
        <div>
          <Button variant="contained" size="large" onClick={getComment}>
            Найти
          </Button>
        </div>
      </Box>
      </InputButtonWrapper>
      </div>
      </div>
      </PostWrapper>
      </MainWrapper>
    </Main>
    </>
  );
  }