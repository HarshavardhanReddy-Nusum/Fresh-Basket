import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { useLocation } from 'react-router-dom';

const Loading = () => {

    const { navigate, setCartItems } = useAppContext();
    let { search } = useLocation()
    const query = new URLSearchParams(search)
    const nexturl = query.get('next')

    useEffect(() => {
        setCartItems({})
        if(nexturl) {
            setTimeout(() => {
                navigate(`/${nexturl}`)
            },5000)
        }
    },[nexturl])

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full h-24 w-24 border-4 border-gray-300
        border-t-primary'></div>
    </div>
  )
}

export default Loading