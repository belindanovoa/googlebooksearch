import React from "react";
import "./style.css"

function Logo() {
    return (
            <div className="logo">
                <img className="logo-position" src="https://cdn.pixabay.com/photo/2016/08/24/16/20/books-1617327_960_720.jpg" alt="Book Icon"/>
                <h1 className="logo-text logo-position google-book-search">Google Book Search </h1>
                <h5 className="logo-text logo-position book-search-small">Search and Save your favorite books</h5>
            </div>
    )
}

export default Logo;