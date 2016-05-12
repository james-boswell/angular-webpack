export default class Module1Controller {
  constructor($state) {
  	this.$state = $state;
    this.title = 'Module 1';
    this.description = 'This is module 1';
  }

  back() {
  	this.$state.go('home');
  }
}