
import React,{useState, useEffect} from 'react'
import axiosWithAuth from '../axiosWithAxios/axiosWithAxios'
import Header from './Header'

import AddItem from './AddItem'
import {Link, useParams, Route, useHistory} from 'react-router-dom'
import DashBoardList from './DashBoardList'


const DashBoard = (props) => {
    const {id}= useParams()
    const {push}= useHistory()
   const [dashItems, setdashItems] = useState([])


    useEffect(()=>{

        
        axiosWithAuth()
        .get(`/market/user/${1}`)
        .then(res =>{
            console.log('dashres', res.data.data)
           setdashItems(res.data.data)
        })
        .catch(err =>{
            console.log('err',err)
        })
        
    },[]
    )





    return (
        <div>
            <Header />
            <Link to ='/addItem'>AddItem</Link>
            {dashItems.map(item =>(
                <DashBoardList key ={item.id} item={item}/>
            ))}
        </div>
    )
}

export default DashBoard
