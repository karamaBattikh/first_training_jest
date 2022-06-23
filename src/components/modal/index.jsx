import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import useClickOutSide from 'hooks/useClickOutSide';

import styles from './modal.module.scss';

const Modal = ({ children, isShowing, onClose, title }) => {
  const ref = useRef();

  useClickOutSide(ref, () => onClose());

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

  return isShowing
    ? createPortal(
      <div data-testid="modal" className={styles['modal-overlay']}>
        <div className={styles['modal-wrapper']}>
          <div ref={ref} className={styles.modal}>
            <div className={styles.modal__header}>
              <h4>{title}</h4>
              <button
                type="button"
                data-testid="close"
                className={styles['modal__header--close']}
                onClick={onClose}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className={styles.modal__body}>{children}</div>
          </div>
        </div>
      </div>,
      document.body
    )
    : null;
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  isShowing: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
};
