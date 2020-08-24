import React from 'react';

import './styles.css';

interface ButtonProps{
    size: number;
    text: string;
    link: string;
}

const ButtonLink: React.FC<ButtonProps> = ({ size, text, link }) => {
    return(
        <a href={link} style={{fontSize: size + 'vw',}} id="button-link">
            {text}
        </a>
    );
};

export default ButtonLink;
