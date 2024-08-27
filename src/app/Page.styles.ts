import styled from 'styled-components'
import Image from "next/image";
import { TextField } from '@mui/material';


export const Main = styled('main')`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

export const MainWrapper = styled('div')`
  width: 100%;
  margin: 0 auto;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  display: flex;
    justify-content: center;
`

export const InputButtonWrapper = styled('div')`
  display: flex;
`

export const UserNameWrapper = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const UserName = styled('div')`

`

export const InstagramPost = styled('div')`
height: 495px;
    padding: 10px;
    border-radius: 15px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    background-color: white;
`

export const Input2 = styled('input')`
  width: 300px;
  height: 40px;
  background-color: white;
  border-color: #2481d6;
`

export const UserPictureDiv = styled('div')`
    flex-shrink: 0;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    padding: 0.25rem;
    margin-right: 10px;
    background-image: linear-gradient(90deg,#ffc107,#f44336,#9c27b0);
    display: flex;
    justify-content: center;
    
`
export const Img = styled(Image)`
object-fit: cover;
    border: 0.25rem solid #fff;
    background-color: #fff;
    border-radius: 50%;
`
export const ImgPost = styled(Image)`
    background-color: #fff;
    object-fit: cover;
`

export const ImgPostWrapper = styled('div')`
    width: 352px;
    height: 360px;
`

export const IconLikeCommentWrapper = styled('div')`
   display: flex;
   align-items: center;
   margin-top: 15px;
   margin-left: 5px;
`

export const LikeCount= styled('p')`
    margin-right: 40px;
    margin-left: 10px 
;
`

export const H1 = styled('h1')`
margin-top: 10px;
    margin-bottom: 40px;
`

export const H2 = styled('h2')`
  margin-bottom: 20px;
`

export const InputLabel = styled('p')`
   margin-bottom: 10px;
`

export const Text = styled('p')`
    width: 600px;
    margin-bottom: 40px;
`

export const PostWrapper = styled('div')`
    display: flex;
    width: 1170px;
    padding: 40px;
    justify-content: space-between;
    background-color: white;
    margin-bottom: 90px;
    border-radius: 15px;
    -webkit-backdrop-filter: blur(111px);
    backdrop-filter: blur(111px);
   /*  background: linear-gradient(180deg,#f8fcff91,rgb(248 252 255 / 52%)); */
    box-shadow: 0 1rem 5.5rem rgba(23,39,80,.3);
    margin-top: 50px;
`

export const ImgPostSuccess = styled('img')`
   width: 350px;
   height: 350px;
   object-fit: cover;
`

export const ImgProfileSuccess = styled('img')`
   width: 46px;
   height: 46px;
   object-fit: cover;
    border: 0.25rem solid #fff;
    background-color: #fff;
    border-radius: 50%;
`

export const TextField2 = styled(TextField)`
   background-color: white;
`