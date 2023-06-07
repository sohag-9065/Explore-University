 
import offer1 from '../../assets/offer/offer1.webp'
import offers from '../../data/offerData';
import OfferCard from './OfferCard';


const Offer = () => {
    return (
        <div className='grid grid-cols-5 max-w-[1140px] px-6 ss:px-16 md:px-6  mx-auto'>
            <div className='col-span-5 sm:col-span-3 pt-12  pr-6'>
                <h1 className='text-4xl mb-6'>What We Offer</h1>
                <p className='text-[#666666] mb-6'>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
                <div className='grid  grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-3 '>
                {
                    offers.map((offer, index) => <OfferCard
                        key={index}
                        offer={offer}
                    ></OfferCard>)
                }
            </div>
            </div>
            <div className='col-span-2 hidden sm:block'>
                <img src={offer1} alt="" className='h-full'/>
            </div>
        </div>
    );
};

export default Offer;