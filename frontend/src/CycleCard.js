import React, { useState } from 'react';
import { updateCycleAvailability } from './api';

const CARD_CLASS = "bg-card rounded-lg overflow-hidden shadow-lg relative transform transition-transform duration-300 hover:scale-105";
const BUTTON_CONTAINER_CLASS = "flex justify-center items-center bg-black text-white rounded-lg py-2 w-full mt-2";
const BUTTON_CLASS = "w-full py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300";
const PRICE_CLASS = "text-sm font-semibold text-muted-foreground mt-2";
const TEXT_CLASS = "text-lg font-medium mt-1";

const CycleCard = ({ _id, brand, price, image, available }) => {
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleRentButtonClick = () => {
        if (!buttonClicked && available === 1) {
            console.log('Rent button clicked for cycle:', _id);
            setButtonClicked(true);

            updateCycleAvailability(_id, 0)
                .then(response => {
                    console.log('Availability updated successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error updating availability:', error);
                });

            setTimeout(() => {
                setButtonClicked(false);
            }, 1000);
        }
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
                        disabled={available !== 1 || buttonClicked}
                    >
                        {buttonClicked ? 'Renting...' : (available === 1 ? 'Rent Now' : 'Unavailable')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CycleCard;
