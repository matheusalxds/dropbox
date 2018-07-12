import React, { Component } from 'react';

import Files from 'react-files';

export default class Upload extends Component {

  onFilesChange =  (files) => {
    console.log(files)
  };

  onFilesError = (error) => {
    console.log('error code ' + error.code + ': ' + error.message)
  };
  render() {
    return (
    <div className="upload">
      <Files
      className='files-dropzone'
      onChange={file => this.onFilesChange(file)}
      onError={error => this.onFilesError(error)}
      accepts={['image/png', '.pdf', 'audio/*']}
      multiple
      maxFiles={3}
      maxFileSize={10000000}
      minFileSize={0}
      clickable
      >
        <button className={ 'btn' }>
          Upload
        </button>
      </Files>

    </div>
    )
  }
}
