import { useState, useEffect } from 'react'
import TechLogos from './techLogos'
import './imageSlider.css'

function ImageSlider() {
    const imgs = [
        './src/assets/images/apple-pc.jpg',
        './src/assets/images/earpods.jpg',
        './src/assets/images/earpods2.jpg',
        './src/assets/images/gaming-console.jpg',
        './src/assets/images/headphones.jpg',
        './src/assets/images/iphones.jpg',
        './src/assets/images/mobile.jpg',
    ]

    const [count, setCount] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => (prevCount + 1) % imgs.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [imgs.length])

    //create a function for the active dots in the slider
    // useEffect(() => {
    //   setInterval(() => {
        
    //   }, 7000)
    // }, [imgs.length])

    return (
        <div className='slider-container'>
          <div className='tech-logos-container'>
            <TechLogos />
          </div>
          {/* <img src={imgs[count]} className='w-full h-155 animate-slides'/> */}
          <div className='animate-slides'></div>
          <div className='slider-dots-container'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
        </div>
    )
}

export default ImageSlider