import React from 'react';

const Word = (props) =>{
    return(
        <div>
            {
                isNaN(props.word)?
                    <p>The word is {props.word}</p>
                    :
                    <p>The number is {props.word}</p>
            }
        </div>
    )
}

export default Word;