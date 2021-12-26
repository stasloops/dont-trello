import React, { useState } from 'react'
import AddItem from '../add-item/AddItem';
import CardsItem from '../cards-item/CardsItem';

function Item() {
    const [newValue, setNewValue] = useState([])
    const newPost = (newPost) =>{
        setNewValue([...newValue, newPost])
    }
    const removeItem = (id) => {
        setNewValue(newValue.filter(item => item.id !== id))
    }
    return (
        <div>
            <CardsItem removeItem={removeItem} newValue={newValue}/>
            <AddItem  Post={newPost} />
        </div>
    )
}

export default Item
