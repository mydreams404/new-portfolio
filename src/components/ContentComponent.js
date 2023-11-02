import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

function ContentComponent() {
  const location = useLocation();

  return (
    <CSSTransition
      in={true} // Use a condition to trigger the transition
      timeout={300} // Transition duration in milliseconds
      classNames="page"
      key={location.key} // Use the location key to reset the transition
      unmountOnExit
    >
      <div className="page-content">
        {/* Content for your section */}
        <p>TEST</p>
      </div>
    </CSSTransition>
  );
}

export default ContentComponent;
