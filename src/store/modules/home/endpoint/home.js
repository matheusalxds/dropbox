import data from './__mock.home';

export default class Home {
  static getHomeData(status) {
    if (status) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(data), 3000)
      })
    }
    return null;
  }
}
