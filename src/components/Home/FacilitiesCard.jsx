 
const FacilitiesCard = ({logo, title, bgColor, description}) => {
    return (
        <div className={`${bgColor}`}>
            <p>{logo}</p>
            <h3>{title}</h3>
            <p>{description}</p>

        </div>
    );
};

export default FacilitiesCard;