import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import * as styles from './modal.module.scss';

const Modal = ({ children, onClose, title }) => {
  const handleClose = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleClose);
    return () => document.removeEventListener('keydown', handleClose);
  }, [handleClose]);

  return createPortal(
    <div className={styles.wrapper}>
      <div className="content">
        <div className="conetent__header">
          <h1>{title}</h1>
          <button data-testid="close" className="close" onClick={onClose}>
            X
          </button>
        </div>
        <div className="content__body">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  title: PropTypes.string,
};
