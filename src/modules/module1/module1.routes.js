routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('module1', {
      url: '/module1',
      template: require('./module1.html'),
      controller: 'Module1Controller',
      controllerAs: 'module1'
    });
}