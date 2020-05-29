import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../axiosWithAxios/axiosWithAxios'
import {useHistory} from 'react-router-dom'

const EditItems = (props) => {
    const {push}= useHistory()
    const [editItem, setEditItem] =useState({
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
        setEditItem({
            ...editItem,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/market/user/1', editItem)
        .then(res =>{
            setEditItem({
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
          



    useEffect(() => {
        axiosWithAuth()
        .put(`/market/${1}`)
        .then(res =>{
            console.log('editres',res.data.data)
        })

    }, [])

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div >Add An Item</div>
                <div >
                  <div >
                    <label htmlFor='editItem'>Item</label>
                      <input 
                      type="text"
                       name="country" 
                       value={editItem.country}
                       onChange={handleChange}
                       placeholder='Country'/>
                  </div>
                  <div >
                    <label htmlFor='AddMarket'>Add Market</label>
                      <input 
                       type="text"
                       name="market_name"
                       value={editItem.market_name}
                       onChange={handleChange}
                       placeholder='Market Name'/>
                  </div>
                  <div >
                    <label htmlFor='ProductCategory'>Product Category</label>
                      <input 
                       type="text"
                       name="product_category"
                       value={editItem.product_category}
                       onChange={handleChange}
                       placeholder='Product Category'/>
                  </div>
                  <div >
                    <label htmlFor='ProductDescription<'>Product Description</label>
                      <input 
                       type="text"
                       name="product_description"
                       value={editItem.product_description}
                       onChange={handleChange}
                       placeholder='Product Description'/>
                  </div>
                  <div >
                    <label htmlFor='ProductName'>Product Name</label>
                      <input 
                       type="text"
                       name="product_name"
                       value={editItem.product_name}
                       onChange={handleChange}
                       placeholder='Product Name'/>
                  </div>
                  <div >
                    <label htmlFor='productprice'>Product Price</label>
                      <input 
                       type="text"
                       name="product_price"
                       value={editItem.product_price}
                       onChange={handleChange}
                       placeholder='Product Price'/>
                  </div>
                  <div >
                    <label htmlFor='productquantity'>Product Quantity</label>
                      <input 
                       type="text"
                       name="product_quantity"
                       value={editItem.product_quantity}
                       onChange={handleChange}
                       placeholder='Product Quantity'/>
                  </div>
                  <div>
                    <button type='submit'  >Edit</button>
                  </div>
                </div>
              </form>
            
        </div>
    )
}

export default EditItems
