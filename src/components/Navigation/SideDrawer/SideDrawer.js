import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import PageAux from '../../../hoc/PageAux/PageAux'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <PageAux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </PageAux>

    )
}

export default SideDrawer
