import './QuoteRequest.css';
import img1 from '../../assets/quotes/bg_5.jpg.webp'

const QuoteRequest = () => {
    return (
        <div className="relative  bg-cover bg-center flex justify-center items-center     " style={{backgroundImage: `url(${img1})`}}>
            <div className="absolute z-10 top-0 bottom-0 left-0 right-0 opacity-40 bg-[#f1453d]"></div>
            <div className=" grid md:grid-cols-2  max-w-[1140px] mx-auto  ">
                <div></div>
                <div className="px-12 py-24 z-30">
                    <h2 className="text-2xl md:text-5xl  pb-6 font-extrabold text-white " >Request a Quote </h2>
                    <p className=" pb-6 text-white backdrop-contrast-100 opacity-100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                    <div className="grid sm:grid-cols-2 gap-3 quotep  ">
                        <p className=" ">
                            <input type="text" className="w-full pb-3    bg-inherit border-b-[1px] border-white/[.5]  focus:outline-0 " placeholder="First Name" />
                        </p>
                        <p className=" ">
                            <input type="text" className="w-full  pb-3    bg-inherit border-b-[1px] border-white/[.5]  focus:outline-0 " placeholder="Last Name" />
                        </p>
                        <p className='pt-5'>
                            <select id="cars" name="cars" className=' pb-3 w-full  bg-inherit border-b-[1px] border-white/[.5]  focus:outline-0 text-white'>
                                <option value="volvo">Select Your Course</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
                        </p>
                        <p className=" pt-4">
                            <input type="text" className="w-full pb-3    bg-inherit border-b-[1px] border-white/[.5]  focus:outline-0 " placeholder="First Name" />
                        </p>
                        <p className="pt-3">
                            <textarea type="text" rows="2" className="w-full     bg-inherit border-b-[1px] border-white/[.5]  focus:outline-0 " placeholder="Phone" />
                        </p>


                        <div className="flex  z-30  items-center text-white">
                            <p className="text-lg border-[1px] border-secondary bg-secondary py-4 px-10 rounded-full leading-6 hover:bg-inherit hover:text-secondary
                     ">Request A Quote</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default QuoteRequest;