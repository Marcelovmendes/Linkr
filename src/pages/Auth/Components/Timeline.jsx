import { useState,useContext } from "react";
import styled from "styled-components";
import NavBar from "../../../components/NavBar";
import NewPost from "../../../components/NewPost";
import { UserContext } from "../../../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Skeleton from 'react-loading-skeleton';
import Post from "../../../components/NewPost";
import { useEffect } from "react";
export default function Timeline() {
    const {token } = UserContext(UserContext)
    const [post, setPost] = useState([])
    const [bodyLoading, setBodyLoading] = useState(false)


    const navigate = useNavigate()

    const lsToken= {

        headers: {
            Authorization: `Bearer ${token}` 
        }
    }   

   const getAllPost = async() => {
       
  try{ 
    axios.get(/*" Caminho do Deploy da API "*/"",lsToken)

    setPost([...post,...res.data.posts])
   setBodyLoading(false)
  }catch(err){
    console.log(err)
    setBodyLoading(false)
  }
   }
useEffect(()=>{
    if(!token){
        navigate("/")
    }else{
        setBodyLoading(true)
    }


},[])
    if(token){
    return (
        <>
        <NavBar/>
        <NewPost/>
        {bodyLoading?(<Skeleton height={230} count={10}/>):(<Post getPost={getAllPost} post={post}/>)}
        </>
    )
    }
}