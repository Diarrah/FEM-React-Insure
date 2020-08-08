import React from 'react';

const DifferentAttribute = ({ icon, heading, subheading }) => (
    <div className="different__attribute__card">
        <img className="different__attribute__card__icon" src={icon} alt="" />
        <div className="different__attribute__card__textbox">
            <h3 className="different__attribute__card__heading">{heading}</h3>
            <p className="different__attribute__card__subheading">{subheading}</p>
        </div>
    </div>
)

export default DifferentAttribute;