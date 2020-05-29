import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../axiosWithAxios/axiosWithAxios'

const ItemPage = (props) => {
const [itemDetails, SetItemDetails] =useState({})
    useEffect(()=>{

        
        axiosWithAuth()
        .get(`/market/user/${1}`)
        .then(res =>{
            console.log('detailshres', res.data.data)
            SetItemDetails(res.data.data)
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

export default ItemPage
