export default class HomeController {
  constructor($state) {
    //this.name = 'World';
    this.$state = $state;
  }

  loadModule1(){ 
	this.$state.go('module1'); 
  };
}