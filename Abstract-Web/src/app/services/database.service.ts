import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import {Work} from '../work'
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

   /* project*/
 public workCollections; // holds a connection the firebase WorksInfo table
 public work: Work; // Holds project info that were inserted in the form by the user
 listingWorkDoc: AngularFirestoreDocument<Work>; //holds FB listing for update operation
 observableWorks: Observable<Work[]>; //A temp variable that returns metadata. used by projectsList
 worksList = []; // holds a list with listing id's and projects info of the ProjectInfo table


  constructor(private afs: AngularFirestore) {
    this.workCollections = afs.collection<any>('workInfo');
   }

  //adds all info that was provided through the project-upload form to project object and ads it to the firebase DB
  public addWorkToDB(work: Work) {
    this.workCollections.add(JSON.parse(JSON.stringify(work)));
  }

    //Updates a project listing by a given email. the object that is passed to the update function has to be already with the wanted changes!!! (It writes a new object)
    // updateWorkListing(work_name: string) {
    //   for (var i = 0; i < this.worksList.length; i++) {
    //     if (this.worksList[i].title == work_name) {
    //       this.listingDoc = this.projectCollections.doc(`${this.projectsList[i].id}`); //takes the listing that will be updated by the doc.id (listing's id)
    //       this.listingDoc.update(JSON.parse(JSON.stringify(this.work)));
    //     }
    //   }
    // }

    
  getProjectMetaData() { //Returns the DB table meta data from firebase including all table fields id and users
    this.observableWorks = this.workCollections.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    return this.observableWorks;
  }

    // returns the id listing of project by a given project name
    public getWorkID(pname: string) { //get project ID by Project name
      for (var i = 0; i < this.worksList.length; i++) {
        if (this.worksList[i].title == pname) {
          return this.worksList[i].id;
        }
      }
      return 'not found';
    }

}

