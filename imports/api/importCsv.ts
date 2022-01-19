import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';

const FilesCsv = new FilesCollection({
  collectionName: 'filesCsv',
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload(file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (/csv/i.test(file.extension)) {
      return true;
    }
    return 'Please upload csv file';
  }
});

if (Meteor.isClient) {
  Meteor.subscribe('files.csv.all');
}

if (Meteor.isServer) {
  Meteor.publish('files.csv.all', function () {
    return FilesCsv.find().cursor;
  });
}

export default FilesCsv;