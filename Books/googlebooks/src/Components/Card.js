import react from "react"

const Card=({book})=>{
    console.log(book)

    return (
        <>
            {   //map is used to iterate over the array
                book.map((item) => {
                    
                    return (
                        <>
                        <div className="card">
                        <img src="./images/pjo.webp" alt="The Battle of the Labyrynth" />
                        <div className="bottom">
                                <h3 className="title">The Battle of The Labyrinth</h3>
                                <p className="amount">&#8377;480</p>
                            </div> 
                        </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default Card