import React ,{ useState }from 'react'
import '../index.css'
import { AiOutlineScan } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import Sidebar from './Sidebar';
// import { useNavigate } from 'react-router-dom';


export default function TopNav() {
    // const navigator=useNavigate()
    const [sideBarVisible,setSidebarVisible] =useState(false)
    const sidebarClicked=()=>{
        setSidebarVisible(!sideBarVisible)
    }
    const closeSidebar=() =>{
        setSidebarVisible(!sideBarVisible)
    }
    const scanerClicked=()=>{
        //need to set up the route
        // navigator('scan')
    }
    const searchClicked=()=>{
        //need to set up the route
        // navigator('search')
    }
    return (
        <div>
            
            <Sidebar sideBarVisible={sideBarVisible} closeSidebar={closeSidebar}/>
            <div className='bg-gradient-to-r from-top-nav-lcl to-top-nav-rcl h-[142px] flex'>
                
                {/*AiOutlineScan is the icon of scanning */}
                <div className='w-2/4 text-white mt-14' ><AiOutlineScan className=' text-5xl ml-3' onClick={scanerClicked}/></div>
                {/*FiAlignJustify is the icon of sideBar list,  
                    IoSearch is the icon of searching
                */}
                <div  className=' w-2/4 flex text-5xl flex-row-reverse text-white mt-14'><FiAlignJustify className='mr-3' onClick={sidebarClicked} style={{display:sideBarVisible?'none':'block'}}/><IoSearch className='mr-3' style={{display:sideBarVisible?'none':'block'}} onClick={searchClicked}/></div>
            </div>
            
        </div>
    
    
    
  )
}
