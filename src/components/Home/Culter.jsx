 
import c1 from '.././../assets/culter/c1.webp'
import c2 from '.././../assets/culter/c2.webp'
import c3 from '.././../assets/culter/c3.webp'
import c4 from '.././../assets/culter/c4.webp' 
import CulterImage from './CulterImage'


const Culter = () => {
    const images = [c1, c2, c3, c4];

    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-4' >
            {

                images.map((img, index) => <CulterImage
                    key={index}
                    img={img}
                >
                </CulterImage>)
            }
 
        </div>
 
    );
};

export default Culter;