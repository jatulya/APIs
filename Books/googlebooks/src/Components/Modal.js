import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    //let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" ><i class="fas fa-times"></i></button>
                    <div className="inner-box">
                        <img src=".\images\pjo.webp" alt="" />
                        <div className="info">
                            <h1>Percy Jackson: the Battle of labyrynth</h1>
                            <h3>Rick Riordan</h3>
                            <h4>Penguins<span></span></h4><br/>
                            <a href="#"><button>More</button></a>
                        </div>
                    </div>
                    <h4 className="description">PErcy Jackson is one of the kind and great set of books. 
                    in this particular, a special character named Rachel enters and both percy and rachel start liking each other.</h4>
                </div>
            </div>
        </>
    )
  }
}
