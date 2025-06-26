import React, { useState } from 'react';
import './Newnote.css';
import moment from 'moment';

const Newnote = ({onClose, onAddNote}) => {
    const[title, settitle] = useState("")
    const[content, setcontent] = useState("")

    const createnote = () =>{
        if(title.trim() && content.trim()){
            const date = moment().format("Do MMM YYYY");
            onAddNote({title,content,date})
            settitle("")
            setcontent("")
            onClose();
        }
    };
    return (
        <div className="overlay">
            <div className="note-box">
                <div className="noteheader">
                    <h2>New Note</h2>
                    <button className="close-btn" onClick={onClose}>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <h4>Title</h4>
                <input type="text" placeholder="Enter Note Title" value={title} onChange={(e) => settitle(e.target.value)} />
                <h4>Content</h4>
                <textarea className="note-textarea" placeholder="Enter Note Content" value={content} onChange = {(e)=>{setcontent(e.target.value)}}></textarea>
                <div className="button-group">
                    <button className="cancel-btn" onClick={onClose}>Cancel</button>
                    <button className="create-btn" onClick={createnote}>Create Note</button>
                </div>
            </div>
        </div>
    );
};
export default Newnote;