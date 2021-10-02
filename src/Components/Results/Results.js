import React from 'react';
import { hpCharacters } from '../../data/types';
import Card from '../Card/Card';
import './Results.scss';


const Results = () => {
    return (
        <div className="results-container">
            {
                hpCharacters.map(character =>
                    <Card
                        detailObject={character}
                    />
                )
            }
        </div>
    );
};

export default Results;
