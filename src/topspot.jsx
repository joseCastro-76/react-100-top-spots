import React from 'react';

export default props => (
    <div className="well mb-3">
        <h4>{ props.name }</h4>
        <p>{ props.description }</p>
        <a
            href={"https://maps.google.com/?q=" + props.location}
            target="_blank"
            className="btn btn-info">
            Go To Map
        </a>
    </div>
);