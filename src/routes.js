import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import NewsPage from './pages/NewsPage';
import AuthorPage from './pages/AuthorPage';
import SearchResultsPage from './pages/SearchResultsPage';
import HomePage from './pages/HomePage';
import NewsCategoryPage from './pages/NewsCategoryPage';
import AuthorsPage from './pages/AuthorsPage';
import TravelPage from './pages/TravelPage';

const Routes = (
  <Router>
    {/* Home */}
    <Route exact path="/" component={HomePage} />
    <Route exact path="/news/:id/:title" component={NewsPage} />
    <Route exact path="/news/:category" component={NewsCategoryPage} />
    <Route exact path="/author" component={AuthorsPage} />
    <Route exact path="/author/:id" component={AuthorPage} />
    <Route exact path="/search" component={SearchResultsPage} />
    <Route exact path="/travel" component={TravelPage} />
  </Router>
);

export default Routes;
