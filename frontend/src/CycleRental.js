import React from 'react';

const NAVBAR_CLASS = "flex items-center justify-between px-4 py-2 bg-primary";
const BRANDING_CLASS = "text-2xl font-bold text-black cursor-pointer";
const CARD_CLASS = "bg-card rounded-lg overflow-hidden shadow-lg relative transform transition-transform duration-300 hover:scale-105";
const BUTTON_CONTAINER_CLASS = "flex justify-center items-center bg-black text-white rounded-lg py-2 w-full mt-2";
const BUTTON_CLASS = "w-full py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300";
const PRICE_CLASS = "text-sm font-semibold text-muted-foreground mt-2";
const TEXT_CLASS = "text-lg font-medium mt-1";

const CycleCard = ({ brand, price, image }) => {
    const [buttonClicked, setButtonClicked] = React.useState(false);

    const handleRentButtonClick = () => {
        setButtonClicked(true);
        setTimeout(() => {
            setButtonClicked(false);
        }, 1000); // Reset after 1 second (adjust as needed)
    };

    return (
        <div className={CARD_CLASS}>
            <img src={process.env.PUBLIC_URL + image} alt={brand} className="w-full h-48 object-contain" />
            <div className="p-4">
                <h3 className={TEXT_CLASS}>{brand}</h3>
                <p className={PRICE_CLASS}>{price}</p>
                <div className={BUTTON_CONTAINER_CLASS}>
                    <button
                        className={`${BUTTON_CLASS} ${buttonClicked ? 'animate-pulse' : ''}`}
                        onClick={handleRentButtonClick}
                    >
                        {buttonClicked ? 'Renting...' : 'Rent Now'}
                    </button>
                </div>
            </div>
        </div>
    );
};

const CycleRental = () => {
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className="bg-background text-primary-foreground min-h-screen">
            <nav className={NAVBAR_CLASS}>
                <a href="/" className={BRANDING_CLASS} onClick={reloadPage}>
                    Cycle Rental System
                </a>
            </nav>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                <CycleCard brand="AHOY" price="Rs. 150/day" image="/images/cycle1.jpg" />
                <CycleCard brand="Urban Terrain" price="Rs.300/day" image="/images/cycle2.jpg" />
                <CycleCard brand="GHM" price="Rs.500/day" image="/images/cycle3.jpg" />
            </div>
        </div>
    );
};

export default CycleRental;
