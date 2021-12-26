import React, { useState, useEffect } from 'react'
import './AddCard.css'
import { useDispatch } from 'react-redux'
import { setCurrentCard } from '../../store/addCardSlise/addCardSlise'

const AddCard = () => {
    const dispatch = useDispatch()
    const [add, setAdd] = useState(false)
    const [addValue, setAddValue] = useState({title: ''})
    
   
    const cardItem = () => {
        const newCard ={
            ...addValue, id: Date.now()
        }
        dispatch(setCurrentCard(newCard))
        setAddValue({title: ''})
        setAdd(false)
    }
    const addTrue = () =>{
        setAdd(true)
    }
    const addFalse = () =>{
        setAdd(false)
    }
    return (<>
        {
            <div className='card-add__card-item'>
                {
                    add === false ?
                    <div onClick={addTrue} className='card-add__card__add'>
                        + Добавить колонку
                    </div>
                    :
                    <div className='card-add__card-item__add-active'>
                        <input 
                            className='card-add__card-item__input'
                            type="text"
                            placeholder="Ввести заголовок для этой карточки"
                            value={addValue.title}
                            onChange={e => setAddValue({title: e.target.value})}
    
                        />
                        <button onClick={addValue.title.length === 0 ? null : cardItem} className='card-add__card-item__button-add'>
                            Добавить колонку
                        </button>
                        <button onClick={addFalse} className='card-add__card-item__button-del'>
                            x
                        </button>
                    </div>   
                } 
            </div>
        }
   </> )
}

export default AddCard
