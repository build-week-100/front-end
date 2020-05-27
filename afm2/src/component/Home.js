
import React,{useState, useEffect} from 'react'
import axiosWithAuth from '../axiosWithAxios/axiosWithAxios.js'
import ItemList from './ItemList'

const Home = (props) => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get('/market')
        .then(res =>{
            console.log(res.data)
            setItems(res.data.data)
        })
        .catch(err =>{
            console.log('err',err)
        })
    },[]
    )


    return (
        <div>
            <ItemList key={items.id}  items={items} />
            
        </div>
    )
}

export default Home
