import { Image, ImageGroup } from 'react-fullscreen-image'
import c1 from '.././../assets/culter/c1.webp'
import c2 from '.././../assets/culter/c2.webp'
import c3 from '.././../assets/culter/c3.webp'
import c4 from '.././../assets/culter/c4.webp'
import '../../styles/culter.css' 


const Culter = () => {
    const images = [c1, c2, c3, c4];

    return (
        <div className=" relative  ">
            <ImageGroup >
                <ul className="images">
                    {
                        images.map((i, index) => <li key={index}  >
                            <Image src={i} alt="mountains" />

                        </li>)
                    }

                    {/* {
                        images.map((i, index) => <CulterImage
                           key={index}
                           i={i}
                        >
                        </CulterImage>)
                    } */}
                </ul>
            </ImageGroup>
        </div>
    );
};

export default Culter;