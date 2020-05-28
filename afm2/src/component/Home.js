
import React,{useState, useEffect} from 'react'
import axiosWithAuth from '../axiosWithAxios/axiosWithAxios.js'
import ItemList from './ItemList'
import Header from './Header'

const Home = (props) => {
    const [items, setItems] = useState([])
    const[search, setSearch]= useState('')
    const [filteredName, setFilteredName] =useState([])

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
    useEffect(()=>{
    setFilteredName(
    items.filter(item=>{
        return item.product_name.toLowerCase().includes(search.toLowerCase()),
        item.country.toLowerCase().includes(search.toLowerCase()),
        item.market_name.toLowerCase().includes(search.toLowerCase())
    })
)
    },[search,items])

    // const filteredName = items.filter( item =>{
    //    return item.product_name.toLowerCase().includes( search.toLowerCase())
    // })

    return (
        <div>
            <Header />
           
            
            <input type="text" placeHolder ='Search' onChange={e => setSearch(e.target.value)}/>
            {filteredName.map(item =>(
            <ItemList key={item.id}  item={item} />
            ))}
        </div>
    )
}

export default Home
