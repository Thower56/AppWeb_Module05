import React from 'react';
import Container from 'react-bootstrap/Container';


export function MainDes({valeurDes, handleClick}){
    return (
        <>
            <Container>
                {valeurDes.map((value, index) => 
                    <img key={index} 
                        src={`../de${value}.png`} 
                        width={104} 
                        className='p-1'
                        alt={value}
                        onClick={() => handleClick(index)}
                    />
                    )
                }
            </Container>
        </>
    )
}
