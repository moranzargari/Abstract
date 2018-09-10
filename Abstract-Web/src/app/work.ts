import { FileUpload } from './file-upload';

export class Work {
    constructor(
        public title: string,
        public content: string,
         public images: FileUpload[] = []
    ){ }
}
