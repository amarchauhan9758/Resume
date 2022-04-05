import React from 'react';
import Background from '../images/background.jpg'
import '../index.css';
import ProPic from '../images/passP.jpeg';







const Header = () => {
    return (
        <React.Fragment>

            {/* ==================Background Image================ */}
            <div className='relative'>
                
                <img src={Background} alt=" delicious food" className='relative opacity-90 h-96 w-full ' />
                

                <div className=' w-full  absolute top-0 h-full bg-gradient-to-br from-gray-900 to-gray-800   opacity-80' />
            </div>
            
            <div className='absolute top-0 w-full px-32'>
            <div className='flex  py-8 justify-between items-center '>
                    <div className='  mt-24  text-white  tracking-wide '>
                        <h1 className=' text-5xl tracking-widest font-gotham border-b-2 border-teal-600'>Kailash Bhatt</h1>
                        <p className='flex text-xl tracking-widest font-gotham justify-center items-center'><span>Front-End Developer</span></p>
                    </div>
                    <div className='h-48 w-48 '>
                        <img src={ProPic} alt="profile pic" className='rounded-full border border-white shadow-xl' />
                    </div>
                </div>
            </div>
           


            {/* ====================Cart/Button==================== */}




            {/* ==========================Hero===================== */}



            {/* <img src={pizzaIcon} alt="pizza logo" className='h-20 w-24'/> */}

            






        </React.Fragment>
    )
}

export default Header;