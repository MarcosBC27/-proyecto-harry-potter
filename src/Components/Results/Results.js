import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './Results.scss';


const Results = ({ list }) => {

    return (
        <div className="results-container">
            {
                list.map(character =>
                    < Card
                        key={`card_${character.id}`}
                        detailObject={character}
                    />
                )
            }
        </div>
    );
};

Results.propTypes = {
    list: PropTypes.array.isRequired,
};

export default Results;
