import React from 'react';

function BoxText({data}) {
    return (
        <>
            {
                data.map((item) => (
                    <div className="list-text__item" key={item.id}>
                            <h3>{ item.content }</h3>
                            <div className='main__text'>
                                <img src={item.logo} alt="icon"/> 
                                <p>{item.text}</p>
                            </div>
                    </div>
                ))
            }
        </>
    );
}

export default BoxText;