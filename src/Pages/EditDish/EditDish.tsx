import React, { useState } from 'react'
import DeleteDishToast from '../../Components/DeleteMenu/DeleteDishToast'

const EditDish = () => {
    const [isShow, setIsShow] = useState(false)
    const [dishId, setDishId] = useState(0)

    const handleDelete = () => {
        setIsShow(true)
    }
    const hideToast = () => {
        setIsShow(false)
    }

    return (
        <div className="relative">
            <span className="absolute right-[20px] top-[32px] leading-9 bg-red-500 text-white text-base px-2 rounded" onClick={handleDelete}>Delete Item</span>
            {isShow ? <DeleteDishToast dishId={dishId} hideToast={hideToast}/> : ''}
        </div>
    )
}

export default EditDish