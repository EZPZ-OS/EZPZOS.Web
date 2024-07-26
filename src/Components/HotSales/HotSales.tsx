import React,{ useState }from 'react'
import HotSalesCard from './HotSalesCard'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
/**
 * This is the component of the hotsales, with child component HotSalesCard.
 * Card picture is imported from Images, may need modification later.
 * Currently , the maximum number of cards is 6 ,which means  at most 6 cards can be added in the hotsales.
 * The function of right button is done and left button is also added.
 * When the card is moved to rightmost/leftmost side, the right/left button is invisible.
 * @returns 
 */

export default function HotSales() {
  const [currentLocation,setCurrentLocation] =useState(0)
  const cardsMoveToogle =()=>{
    if(currentLocation===0){
      setCurrentLocation(currentLocation+480)
    }
    else{
      setCurrentLocation(0)
    }
    
  }
  return (
      <div className="hotSales_text h-[270px] bg-gradient-to-b from-[#FBA96E] to-[#FFCECE78] relative">
        <div className='absolute size-[46px] top-[110px] right-[14px] z-50 bg-[#FFF3F3] rounded-full flex justify-center items-center ' style={{display:currentLocation!==0?'none':'flex'}}  onClick={cardsMoveToogle}>
          <FaChevronRight className="gradient-icon text-[#d17461] text-[30px]"  />
        </div>
        <div className='absolute size-[46px] top-[110px] left-[14px] z-50 bg-[#FFF3F3] rounded-full flex justify-center items-center ' style={{display:currentLocation!==0?'flex':'none'}}  onClick={cardsMoveToogle}>
          <FaChevronLeft className="gradient-icon text-[#d17461] text-[30px]"  />
        </div>
        <span className="font-bold text-[20px]/[30px] ml-[17px]">Hot Sale</span>
        <span className="text-[14px]/[21px] text-[#4D4D4D] ml-[17px]">80% ccustomer has ordered</span>
        <div className="pl-[10px] mt-[15px] flex w-[1000px] transform transition-transform duration-1000 ]" style={{ transform: `translateX(-${currentLocation}px)` }}>
        <HotSalesCard rank={1} dishName="Stewed beef with potato" like_pc={98} like_qty={1002} price={17.2}/>
        <HotSalesCard rank={2} dishName="Stewed beef with pasta" like_pc={95} like_qty={992} price={25}/>
        <HotSalesCard rank={3} dishName="Stewed beef with pasta" like_pc={95} like_qty={992} price={25}/>
        <HotSalesCard rank={4} dishName="Stewed beef with pasta" like_pc={95} like_qty={992} price={25}/>
        <HotSalesCard rank={5} dishName="Stewed beef with pasta" like_pc={95} like_qty={992} price={25}/>
        <HotSalesCard rank={6} dishName="Stewed beef with pasta" like_pc={95} like_qty={992} price={25}/>
        
        </div>
        
    </div>
  )
}


