import React from 'react';
import PropTypes from 'prop-types';
import icon from '../../resources/images/xLetter.svg';
import { useForm } from 'react-hook-form';
import './AddForm.scss';
import { urlApi } from '../../data/types';


const AddForm = ({ eventCloseModal }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        const newCharacter = {
            "id": 26,
            "image": "http://hp-api.herokuapp.com/images/harry.jpg",
            "house": "Gryffindor",
            "alive": true,
            "hogwartsStudent": data.position === 'student',
            "name": data.name,
            "dateOfBirth": data.dateOfBirth,
            "gender": data.gender,
            "eyeColour": data.eyeColour,
            "hairColour": data.hairColour,
        };

        console.log('newCharacter', newCharacter);

        fetch(`${urlApi}hpCharacters`, {
            method: "POST",
            body: JSON.stringify(newCharacter),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => {
                console.log("respuesta POST", response);
                response.json();
                eventCloseModal(false);
            })
            .catch((e) => console.log(e));
    };

    return (
        <div className="add-container">
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <div className="cell">
                    <h2>Agrega un personaje</h2>
                </div>
                <div className="cell">
                    <img src={icon} onClick={() => eventCloseModal(false)} alt="X" />
                </div>
                <div className="cell">
                    <div className="field">
                        <label htmlFor="name">NOMBRE</label>
                        <input {...register('name', { required: true })} type="text" id="name" name="name" autoComplete="off" />
                        {errors.name && <p>Nombre requerido.</p>}
                    </div>
                </div>
                <div className="cell">
                    <div className="field">
                        <label htmlFor="dateOfBirth">CUMPLEA&Ntilde;OS</label>
                        <input {...register('dateOfBirth', { required: true })} type="text" id="dateOfBirth" name="dateOfBirth" autoComplete="off" />
                        {errors.dateOfBirth && <p>Fecha requerida.</p>}
                    </div>
                </div>
                <div className="cell">
                    <div className="field">
                        <label htmlFor="eyeColour">COLOR DE OJOS</label>
                        <input {...register('eyeColour', { required: true })} type="text" id="eyeColour" name="eyeColour" autoComplete="off" />
                        {errors.eyeColour && <p>Campo requerido.</p>}
                    </div>
                </div>
                <div className="cell">
                    <div className="field">
                        <label htmlFor="hairColour">COLOR DE PELO</label>
                        <input {...register('hairColour', { required: true })} type="text" id="hairColour" name="hairColour" autoComplete="off" />
                        {errors.hairColour && <p>Campo requerido.</p>}
                    </div>
                </div>
                <div className="cell">
                    <div className="field">
                        <label >G&Eacute;NERO</label>
                        <div className="row-radios">
                            <input {...register('gender', { required: true })} type="radio" id="gender" name="gender" value="female" />
                            <label >Mujer</label>
                            <input {...register('gender', { required: true })} type="radio" id="gender" name="gender" value="male" />
                            <label >Hombre</label>
                        </div>
                        {errors.gender && <p>Gen&eacute;ro requerido.</p>}
                    </div>
                </div>
                <div className="cell">
                    <div className="field">
                        <label >POSICI&Oacute;N</label>
                        <div className="row-radios">
                            <input {...register('position', { required: true })} type="radio" id="position" name="position" value="student" />
                            <label htmlFor="position">Estudiante</label>
                            <input {...register('position', { required: true })} type="radio" id="position" name="position" value="staff" />
                            <label htmlFor="position">Staff</label>
                        </div>
                        {errors.position && <p>Posici&oacute;n requerida.</p>}
                    </div>
                </div>
                <div className="row-button">
                    <button type="submit" className={`button-form inactive`}>GUARDAR</button>
                </div>

            </form>

        </div>
    );
};

AddForm.propTypes = {
    eventCloseModal: PropTypes.func.isRequired,
};

export default AddForm;
