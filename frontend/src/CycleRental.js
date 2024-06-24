import React from 'react';

const NAVBAR_CLASS = "flex items-center justify-between px-4 py-2 bg-primary";
const CARD_CLASS = "bg-card rounded-lg overflow-hidden shadow-lg relative";
const BUTTON_CONTAINER_CLASS = "flex justify-center items-center bg-black text-white rounded-lg py-2";
const BUTTON_CLASS = "px-2 py-2 rounded-lg hover:bg-gray-800";
const PRICE_CLASS = "text-sm font-semibold text-muted-foreground mt-2";
const TEXT_CLASS = "text-lg font-medium mt-1";

const CycleCard = ({ brand, price, image }) => {
    return (
        <div className={CARD_CLASS}>
            <img src={process.env.PUBLIC_URL + image} alt={brand} className="w-full h-48 object-contain" />
            <div className="p-4">
                <p className={PRICE_CLASS}>{price}</p>
                <div className={BUTTON_CONTAINER_CLASS}>
                    <button className={BUTTON_CLASS}>Rent Now</button>
                </div>
                <h3 className={TEXT_CLASS}>{brand}</h3>
            </div>
        </div>
    );
};

const CycleRental = () => {
    return (
        <div className="bg-background text-primary-foreground min-h-screen">
            <nav className={NAVBAR_CLASS}>
                <div className="text-xl font-bold">
                    Cycle Rental System
                </div>
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
