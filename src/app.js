import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './modules/home';
import module1 from './modules/module1';

angular.module('app', [uirouter, home, module1])
  .config(routing);