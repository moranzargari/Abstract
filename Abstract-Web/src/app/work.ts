import { FileUpload } from './file-upload';

export class Work {
    constructor(
        public title?: string,
        public content?: string,
        public subtitle?: string,
<<<<<<< HEAD
        public pdf?: FileUpload,
=======
         public pdf?: FileUpload,
>>>>>>> 686b8d086f58142c940eb639c28071cb5c2ef701
         public images: FileUpload[] = []
    ){ }
}
