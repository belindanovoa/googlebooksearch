import React from 'react';
import "./style.css"

function Save(props) {

        return <button className="save-btn btn-primary btn" onClick={() => props.saveBook(props)}>Bookmark</button>
}

export default Save;