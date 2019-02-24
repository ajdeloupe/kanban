import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import Kanban from './kanban';
import * as serviceWorker from './serviceWorker';

let kanbanData = {
    columns: [
        {
            title: 'Backlog',
            cards: ['card1', 'card2', 'card3']
        },
        {
            title: 'Scheduled',
            cards: ['col2 card1', 'col2 card2', 'col2 card3']
        },
        {
            title: 'In Progress',
            cards: ['col3 card1', 'col3 card2', 'col3 card3']
        },
        {
            title: 'Completed',
            cards: ['col4 card1', 'col4 card2', 'col4 card3']
        }
    ]
   
}

function reducer(state = kanbanData, action) {
    switch (action.type) {
        
        case 'ADD_CARD':
            let columns = [...state.columns];
            let modifiedColumn = columns.findIndex(o => o.title == action.title);
            columns[modifiedColumn].cards = columns[modifiedColumn].cards.concat(action.card);
            return Object.assign({}, state, {columns});
        default:
            return state;
    }
}

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
        <Provider store={store}>
            <Kanban />
        </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
