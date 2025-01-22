import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CardTotal = () => {
    const {getCardAmount, deliver_fee, currency} = useContext(ShopContext)
  return (
    <div className='w-full'>
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTAL"}/>
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm ">
        <div className="flex justify-between ">
            <p>Subtotal</p>
            <p>{currency}{getCardAmount()}.00</p>
        </div>
        <hr/>
        <div className="flex justify-between">
            <p>Shipping Fee</p>
            <p>{currency}{deliver_fee}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
            <b>TOTAL</b>
            <b>{currency}{getCardAmount() === 0 ? 0 : getCardAmount() + deliver_fee}.00</b>
        </div>
      </div>
    </div>
  )
}

export default CardTotal
