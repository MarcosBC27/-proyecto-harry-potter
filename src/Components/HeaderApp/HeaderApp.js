import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { UPDATE_FAVOURITE } from '../../data/types';
import deleteImage from '../../resources/images/delete.svg';
import './HeaderApp.scss';

const HeaderApp = ({ data, updateData, eventAddCharacter }) => {

    const dropReference = useRef(null);

    const executeShow = () => {
        dropReference.current.classList.toggle("show");
    };

    const deleteFavourite = id => {
        const newArray = data.favouriteList.filter(character => character.id !== id);
        const updObject = {
            type: UPDATE_FAVOURITE,
            data: {
                favouriteList: newArray,
            },
        };

        updateData(updObject);
    };

    return (
        <div className="header-container">
            <div className="right-m">
                <div class="dropdown">
                    <button onClick={executeShow} className="dropbtn">Dropdown</button>
                    <div ref={dropReference} className="dropdown-content">
                        {
                            data.favouriteList.map(character =>
                                <div className="item">
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
