import React from 'react'

const ItemList = (props) => {
    

console.log('what props', props)
    return (
        <div className='WhatsThis'>
            {/* <p>{props.items}</p> */}
            {props.items.map(item =>{

                return(
                    <div className='whatsthis2'>
                    <div className='FriendsCardContainer'>
                <h2>{item.product_name}</h2>
                        <h3>Age:</h3>
                        <h3>Email: </h3>
                    </div>
                    </div>
                )
            })}


            
        </div>
    )
}

export default ItemList
