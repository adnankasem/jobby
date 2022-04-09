import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import {
    Logo,

} from '../components';
import {Link} from 'react-router-dom';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                {/* info */}
                <div className="info">
                    <h1>
                        Job <span>tracking</span> app
                    </h1>
                    <p>
                    I'm baby tousled cold-pressed readymade affogato keffiyeh freegan williamsburg kogi fingerstache fanny pack chambray four dollar toast pabst literally. 
                    </p>
                    <Link to='/register' className='btn btn-hero'>
                        Login/Register
                    </Link>
                </div>
                <img src={main} alt="job hunt" className='img main-img' />
            </div>
        </Wrapper>
    )
}



export default Landing
