import React from 'react'
import React,{useState, useEffect} from 'react'
import axios from '../auxWithAxios/auxWithAxios'

const DashBoard = () => {
    const [items, setitems] = useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get('/api/market/')
        .then(res =>{
            setItems(res.data)
        })
        .catch(err =>{
            console.log('err',err)
        })
    },[]
    )


    return (
        <div>
            
        </div>
    )
}

export default DashBoard
