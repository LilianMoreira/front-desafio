import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './pages/index/index';
import Insert from './pages/insert/insert';
import Details from './pages/details/details';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component ={Index}/>
            <Route path = "/CriarCandidato" component={Insert} />
            <Route path = "/DetailsCandidato" component={Details} />
        </Switch>
    </BrowserRouter>    
)

export default Routes;