import React, {useState} from 'react'
import axiosWithAuth from '../axiosWithAxios/axiosWithAxios'
import {useHistory} from 'react-router-dom'



const AddItem = () => {
    const {push}= useHistory()
    const [addItem, setAddItem] = useState({
        country: '',
        market_name: '',
        product_category: '',
        product_description: '',
        product_name: '',
        product_price: '',
        product_quantity: ''
    })

const handleChange = e =>{
    e.preventDefault()
    setAddItem({
        ...addItem,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
    .post('/market/user/1', addItem)
    .then(res =>{
        setAddItem({
            country: '',
            market_name: '',
            product_category: '',
            product_description: '',
            product_name: '',
            product_price: '',
            product_quantity: ''
            
        })
    })
    push('/dashboard')
}

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div >Add An Item</div>
                <div >
                  <div >
                    <label htmlFor='AddItem'>Item</label>
                      <input 
                      type="text"
                       name="country" 
                       value={addItem.country}
                       onChange={handleChange}
                       placeholder='Country'/>
                  </div>
                  <div >
                    <label htmlFor='AddMarket'>Add Market</label>
                      <input 
                       type="text"
                       name="market_name"
                       value={addItem.market_name}
                       onChange={handleChange}
                       placeholder='Market Name'/>
                  </div>
                  <div >
                    <label htmlFor='ProductCategory'>Product Category</label>
                      <input 
                       type="text"
                       name="product_category"
                       value={addItem.product_category}
                       onChange={handleChange}
                       placeholder='Product Category'/>
                  </div>
                  <div >
                    <label htmlFor='ProductDescription<'>Product Description</label>
                      <input 
                       type="text"
                       name="product_description"
                       value={addItem.product_description}
                       onChange={handleChange}
                       placeholder='Product Description'/>
                  </div>
                  <div >
                    <label htmlFor='ProductName'>Product Name</label>
                      <input 
                       type="text"
                       name="product_name"
                       value={addItem.product_name}
                       onChange={handleChange}
                       placeholder='Product Name'/>
                  </div>
                  <div >
                    <label htmlFor='productprice'>Product Price</label>
                      <input 
                       type="text"
                       name="product_price"
                       value={addItem.product_price}
                       onChange={handleChange}
                       placeholder='Product Price'/>
                  </div>
                  <div >
                    <label htmlFor='productquantity'>Product Quantity</label>
                      <input 
                       type="text"
                       name="product_quantity"
                       value={addItem.product_quantity}
                       onChange={handleChange}
                       placeholder='Product Quantity'/>
                  </div>
                  <div>
                    <button type='submit'  >submit</button>
                  </div>
                </div>
              </form>
            
        </div>
    )
}

export default AddItem
