import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UPDATE_FAVOURITE } from '../../data/types';
import favouriteIcon from '../../resources/images/favourite.svg';
import preFavouriteIcon from '../../resources/images/preFavourite.svg';
import useWindowDimensions from '../../customHooks/useWindowDimensions';
import './Card.scss';


const Card = ({ data, updateData, detailObject }) => {
    const {
        id,
        image,
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


    const [stateIsFavourite, setStateIsFavourite] = useState(false);
    const { height, width } = useWindowDimensions ();

    const addFavourite = idUpdate => {
        const numberOfFavourite = data.favouriteList.length;
        const validateObject = data.favouriteList.find(element => element === idUpdate);
        if (numberOfFavourite < 5 && typeof (validateObject) === 'undefined') {

            const updObject = {
                type: UPDATE_FAVOURITE,
                data: {
                    favouriteList: [
                        ...data.favouriteList,
                        idUpdate,
                    ],
                },
            };

            updateData(updObject);
        }
    };

    useEffect(() => {

        const favouriteObject = data.favouriteList.find(idItem => idItem === id);
        setStateIsFavourite(typeof (favouriteObject) !== 'undefined');

    }, [data.favouriteList, id]);

    return (
        <div className="card-container">
            <div className="card">
                <div className={`image ${houseColour}`}>
                    <img src={image} alt="pht" />
                </div>
                <div className={`detail ${alive ? 'back-a' : 'back-f'}`}>
                    {
                        (width > 600 && height > 600) ?
                            <>
                                <div className="title">
                                    <div>{`${alive ? 'VIVO' : 'FINADO'}/${hogwartsStudent ? 'ESTUDIANTE' : 'STAFF'}`}</div>
                                    <img src={stateIsFavourite ? favouriteIcon : preFavouriteIcon} onClick={() => addFavourite(id)} alt="icon" />
                                </div>
                                <div className="name">
                                    {name}
                                </div>
                                <label><strong>Cumplea&ntilde;os: </strong>{dateOfBirth}</label>
                                <label><strong>G&eacute;nero: </strong>{gender}</label>
                                <label><strong>Color de ojos: </strong>{eyeColour}</label>
                                <label><strong>Color de pelo: </strong>{hairColour}</label>
                            </>
                            :
                            <>
                                <div className="name">
                                    {name}
                                </div>
                                <div className="title">
                                    <div>{`${alive ? 'VIVO' : 'FINADO'}/${hogwartsStudent ? 'ESTUDIANTE' : 'STAFF'}`}</div>
                                    <img src={stateIsFavourite ? favouriteIcon : preFavouriteIcon} onClick={() => addFavourite(id)} alt="icon" />
                                </div>

                            </>

                    }


                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => (
    {
        data: {
            favouriteList: state.favouriteList,
        },
        props: ownProps,
    });

const mapDispatchToProps = dispatch => ({
    updateData(data) {
        dispatch(data);
    },
});

Card.propTypes = {
    detailObject: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)

