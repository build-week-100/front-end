import React from 'react'
import Header from './Header'
import AddItem from './AddItem'
import DashBoard from './DashBoard'
import axiosWithAuth from '../axiosWithAxios/axiosWithAxios'
import {useHistory, Link} from 'react-router-dom'

const DashBoardList = (props) => {
   
console.log('dashboardlist', props)
const {push}= useHistory()
const history = useHistory()

// const deleteItem = (ditem) =>{
//     axiosWithAuth()
//             .delete(`/market/${props.item.id}`)
//             .then(res => props.dashItems (props.items.filter(ditem.id !== res.data.data)))
//             .catch(err=> console.log('did not remove',err))
    
//         }
          

                return(
                    <div className='whatsthis2'>
                      <Link to={`/dashboard/addItem${1}`}>
                    <div className='FriendsCardContainer'>
                <h2>{props.item.product_name}</h2>
                        <h3>{props.item.product_category}</h3>
                       <h3> { props.item.product_description}</h3>
                       <div>                </div> 
                       <h3> {props.item.country}</h3>
                       <h3>{props.item.market_name} </h3>
                       <h3>{props.item.product_price} </h3>
                       <h3> {props.item.product_quantity}</h3>
                        <button
                      onClick={() => {
                        axiosWithAuth()
                        .delete(`/market/${props.item.id}`)
                        push('/dashboard')
                        history.go()
                    }   }>Delete</button> 
                    </div>
                    </Link>
                    </div>
                )
          


            
                }

export default DashBoardList
