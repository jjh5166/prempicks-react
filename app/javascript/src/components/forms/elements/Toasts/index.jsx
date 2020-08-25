import React, { Fragment, useState } from "react";
import Toast from 'react-bootstrap/Toast';
import { ToastsContainer } from './styled';

const ErrorDisplay = ({ errors }) => {
  const [show, setShow] = useState(true);
  return (
    <Fragment>
      <Toast onClose={() => setShow(false)} show={show} delay={8000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Whoops!</strong>
        </Toast.Header>
        <Toast.Body>
          {errors.map((err, i) => {
            return (
              <div key={"err" + i}>{err}</div>
            );
          })}
        </Toast.Body>
      </Toast>
    </Fragment>
  );
};

export { ToastsContainer, ErrorDisplay }; 