import React from 'react';
import icon from '../../resources/images/xLetter.svg';
import './AddForm.scss';


const AddForm = ({ eventCloseModal }) => {
    return (
        <div className="add-container">
            <form className="form-container">
                <div className="cell">
                    <h2>Agrega un personaje</h2>
                </div>
                <div className="cell">
                    <img src={icon} onClick={() => eventCloseModal(false)} />
                </div>
                <div className="cell">
                    <div className="field">
                        <label htmlFor="name">NOMBRE</label>
                        <input type="text" id="name" name="name" />
                    </div>
                </div>
                <div className="cell">
                    <div className="field">
                        <label htmlFor="dateOfBirth">CUMPLEA&Ntilde;OS</label>
                        <input type="text" id="dateOfBirth" name="dateOfBirth" />
                    </div>
                </div>
                <div className="cell">
                    <div className="field">
                        <label htmlFor="eyeColour">COLOR DE OJOS</label>
                        <input type="text" id="eyeColour" name="eyeColour" />
                    </div>
                </div>
                <div className="cell">
                    <div className="field">
                        <label htmlFor="hairColour">COLOR DE PELO</label>
                        <input type="text" id="hairColour" name="hairColour" />
                    </div>
                </div>
                <div className="cell">
                    <div className="field">
                        <label >G&Eacute;NERO</label>
                        <div className="row-radios">
                            <input type="radio" id="gender-f" name="gender" value="female" />
                            <label for="gender-f">Mujer</label>
                            <input type="radio" id="gender-m" name="gender" value="male" />
                            <label for="gender-m">Hombre</label>
                        </div>
                    </div>
                </div>
                <div className="cell">
                    <div className="field">
                        <label >POSICI&Oacute;N</label>
                        <div className="row-radios">
                            <input type="radio" id="position-s" name="position" value="student" />
                            <label for="position-s">Estudiante</label>
                            <input type="radio" id="position-stf" name="position" value="staff" />
                            <label for="position-stf">Staff</label>
                        </div>
                    </div>
                </div>
                <div className="row-button">
                    <button type="button" className={`button-form inactive`}>GUARDAR</button>
                </div>

            </form>

        </div>
    );
};

export default AddForm;
