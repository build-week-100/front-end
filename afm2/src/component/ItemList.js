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
                        <h3>{item.product_category}</h3>
                       <h3> { item.product_description}</h3>
                       <div>                </div> 
                       <h3> {item.country}</h3>
                       <h3>{item.market_name} </h3>
                       <h3>{item.product_price} </h3>
                       <h3> {item.product_quantity}</h3>
                       
                    </div>
                    </div>
                )
            })}


            
        </div>
    )
}

export default ItemList
