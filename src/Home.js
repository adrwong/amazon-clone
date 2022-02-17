import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
      <div className='home'>
        <div className='home__container'>
            <img 
            className='home__image'
            src='https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg' 
            alt=''/>
            <div className='home__row'>
                <Product id={1} title='The lean startup' price={29.99} 
                image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                rating={5}/>
                <Product id={2} title='CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin | Body Cream with Hyaluronic Acid and Ceramides | Normal | Fragrance Free | 19 Oz' price={16.25} 
                image='https://m.media-amazon.com/images/I/61S7BrCBj7L._SL1000_.jpg'
                rating={5}/>
            </div>
            <div className='home__row'>
                <Product id={3} title='Bluetooth Headset [Upgraded] Active Noise Cancelling Bluetooth Headphones, Bluetooth Earpiece CVC8.0 Dual-Mic Hands-Free V5.0 Comfortable Earbud 240 Hrs Standby Time for Business/Workout/Driving' price={39.99} 
                image='https://m.media-amazon.com/images/I/71l69rJi6iL._AC_SL1500_.jpg'
                rating={4}/>
                <Product id={4} title='The lean startup' price={29.99} 
                image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                rating={5}/>
                <Product id={5} title='CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin | Body Cream with Hyaluronic Acid and Ceramides | Normal | Fragrance Free | 19 Oz' price={16.25} 
                image='https://m.media-amazon.com/images/I/61S7BrCBj7L._SL1000_.jpg'
                rating={5}/>
            </div>
            <div className='home__row'>
                <Product id={6} title='CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin | Body Cream with Hyaluronic Acid and Ceramides | Normal | Fragrance Free | 19 Oz' price={16.25} 
                image='https://m.media-amazon.com/images/I/61S7BrCBj7L._SL1000_.jpg'
                rating={5}/>
            </div>
        </div>
    </div>
  )
}

export default Home