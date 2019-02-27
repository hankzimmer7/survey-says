import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import SurveyView from './components/SurveyView/SurveyView';
import LoginContainer from './components/Login/LoginContainer';
import Analytics from './components/Analytics/Analytics.component';
import Homepage from './components/Homepage/Homepage';
import SurveyList from './components/SurveyList/SurveyList';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/closed-surveys/my-surveys" />
          <Route path="/closed-surveys/my-collaborations" />
          <Route path="/closed-surveys/expiring" />
          <Route path="/closed-surveys/analytics" />
          <Route path="/open-surveys/my-surveys" />
          <Route path="/open-surveys/my-collaborations" />
          <Route path="/open-surveys/expiring" />
          <Route path="/open-surveys/analytics" />
          <Route path="/home" component={SurveyList} />
          <Route path="/" exact component={Homepage} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/analytics" component={Analytics} />
          <Route path='/surveys/view-all' component={SurveyView} />
        </Layout>
      </div>
    );
  }
}

export default App;