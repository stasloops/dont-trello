import React from 'react'
import CardItem from '../card-item/CardItem';
import './CardsItem.css'

const CardsItem = ({newValue, removeItem}) => {
    console.log(newValue);
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
