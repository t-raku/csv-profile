# EC-Line

## Features

### Import J-Line stock files for process in the system

#### Scenario

##### 1. User downloads Excel or CSV files from the J-Line stock sheet in Google Drive.

##### 2. opens the page of this function.

##### 3. clicks file selet button.

##### 4. select the file in users local to upload to system.

##### 5. Client side verifies whether the selected files is correct to upload.

##### 6. displays "import" button.

##### 7. User clicks the button.

##### 8. System imports the file to server.
> *how to indicate what file is just uploaded and to be proceeded.*

##### 9.  Server runs a stream process to transform CSV to Mongo Document and insert to Mongo
> To be a module.

> *There would be some options, One is to "append", One is to "replace" entire whithin the collection and somethingelse.*
