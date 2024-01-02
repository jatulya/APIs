import react, { useState } from 'react'
import Card from './Card'
import axios from 'axios'
import apikey from './keys'

const Main= () =>  {
    const [search, setSearch] = useState("")
    const [bookData, setBookData] = useState([])

    const searchBook = () => {
        console.log(`Value of the book is: ${search}`)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apikey}&maxResults=25`)
        .then(res =>setBookData(res.data.items)) //executed when the get req works (res => response)
        //data, items are keys in the response we get from api: to find keys, check the documentation
        .catch(err=>console.log(err)) //executed when error occurs (res and err are user defined variables)
    }

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
                    <input type="text" placeholder="Enter the book name.."
                    value={search} onChange={(e) => setSearch(e.target.value)} 
                    onKeyPress = {(e) => {
                        e.key === "Enter" && searchBook()
                      }}/>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                
                <img src='.\images\bg2.png' alt='Children reading books' />
            </div>
        </div>

        <div className='container'>
            {
               <Card book={bookData}/>
            }
        </div>
      </>
    )
}

export default Main


