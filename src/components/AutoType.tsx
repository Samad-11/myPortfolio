'use client'
import { TypeAnimation } from 'react-type-animation';

const AutoType = () => {
    const text = ['I am Programmer',
        1000,
        'I am Web Developer',
        1000,
        'I am App Developer',
        1000,
    ]
    return (
        <TypeAnimation
            sequence={text}
            wrapper="span"
            speed={30}
            className='font-bold'

            style={{
                fontSize: '2em', display: 'inline-block', textShadow: '2px 2px 4px #BF83BF'
            }}
            repeat={Infinity}

        />
    );
};

export default AutoType