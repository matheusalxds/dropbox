import data from './__mock.home';

export default class Home {
  static getHomeData() {

    setTimeout(function() { console.log("setTimeout: Ja passou 5 segundo!"); }, 5000);

    return data;
  }
}
