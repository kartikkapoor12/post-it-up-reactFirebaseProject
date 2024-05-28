import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import ReactLoading from "react-loading";

import { UserContext } from '../App';
import { useContext } from 'react';
function Home() {

    const postCollectionRef = collection(db, "posts");
    const [postList, setPostList] = useState([]);
    const [showLoader, setShowLoader] = useState(true);
    
    const currentUser = useContext(UserContext);  
    useEffect(() => {

        async function loadData() {

            const data = await getDocs(postCollectionRef);
            console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setShowLoader(false);
        }
        try {
            loadData();
        } catch (err) {
            console.log(err);
        }
    });



    const deletePost = async (id, postUserEmail) => {
        const deletedDoc = doc(db, "posts", id)
        try {
            if (auth.currentUser.email === postUserEmail)
                await deleteDoc(deletedDoc);
            else {
                alert("Not authorized to delete this post!")
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="homePage">
                {showLoader &&
                    <ReactLoading type="spin" color="black" className="spinLoader"
                        height={100} width={50} />
                }

                {postList.map((post) => {
                    return (
                        <div className="post">
                            <div className="postHeader">
                                <div className="title">
                                    <h1>{post?.title}</h1>
                                </div>
                               {currentUser[0]&&<div className="deletePost"> <button onClick={() => deletePost(post.id, post.author.email)}>&#128465;</button></div>}
                            </div>
                            <div className="postTextContainer"> {post?.postText}</div>
                            <h4>@{post?.author?.name}</h4>
                        </div>
                    )
                })}
                {postList.length === 0 && !showLoader &&
                    <div className="noDataPresent">
                        <p>No data present.....</p>
                    </div>}
            </div>

        </>
    )
}
export default Home;