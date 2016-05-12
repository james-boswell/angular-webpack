import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './module1.routes';
import Module1Controller from './module1.controller';

export default angular.module('app.module1', [uirouter])
  .config(routing)
  .controller('Module1Controller', Module1Controller)
  .name;