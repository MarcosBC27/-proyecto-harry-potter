import React from 'react';
import Card from '../Card/Card';
import './Results.scss';


const Results = ({list}) => {

    return (
        <div className="results-container">
            {
                list.map(character =>
                    < Card
                        detailObject={character}
                    />
                )
            }
        </div>
    );
};

export default Results;
