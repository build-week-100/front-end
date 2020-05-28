import React from 'react'
import { Card, Button, CardTitle, CardText, Container, Row, Col } from 'reactstrap';

const ItemList = (props) => {
    const {item} = props

console.log('what props', props)
    return(
        <Container>
             <div className='whatsthis2'>
                    <Col  className='ItemCard2'>
                     <Row >   
                    <Card className='ItemCard' body inverse color="warning">
                    <CardTitle>{item.product_name}</CardTitle>
                    <CardText>{item.product_category}</CardText>
                    <CardText>{ item.product_description}</CardText>
                    <CardText>{item.country}</CardText>
                    <CardText>{item.market_name}</CardText>
                    <CardText>{item.product_price}</CardText>
                    <CardText>{item.product_quantity}</CardText>
                     </Card>
                     </Row>
                </Col>
            </div>
        </Container>
                )
           


            
     
}

export default ItemList
