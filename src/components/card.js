import React from 'react';
import PropTypes from 'prop-types';

function Card({text}) {
    return (
        <div className="kanban-card">
            <p>{text}</p>
        </div>
    );
}
export default Card