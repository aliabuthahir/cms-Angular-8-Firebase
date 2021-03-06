import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {AppMessageModel} from '../models/app-message.model';
import {BottomSheetModel} from '../models/bottom-sheet.model';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  /* Note: This service has been introduced explicitly to
   avoid hardcore binding to any database sign in/single
   sign-on mechanisms. This service helps to decouple
   the app behavior/UI animations and keep them
   separate from the backend. */

  signInPageObserver: Subject<boolean> = new Subject<boolean>();
  rightSideNavObserver: Subject<any> = new Subject<any>();
  autoUploadFilesObserver: Subject<boolean> = new Subject<boolean>();
  totalFilesStatusObserver: Subject<boolean> = new Subject<boolean>();
  autoUploadCommunicator: Subject<boolean> = new Subject<boolean>();
  appMessageCommunicator: Subject<AppMessageModel> = new Subject<AppMessageModel>();
  fileUploadCancelCommunicator: Subject<boolean> = new Subject<boolean>();
  removeFromListCommunicator: Subject<boolean> = new Subject<boolean>();

  toolBarCommunicator: Subject<boolean> = new Subject<boolean>();
  fileDeleteCommunicator: Subject<boolean> = new Subject<boolean>();
  deleteChildCommunicator: Subject<boolean> = new Subject<boolean>();

//  bottomSheetCommunicator: Subject<BottomSheetModel> = new Subject<BottomSheetModel>();

  constructor() {
  }

  enableSignInPage(value: boolean) {
    this.signInPageObserver.next(value);
  }

  getObserver() {
    return this.signInPageObserver;
  }


  toggleRightSideNav() {
    this.rightSideNavObserver.next(true);
  }
}
