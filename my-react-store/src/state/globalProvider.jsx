import {useState} from 'react';
import GlobalContext from './globalContext';

const GlobalProvider = (props) => {
    //const [state, setState] = useState(initialValue);
    const [user, setUser] = useState({
        id: 65,
        firstName: 'Gojo',
        lastName: 'Satoru',
        email: ' gsatoru.thechosen1@jjk.edu',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4W66VB-aRPUrqwhyeVkmCeuhLMFYq1KzsOGf0d9MDw&s',
        address: {
            street: 'Mt. Mushiro Foothills',
            city: 'Tokyo',
            state: 'JP',
            zip: '91220',
        }
    })

    return(
        
        <GlobalContext.Provider value={{
            user //user: user
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;