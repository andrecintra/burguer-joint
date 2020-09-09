import React from 'react'
import classes from './Modal.css'
import PageAux from '../../../hoc/PageAux'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {
    return (
        <PageAux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div className={classes.Modal} style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
                {props.children}
            </div>
        </PageAux>
    )
}

export default Modal