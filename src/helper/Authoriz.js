import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './Util';

const Authoriz = ({layout: Layout , component:Component, ...rest}) => {
    console.log(isLogin());
    return (
        <Route {...rest} render={props => (
            isLogin() ?
            <Layout>
                <Component {...props}/>
            </Layout>
            :     <Redirect to="/sign" />
        )} />
    );
};

export default Authoriz;