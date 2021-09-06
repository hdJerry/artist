import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Global.style';

const Navbar = () => {
    return (
        <div className="h-16 w-full bg-blue-400 text-base text-white fixed top-0 right-0 left-0 z-20">
            <Container>
                <div className="flex items-center text-xl text-white px-6 w-full h-16 uppercase">
                    <Link to="/">
                        Artists
                    </Link>
                </div>
            </Container>
        </div>
    );
}

export default Navbar;
