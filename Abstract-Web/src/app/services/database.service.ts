import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument ,AngularFirestoreCollection} from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import {Work} from '../work';
import {Msg} from 'src/app/msg';
import { Observable } from 'rxjs/Observable';
import 'firebase/database';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

   /* work*/
 public workCollections: AngularFirestoreCollection<Work>; // holds a connection the firebase WorksInfo table
 public work: Work; // Holds project info that were inserted in the form by the user
 listingWorkDoc: AngularFirestoreDocument<any>; //holds FB listing for update operation
 observableWorks: Observable<Work[]>; //A temp variable that returns metadata. used by projectsList
 worksList = []; // holds a list with listing id's and projects info of the ProjectInfo table

  /* Msg*/
  public MsgCollections: AngularFirestoreCollection<Work>;
  public msg: Msg;
  observableMsgs: Observable<Msg[]>; //A temp variable that returns metadata. used by projectsList
  MsgsList = []; // holds a list with listing id's and projects info of the ProjectInfo table



  constructor(private afs: AngularFirestore) {
    this.workCollections = afs.collection<any>('workInfo');
    this.MsgCollections = afs.collection<any>('messages');
   }

  //adds all info that was provided through the project-upload form to project object and ads it to the firebase DB
  public addWorkToDB(work: Work) {
    this.workCollections.add(JSON.parse(JSON.stringify(work)));
  }

  public addMsgToDB(msg: Msg) {
    this.MsgCollections.add(JSON.parse(JSON.stringify(msg)));
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

    
    getWorkMetaData() { //Returns the DB table meta data from firebase including all table fields id and users
      //this.workCollections = Array.prototype.slice.call(this.workCollections);
      this.observableWorks = this.workCollections.snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Work;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
      return this.observableWorks;
    }


    getMsgMetaData() { //Returns the DB table meta data from firebase including all table fields id and users
      this.observableMsgs = this.MsgCollections.snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Msg;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
      return this.observableMsgs;
    }
  
  

  //   // returns the id listing of project by a given project name
  //   public getWorkID(pname: string) { //get project ID by Project name
  //     for (var i = 0; i < this.worksList.length; i++) {
  //       if (this.worksList[i].title == pname) {
  //         return this.worksList[i].id;
  //       }
  //     }
  //     return 'not found';
  //   }

}

