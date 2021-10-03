import React, { useEffect, useState } from 'react';
import Filters from './Filters/Filters';
import HeaderApp from './HeaderApp/HeaderApp';
import Results from './Results/Results';
import { Provider } from 'react-redux';
import store from '../data/storage';
import '../resources/sass/AppHarryPotter.scss';

const AppHarryPotter = () => {

    const [stateCharacterList, setStateCharacterList] = useState([]);
    const [stateSearchType, setStateSearchType] = useState(1);
    const [stateAddCharacter, setStateAddCharacter] = useState(false);
    const urlApi = 'https://my-json-server.typicode.com/MarcosBC27/proyecto-harry-potter-api/';

    const getData = async() =>{
        fetch(`${urlApi}hpCharacters`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            setStateCharacterList(data);
        })
        .catch((e) => console.log(e))
        .catch((e) => console.log(e)); 
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Provider store={store}>
            <div className="main-container">
                <HeaderApp  
                    eventAddCharacter={setStateAddCharacter}
                />
                <Filters
                    searchType={stateSearchType}
                    eventChangeSearchType={setStateSearchType}
                />
                <Results 
                    list={stateCharacterList}
                />
            </div>
        </Provider>
    );
};

export default AppHarryPotter;
