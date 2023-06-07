/* eslint-disable react/no-unescaped-entities */

import offer1 from '../../assets/offer/offer1.webp'
const AboutHistory = () => {
    return (
        <div className='grid grid-cols-5 max-w-[1140px]   mx-auto'>
            <div className='col-span-5 sm:col-span-3 pt-12 pl-4 pr-12 leading-7 '>
                <h1 className='text-4xl mb-6'>Fox University Stablished Since 1960</h1>
                <p className='text-[#666666] mb-6'>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
                <p className='text-[#666666] mb-6'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p className='text-[#666666] mb-6'>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their</p>
            </div>
            <div className=' hidden sm:block sm:col-span-2'>
                <img src={offer1} alt="" className='h-[590px]' />
            </div>
            
        </div>
    );
};

export default AboutHistory;