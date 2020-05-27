import React, {useState} from 'react'
import axiosWithAuth from '../axiosWithAxios/axiosWithAxios'


const AddItem = () => {
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
    .post('/market/user/:id', addItem)
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
}

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div >Add A Friend</div>
                <div >
                  <div >
                    <label htmlFor='AddName'>Friend Name</label>
                      <input 
                      type="text"
                       name="country" 
                       value={addItem.country}
                       onChange={handleChange}
                       placeholder='Country'/>
                  </div>
                  <div >
                    <label htmlFor='AddAge'></label>
                      <input 
                       type="number"
                       name="age"
                       value={addItem.market_name}
                       onChange={handleChange}
                       placeholder='age'/>
                  </div>
                  <div >
                    <label htmlFor='AddEmail'>Email</label>
                      <input 
                       type="text"
                       name="age"
                       value={addItem.product_category}
                       onChange={handleChange}
                       placeholder='email'/>
                  </div>
                  <div >
                    <label htmlFor='AddEmail'>Email</label>
                      <input 
                       type="text"
                       name="age"
                       value={addItem. product_description}
                       onChange={handleChange}
                       placeholder='email'/>
                  </div>
                  <div >
                    <label htmlFor='AddEmail'>Email</label>
                      <input 
                       type="text"
                       name="age"
                       value={addItem.product_name}
                       onChange={handleChange}
                       placeholder='email'/>
                  </div>
                  <div >
                    <label htmlFor='AddEmail'>Email</label>
                      <input 
                       type="text"
                       name="age"
                       value={addItem.product_price}
                       onChange={handleChange}
                       placeholder='email'/>
                  </div>
                  <div >
                    <label htmlFor='AddEmail'>Email</label>
                      <input 
                       type="text"
                       name="age"
                       value={addItem.product_quantity}
                       onChange={handleChange}
                       placeholder='email'/>
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
