import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UPDATE_FAVOURITE } from '../../data/types';
import deleteImage from '../../resources/images/delete.svg';
import './HeaderApp.scss';

const HeaderApp = ({ data, updateData, eventAddCharacter, list }) => {

    const dropReference = useRef(null);
    const [favouriteListCharacters, setFavouriteListCharacters] = useState([]);

    const executeShow = () => {
        dropReference.current.classList.toggle("show");
    };

    const deleteFavourite = id => {
        const newArray = data.favouriteList.filter(idItem => idItem !== id);
        const updObject = {
            type: UPDATE_FAVOURITE,
            data: {
                favouriteList: newArray,
            },
        }

        updateData(updObject);
    };

    useEffect(() => {

        let newArray = [];

        for(let i = 0; i < data.favouriteList.length; i++) {
            const itemFav = list.find(ch => ch.id === data.favouriteList[i]);
            if (typeof (itemFav) !== 'undefined') {
                newArray.push(itemFav);
            }
        }

        setFavouriteListCharacters(newArray);

    }, [data.favouriteList, list]);


    return (
        <div className="header-container">
            <div className="right-m">
                <div className="dropdown">
                    <button onClick={executeShow} className="dropbtn">Favoritos</button>
                    <div ref={dropReference} className="dropdown-content">
                        {
                            favouriteListCharacters.map(character =>
                                <div className="item" key={`fav_${character.id}`}>
                                    <img className="photo" src={character.image} alt="pht" />
                                    <label>{character.name}</label>
                                    <img className="icon" src={deleteImage} onClick={() => deleteFavourite(character.id)} alt="icon" />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div>
                <button type="button" className="dropbtn" onClick={() => eventAddCharacter(true)}>Agregar</button>
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

HeaderApp.propTypes = {
    eventAddCharacter: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderApp);
