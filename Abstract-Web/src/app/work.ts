import { FileUpload } from './file-upload';

export class Work {
    constructor(
        public title?: string,
        public content?: string,
        public subtitle?: string,
         public images: FileUpload[] = []
    ){ }
}
