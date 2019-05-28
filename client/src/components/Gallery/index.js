import React, { Component } from 'react';
import Save from "../Save";
import API from "../../utils/API";

class Gallery extends Component {
    saveBook(props) {
        API.saveBook({
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link
          })
    }
    render() {
        let altImage = 'https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581_960_720.jpg';
        return (

            <div className="book-list-wrapper">
                {
                    this.props.query ? (
                        <div className="col-sm-12">
                            <p className="search-status">Search Results For: {this.props.query}</p>
                        </div>
                    ) : null
                }

                {
                    this.props.items.map((item, index) => {
                        let { title, imageLinks, infoLink, description, authors } = item.volumeInfo;
                        let bookTitle = item.volumeInfo.title;
                        return (
                            <div key={index} className="col-sm-12 col-md-12 col-lg-12 book-column">
                                <div className="book-wrapper">
                                <Save 
                                        title={item.volumeInfo.title}
                                        authors={item.volumeInfo.authors}
                                        description={item.volumeInfo.description}
                                        image={item.volumeInfo.imageLinks}
                                        link={item.volumeInfo.infoLink}
                                        saveBook={this.saveBook}/>
                                    <a className="book" href={infoLink} rel="noopener noreferrer" target="_blank">
                                    <div className="book-title white-text">
                                            <h3>{bookTitle}</h3>
                                        </div>
                                    </a>
                                    <p className="authors"><strong>Author: </strong>{authors}</p>
                                    <div className="book-inner-flex">
                                    <a className="book" href={infoLink} rel="noopener noreferrer" target="_blank">
                                        <div className="book-image-wrapper">
                                            <img src={imageLinks !== undefined ? imageLinks.thumbnail : altImage}
                                                alt="Book"
                                                className="book-image"/>
                                        </div>
                                        
                                    </a>
                                    <div className="description">                        
                                    <div><strong>Description:</strong></div>
                                    {description}</div>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;