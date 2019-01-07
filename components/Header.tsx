import React from 'react';
import Link from 'next/link';

const styles = {
    linkStyle: {
        marginRight: 15,
    }
};

const Header = () => {
    const { linkStyle } = styles;

    return (
        <div>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
        </div>
    );
}

export default Header;