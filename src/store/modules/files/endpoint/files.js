import data from './__mock.files';

export default class Files {
  static getFileData(status) {
    if (status) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(data), 3000)
      })
    }
    return null;
  }
}
