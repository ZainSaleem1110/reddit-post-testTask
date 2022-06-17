import React, { useContext, useState } from 'react';
import { postsContext } from "../App";


const PostListing = () => {
    const usersContext = useContext(postsContext);
    const [popupStatus, setPopupStatus] = useState(false)
    const [modalTitle, setModalTitle] = useState("Title")
    const [modalDetail, setModalDetail] = useState("SelfText")
    const showPopup = (title, detail) => {
        setPopupStatus(true)
        setModalTitle(title)
        setModalDetail(detail)
    }
    const closePopup = () => {
        setPopupStatus(false)
    }

    return (
        <div>
            {
                usersContext.posts.length > 0 ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" style={{ borderRight: "2px solid lightgray" }}>#</th>
                                <th scope="col" style={{ borderRight: "2px solid lightgray" }}>Title</th>
                                <th scope="col">Selftext</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersContext.posts.map((list, index) => {
                                return <tr key={index}>
                                    <th scope="row" style={{ borderRight: "2px solid lightgray" }}>{index + 1}</th>
                                    <td style={{ borderRight: "2px solid lightgray" }} className="posts" onClick={() => { showPopup(list.data.title, list.data.selftext) }}>
                                        {list.data.title}
                                        {popupStatus == true && (
                                            <popup />
                                        )}
                                    </td>
                                    <td>{list.data.selftext == "" ? "N/A" : list.data.selftext}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                    : "No record found."
            }
            {popupStatus == true && (
                <div className='popup d-flex justify-content-center align-items-center'>
                    <div className='w-50 bg-white p-3' style={{ borderRadius: "10px" }}>
                        <div className='d-flex justify-content-between align-items-center pb-3' style={{ height: "8vh", borderBottom: "2px solid lightgray" }}>
                            <h3>{modalTitle}</h3>
                            <button className='posts' style={{ border: "none", background: "none", outline: "none" }} onClick={closePopup}>X</button>
                        </div>
                        <h6 className='pt-4'>{modalDetail == "" ? "N/A" : modalDetail}</h6>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PostListing;
