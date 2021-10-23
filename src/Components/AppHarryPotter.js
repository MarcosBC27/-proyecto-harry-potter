import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from '../data/storage';
import Filters from './Filters/Filters';
import Results from './Results/Results';
import HeaderApp from './HeaderApp/HeaderApp';
import '../resources/sass/AppHarryPotter.scss';
import Modal from 'react-modal';
import AddForm from './AddForm/AddForm';
import { urlApi } from '../data/types';
import useWindowDimensions from '../customHooks/useWindowDimensions';

const AppHarryPotter = () => {

    const [stateCharacterList, setStateCharacterList] = useState([]);
    const [stateFilteredList, setStateFilteredList] = useState([]);
    const [stateSearchType, setStateSearchType] = useState(1);
    const [stateAddCharacter, setStateAddCharacter] = useState(false);
    const { width } = useWindowDimensions();


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    Modal.setAppElement('#root');

    const getData = async () => {
        try {
            const responseData = await fetch(`${urlApi}hpCharacters`);
            const jsonData = await responseData.json();
            setStateCharacterList(jsonData);
        } catch (error) {
            console.log(error);
        }
    };

    const eventCloseModal = characterAdded => {
        if (characterAdded) {
            getData();
        }
        setStateAddCharacter(!stateAddCharacter);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (stateCharacterList.length > 0) {
            const validateIsStudent = stateSearchType === 1;
            const filteredArray = stateCharacterList.filter(ch => ch.hogwartsStudent === validateIsStudent);
            setStateFilteredList(filteredArray);
        }
    }, [stateCharacterList, stateSearchType]);

    return (
        <Provider store={store}>
            <div className="main-container">
                {
                    (width > 600) &&
                    <HeaderApp
                        eventAddCharacter={setStateAddCharacter}
                        list={stateCharacterList}
                    />
                }

                <Filters
                    searchType={stateSearchType}
                    eventChangeSearchType={setStateSearchType}
                />
                <Results
                    list={stateFilteredList}
                />

                {
                    (width <= 600) &&
                    <HeaderApp
                        eventAddCharacter={setStateAddCharacter}
                        list={stateCharacterList}
                    />
                }
            </div>
            <Modal
                isOpen={stateAddCharacter}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <AddForm
                    eventCloseModal={eventCloseModal}
                    newId={typeof (stateCharacterList.at(-1)) !== 'undefined' ? (stateCharacterList.at(-1).id) + 1 : 0}
                />
            </Modal>
        </Provider>
    );
};

export default AppHarryPotter;
