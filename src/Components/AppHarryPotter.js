import React, { useEffect, useState } from 'react';
import Filters from './Filters/Filters';
import HeaderApp from './HeaderApp/HeaderApp';
import Results from './Results/Results';
import { Provider } from 'react-redux';
import store from '../data/storage';
import '../resources/sass/AppHarryPotter.scss';

const AppHarryPotter = () => {

    const [stateCharacterList, setStateCharacterList] = useState([]);
    const [stateFilteredList, setStateFilteredList] = useState([]);
    const [stateSearchType, setStateSearchType] = useState(1);
    const [stateAddCharacter, setStateAddCharacter] = useState(false);
    const urlApi = 'https://my-json-server.typicode.com/MarcosBC27/proyecto-harry-potter-api/';

    const getData = async () => {
        fetch(`${urlApi}hpCharacters`)
            .then((resp) => resp.json())
            .then((data) => {
                setStateCharacterList(data);
            })
            .catch((e) => console.log(e))
            .catch((e) => console.log(e));
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
    }, [stateCharacterList,stateSearchType]);

    return (
        <Provider store={store}>
            <div className="main-container">
                <HeaderApp
                    eventAddCharacter={setStateAddCharacter}
                    list={stateCharacterList}
                />
                <Filters
                    searchType={stateSearchType}
                    eventChangeSearchType={setStateSearchType}
                />
                <Results
                    list={stateFilteredList}
                />
            </div>
        </Provider>
    );
};

export default AppHarryPotter;
