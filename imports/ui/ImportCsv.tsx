import React, { useState } from 'react';
import FilesCsv from '../api/importCsv';

export default function importCsv() {
  const [currentUpload, setCurrentUpload] = useState<any>(null);

  function onFileSelected(e: React.FormEvent<HTMLInputElement>) {

    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // multiple files were selected
      const upload = FilesCsv.insert({
        file: e.currentTarget.files[0],
        chunkSize: 'dynamic'
      }, false);

      upload.on('start', function (this: void) {
        setCurrentUpload(this)
      });

      upload.on('end', function (error, fileObj) {
        if (error) {
          alert(`Error during upload: ${error}`);
        } else {
          alert(`File "${fileObj.name}" successfully uploaded`);
        }
        setCurrentUpload(false);
      });

      upload.start();
    }
  }

  return (
    <div>
      <h3>Import CSV</h3>
      {currentUpload
        ? <p>hoge</p>
        : <input id="fileInput" type="file" onChange={onFileSelected} />
      }
    </div>
  );
};