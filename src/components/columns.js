import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';

function Column({cards, title, onAddCard}) {
    return (
        <div className="kanban-column">
            <h1>{title}</h1>
            {cards.map(o => <Card text={o} />)}
            <input type="button" value="Add Card" onClick={() => onAddCard(title, "new card")} />
        </div>
    );
}
export default Column