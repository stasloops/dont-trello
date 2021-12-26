import React, { useState } from 'react'
import './Card.css'
import { useDispatch } from 'react-redux'
import { setDeleteСard } from '../../store/addCardSlise/addCardSlise';
import Item from '../item/Item';

const Card = ({ items, last }) => {
    const dispatch = useDispatch()
    const [cardItemChange, setCardItemChange] = useState(false)
    const [cardItem, setCardItem] = useState('')
    const [newState, setNewState] = useState('')
    
    const changeCardItemTrue = () => {
        setCardItemChange(true)

     }
     const changeCardItemFalse = () => {
        setCardItemChange(false)
     }
     const changeCardItem = () => {
       setNewState(cardItem)
       setCardItemChange(false)
     }
    const delCard = () => {
        dispatch(setDeleteСard(items.id))
    }
    
    return (<>
    {
        <div className='card'>
    {
       <div className='c'>
            <h6 onClick={changeCardItemTrue} className='card-title'>
                {
                    newState.length > 0 ? newState :
                        items.title
                }
            </h6>
            {
                last.id === items.id ?
                <span onClick={delCard} className='card-delete'>X</span>
                :
                null
            }
            <Item />
        </div>
        }
        {  cardItemChange &&
            <div className='change change-card'>
                <div>
                    <input 
                        className='change-input change-input__card'
                        type="text"
                        placeholder={newState > 0 ? newState : items.title}
                        value={cardItem}
                        onChange={e => setCardItem(e.target.value)}

                    /><br/>
                    <button onClick={cardItem === 0 ? null : changeCardItem}  className='change-button__change'>
                        Изменить
                    </button>
                    <button onClick={changeCardItemFalse} className='change-button__back'>
                        x
                    </button>
                </div>
            </div>
        }
        </div>
    }
    </>)
}

export default Card;
