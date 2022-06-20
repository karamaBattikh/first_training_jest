import React, { useCallback, useEffect } from 'react';

const Modal = ({ title, children, onClose }) => {
    const handleClose = useCallback((e) => {
        if (e.key === "Escape") onClose()
    }, [onClose])

    useEffect(() => {
        document.addEventListener('keydown', handleClose)
        return () => document.removeEventListener('keydown', handleClose)
    }, [handleClose])

    return (
        <div className='wrapper'>
            <div className='content'>
                <div className='conetent__header'>
                    <h1>{title}</h1>
                    <button aria-label='Fermer' className="close" onClick={onClose}>X</button>
                </div>
                <div className='content__body'>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Modal