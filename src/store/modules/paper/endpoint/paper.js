import data from './__mock.paper';

export default class Files {
  static getPaperData(status) {
    if (status) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(data), 3000)
      })
    }
    return null;
  }
}
