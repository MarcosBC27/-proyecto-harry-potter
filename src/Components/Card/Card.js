import React from 'react';
import favouriteIcon from '../../resources/images/favourite.svg';
import preFavouriteIcon from '../../resources/images/preFavourite.svg';
import './Card.scss';

const Card = ({ detailObject}) => {
    const { image,
        house,
        alive,
        hogwartsStudent,
        name,
        dateOfBirth,
        gender,
        eyeColour,
        hairColour } = detailObject;
    let houseColour = '';

    switch (house) {
        case "Gryffindor":
            houseColour = 'back-gf';
            break;
        case "Slytherin":
            houseColour = 'back-sy';
            break;
        case "Hufflepuff":
            houseColour = 'back-hu';
            break;
        case "Ravenclaw":
            houseColour = 'back-ra';
            break;
        default:
            break;
    }



    return (
        <div className="card-container">
            <div className="card">
                <div className={`image ${houseColour}`}>
                    <img src={image} />
                </div>
                <div className={`detail ${alive ? 'back-a' : 'back-f'}`}>
                    <div className="title">
                        <label>{`${alive ? 'VIVO' : 'FINADO'}/${hogwartsStudent ? 'ESTUDIANTE' : 'STAFF'}`}</label>
                        <img src={favouriteIcon} />
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
