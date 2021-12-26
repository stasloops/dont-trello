import React, { useState, useEffect } from 'react'
import './AddItem.css'

const AddItem = ({Post}) => {
    const [add, setAdd] = useState(false)
    const [addValue, setAddValue] = useState({title: ''})
    
   
    const itemAdd = () => {
        const newPost = {
            ...addValue, id: Date.now()
        }
        Post(newPost)
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
        <div className='item-add__item-item'>
            {
                add === false ?
                <div onClick={addTrue} className='item-add__item__add'>
                    + Добавить карточку
                </div>
                :
                <div className='item-add__item-item__add-active'>
                    <input 
                        className='item-add__item-item__input'
                        type="text"
                        placeholder="Ввести заголовок для этой карточки"
                        value={addValue.title}
                        onChange={e => setAddValue({title: e.target.value})}

                    />
                    <button onClick={addValue.title.length === 0 ? null : itemAdd} className='item-add__item-item__button-add'>
                        Добавить карточку
                    </button>
                    <button onClick={addFalse} className='item-add__item-item__button-del'>
                        x
                    </button>
                </div>   
            } 
        </div>
    }
    </>)
}

export default AddItem
