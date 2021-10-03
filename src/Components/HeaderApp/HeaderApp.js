import React, { useEffect, useRef, useState } from 'react';
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

        data.favouriteList.map(idItem => {
            const itemFav = list.find(ch => ch.id === idItem);
            if (typeof (itemFav) !== 'undefined') {
                newArray.push(itemFav);
            }
        });

        setFavouriteListCharacters(newArray);

    }, [data.favouriteList]);


    return (
        <div className="header-container">
            <div className="right-m">
                <div className="dropdown">
                    <button onClick={executeShow} className="dropbtn">Favoritos</button>
                    <div ref={dropReference} className="dropdown-content">
                        {
                            favouriteListCharacters.map((character, index) =>
                                <div className="item" key={`fav_${index}`}>
                                    <img className="photo" src={character.image} />
                                    <label>{character.name}</label>
                                    <img className="icon" src={deleteImage} onClick={() => deleteFavourite(character.id)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderApp);
