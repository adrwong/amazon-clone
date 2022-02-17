import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2uq7LoDeXJzri2alNWyHnyUysNRjiaVr5W2atpe8Evr2Qq5lMkOCUNFzqo_AnIh0SOw&usqp=CAU'
            alt=''/>
            <div>
                <h2 className='checkout__title'>Your shopping Basket</h2>
                {/* basket item */}
                {/* basket item */}
                {/* basket item */}
                {/* basket item */}
                {/* basket item */}
            </div>
        </div>
        <div>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout