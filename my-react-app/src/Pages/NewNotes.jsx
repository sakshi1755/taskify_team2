import React from 'react';
import './Newnote.css';

const Newnote =()=>{
    return(
        <div className="overlay">
            <div className="note-box">
                <div className="noteheader">
                    <h2>New Note</h2>
                    <button className="close-btn">x</button>
                </div>
                <h4>Title</h4>
                <input type="text" placeholder="Enter Note Title"/>
                <h4>Content</h4>
                <textarea className="note-textarea" placeholder="Enter Note Content"></textarea>
                <div className="button-group">
                    <button className="cancel-btn">Cancel</button>
                    <button className="create-btn">Create Note</button>
                </div>
            </div>
        </div>
    );
};
export default Newnote;