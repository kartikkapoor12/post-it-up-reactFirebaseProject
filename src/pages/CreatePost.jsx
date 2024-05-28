import { useEffect, useState } from "react";
import {addDoc, collection} from 'firebase/firestore'
import { db ,auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

function CreatePost (){

    const currentUser = useContext(UserContext); 
    const postCollectionRef = collection(db,"posts");

    const [title,setTitle] = useState("");
    const [postText,setPostText] = useState("");
    const navigate = useNavigate();

const submitPost = async () =>{
    try {
    await addDoc(postCollectionRef,{
        title:title , 
        postText:postText,
        author:{
            id:  auth.currentUser.uid ,
            name: auth.currentUser.displayName,
            email: auth.currentUser.email }
        });
    navigate("/");
    }catch(err){
        console.log(err);
    }
    }


    useEffect(()=>{

        if(!currentUser[0])
            { 
                navigate("/login");
                 console.log("User not logged in!")      
    }
    }),[];

    return (
        <>
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create a Post</h1>
                <div className="inputGp">
                <label>Title:</label>
                <input placeholder="Title...." onChange={(e)=> setTitle(e.target.value)} />
             </div>
             <div className="inputGp">
                <label>Post:</label>
                <textarea placeholder="Post ..."name="" id="" onChange={(e)=> setPostText(e.target.value)} /> </div>
                <button onClick={submitPost}>Submit post</button>
            </div>
        </div>
        </>
    )
}
export default CreatePost;