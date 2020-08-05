import React from 'react';
import DifferentAttribute from './Card';

import snappy from '../images/icon-snappy-process.svg';
import affordable from '../images/icon-affordable-prices.svg';
import people from '../images/icon-people-first.svg';

const Different = () => {
    const snappyText = "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.";
    const affordableText = "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.";
    const peopleText = "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.";

    return (
        <div className="different__section">
            <h2 className="different__section__heading">We're different</h2>
            <div className="different__section__card__container">
                <DifferentAttribute 
                    icon={snappy}
                    heading="Snappy Process"
                    subheading={snappyText}
                />
                <DifferentAttribute
                    icon={affordable}
                    heading="Affordable Prices"
                    subheading={affordableText}
                />
                <DifferentAttribute
                    icon={people}
                    heading="People First"
                    subheading={peopleText}
                />
            </div>
        </div>
    )
}

export default Different;