import React from 'react'
import AddCard from '../add-card/AddCard';
import Card from '../card/Card';
import './Cards.css'
import { useSelector } from 'react-redux';

const Cards = () => {
    const card = useSelector(state => state.card.cardState)
    const last = card[card.length - 1 ]
    return (
        <section className='cards'>
            {
              card.map((item, id) => 
              (<Card last={last} items={item} key={`${item.title}_${id}`}/>
                )
                )
            }
            <AddCard />
        </section>
    )
}

export default Cards;
