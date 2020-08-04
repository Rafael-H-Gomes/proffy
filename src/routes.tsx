import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeachersList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" exact component={TeachersList} />
            <Route path="/give-classes" exact component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes;