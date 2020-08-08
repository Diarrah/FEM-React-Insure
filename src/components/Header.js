import React from 'react';
import heroImage from '../images/image-intro-desktop.jpg';

const Header = () => (
    <div className="header">
        <div className="header__textbox">
            <hr className="header__line" />
            <h1 className="header__textbox__heading">Humanizing your insurance.</h1>
            <p className="header__textbox__subheading">
                Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.
            </p>
            <button className="btn btn--gray">View Plans</button>
        </div>
        <img className="header__hero__image" src={heroImage} alt="Family of 4" />
    </div>
)

export default Header;