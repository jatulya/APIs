import react from "react"
import Modal from "./Modal"

const Card=({book})=>{
    console.log(book)

    return (
        <>
            {   //map is used to iterate over the array
                
                book.map((item) => {

                    let title = item.volumeInfo.title
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
                    let amount 
                    console.log(title)
                    if (item.saleInfo.saleability === "FOR_SALE")
                    {
                        amount =  item.saleInfo.listPrice.amount //undefined when item is not for sale
                    }
                    else if (item.saleInfo.saleability === "FREE")
                    {
                        amount = 0
                    }

                    //we got the names of the keys when we displayed items in the console
                    if(thumbnail !== undefined && amount!==undefined)
                    {
                        return (
                            <>
                            <div className="card">
                                <img src={thumbnail} alt="The Battle of the Labyrynth" />
                                <div className="bottom">
                                        
                                        <h3 className="title">{title}</h3>
                                    
                                        { amount === 0 ?
                                        (<p className="amount">FREE</p>) 
                                        :
                                        (<p className="amount">&#8377;{amount}</p>) 
                                        }
                                    </div> 
                            </div>
                            <Modal/>
                            </>
                        )
                    } 
                })
            }
        </>
    )
}

export default Card