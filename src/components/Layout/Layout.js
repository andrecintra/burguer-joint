import React from 'react';

import PageAux from '../../hoc/PageAux';
import classes from './Layout.css';

const layout = ( props ) => (
    <PageAux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </PageAux>
);

export default layout;