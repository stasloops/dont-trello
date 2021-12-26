import React, {useState, useEffect} from 'react'
import './CardItem.css'

const CardItem = ({item, removeItem}) => {
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

     const deleteCardItem = () =>{
        removeItem(item.id)
     }

    return (<>
      <div>
    {
    !cardItemChange &&
        <div className='card-item'>
            <div onClick={changeCardItemTrue} >
               { newState.length > 0 ? newState : item.title }
            </div>
            <div onClick={deleteCardItem} className='card-item__del'>
                X
            </div>
        </div>
    }
        {  cardItemChange &&
                <div className='change'>
                    <div>
                        <input 
                            className='change-input'
                            type="text"
                            placeholder={newState.length > 0 ? newState : item.title}
                            value={cardItem}
                            onChange={e => setCardItem(e.target.value)}
    
                        />
                        <button onClick={cardItem.length === 0 ? null : changeCardItem}  className='change-button__change'>
                            Изменить
                        </button>
                        <button onClick={changeCardItemFalse} className='change-button__back'>
                            x
                        </button>
                    </div>
                </div>
            }
           </div> 
   </>)
}

export default CardItem
