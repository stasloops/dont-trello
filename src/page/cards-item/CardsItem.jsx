import React from 'react'
import CardItem from '../card-item/CardItem';
import './CardsItem.css'

const CardsItem = ({newValue, removeItem}) => {
    return (<>
          {
        newValue ?
        newValue.map((item) =>
        (
            <CardItem removeItem={removeItem} key={`${item.title}_${item.id}`} item={item} />
        )
        )
        :
        null
        }
    </>)
}

export default CardsItem;
