import React from 'react'

const Main= () =>  {
    return (
      <>
        <div className='header'>
            <div className='row1'>
                <h1>A room without books is like <br/>
                a body without a soul.</h1>
            </div>
            <div className='row2'>
                <h2>Find your Book</h2>
                <div className='search'>
                    <input type="text" placeholder="Enter the book name.."/>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <img src='.\images\bg2.png' alt='Children reading books' />
            </div>
        </div>
      </>
    )
}

export default Main


