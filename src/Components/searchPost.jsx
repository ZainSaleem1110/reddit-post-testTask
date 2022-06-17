import React, { useEffect, useState, useContext } from 'react';
import { postsContext } from "../App";

const SearchPost = () => {
    const [inpVal, setInpVal] = useState(
        { postName: "" }
    )
    const usersContext = useContext(postsContext);
    const filterValue = (e) => {
        setInpVal({ ...inpVal, [e.target.name]: e.target.value });
        filterPost(e);
    }

    const filterPost = (e) => {
        e.preventDefault();
        if (inpVal.postName === "") {
            usersContext.setMyPosts(usersContext.allPosts)
        }
        else {
            const filter = usersContext.allPosts.filter(list => {
                return list.data.title.includes(inpVal.postName)
            })
            usersContext.setMyPosts(filter)
        }
    }

    return (
        <form onSubmit={filterPost}>
            <input type="text" onChange={(e) => { filterValue(e) }} name="postName" placeholder="Search Post ..." style={{ borderRadius: "5px", outline: "none", fontSize: "16px", fontWeight: "normal", height: "5vh", paddingLeft: "10px", width: "250px", margin: "10px" }} />
        </form>
    );
}

export default SearchPost;
