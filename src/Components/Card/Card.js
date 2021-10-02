import React from 'react';
import favouriteIcon from '../../resources/images/favourite.svg';
import preFavouriteIcon from '../../resources/images/preFavourite.svg';
import './Card.scss';

const Card = ({ detailObject }) => {
    const { image,
        house,
        alive,
        hogwartsStudent,
        hogwartsStaff,
        isFavourite,
        name,
        dateOfBirth,
        gender,
        eyeColour,
        hairColour } = detailObject;



    return (
        <div className="card-container">
            <div className="card">
                <div className="image">
                    <img src={image} />
                </div>
                <div className="detail">
                    <div className="title">
                        <label>{`${alive ? 'VIVO' : 'FINADO'}/${hogwartsStudent ? 'ESTUDIANTE':'STAFF'}`}</label>
                        <img src={preFavouriteIcon} />
                    </div>
                    <div className="name">
                        {name}
                    </div>
                    <label><strong>Cumplea&ntilde;os: </strong>{dateOfBirth}</label>
                    <label><strong>G&eacute;nero: </strong>{gender}</label>
                    <label><strong>Color de ojos: </strong>{eyeColour}</label>
                    <label><strong>Color de pelo: </strong>{hairColour}</label>
                </div>
            </div>
        </div>
    );
};

export default Card;
