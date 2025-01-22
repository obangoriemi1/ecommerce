import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext()

const ShopContextProvider = (props) =>{

  const currency = "$";
  const deliver_fee = 10
 const [search, setSearch] = useState('')
 const [showSearch, setShowSearch] = useState(false)
 const [cardItem, setCardItem] = useState({})
 const navigate = useNavigate()

 const addToCard = async(itemId, size) =>{
    if (!size) {
        toast.error('please select product size')
        return;
    }
    let cardData = structuredClone(cardItem)
    if(cardData[itemId]){
        if (cardData[itemId][size]) {
            cardData[itemId][size] += 1;
        }
        else{
            cardData[itemId][size] = 1
        }
    }
    else{
        cardData[itemId] = {};
        cardData[itemId][size] = 1;
    }
    setCardItem(cardData);
 }
    
   const getCardCount = () =>{
    let totalCount = 0
    for(const items in cardItem){
        for(const item in cardItem[items]){
            try {
                if (cardItem[items][item] > 0) {
                    totalCount += cardItem[items][item];
                }
            } catch (error) {
                
            }
        }
    }
    return totalCount;
   }
   
   const updateQuantity = async(itemId, size, quantity) =>{

      let cardData = structuredClone(cardItem);
      cardData[itemId][size] = quantity
      setCardItem(cardData)
   }
   const getCardAmount = () =>{
    let totalAmount = 0
    for(const items in cardItem){
        let itemInfo = products.find((product)=>product._id === items);
        for(const item in cardItem[items]){
            try {
                if(cardItem[items][item] > 0){
                  totalAmount += itemInfo.price * cardItem[items][item]
                }
            } catch (error) {
                
            }
        }
    }
    return totalAmount;
}
    const value = {
      products, currency, deliver_fee,search,setSearch,showSearch,
      setShowSearch,cardItem,addToCard,getCardCount,updateQuantity,
      getCardAmount, navigate
    }

  

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;