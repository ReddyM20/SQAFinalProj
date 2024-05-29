import React, {useContext} from 'react'
import axios from "axios"; 
import { useEffect, useState } from "react"; 
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../helpers/AuthContext";

function Home() {
    const [listofPosts, setlistofPosts] = useState([]);
    let navigate = useNavigate();
    const { authState } = useContext(AuthContext);


    useEffect(() => {

      if (!localStorage.getItem("accessToken")) {
        navigate("/login");
      } else {
      axios.get("https://fullstack-api-magabilin-manali-1809c0ed523b.herokuapp.com/posts").then((response) => {
        setlistofPosts(response.data);
      });
    }
    }, []);
  
  return (
    <div>
      {listofPosts.map((value, key) =>  {
        return (
        <div className = "post" onClick={() => navigate(`/post/${value.id}`)}> 
          <div className = "title">{value.title} </div>
          <div className = "body">{value.postText} </div>
          <div className = "footer">{value.username} </div>
        </div>
        );
      })} 
    </div>
  )
}

export default Home
