import { Component } from '@angular/core';
import { ViewEncapsulation} from '@angular/core';
import { CustomServerDataSource } from './task.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'advanced-example-server',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: require('./task.html')
})
export class TaskComponent {

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: false
    },
    xxx: {
      deleteButtonContent: '<i class="ion-trash-a"></i>'
    },
    columns: {
      PO_NUMBER: {
        title: 'PO_NUMBER'
      },

      CO_CODE: {
        title: 'CO_CODE'
      },
      CREATED_BY: {
        title: 'CREATED_BY'
      },
      CURRENCY_ISO: {
        title: 'CURRENCY_ISO'
      },
      TARGET_VAL: {
        title: 'TARGET_VAL'
      },
      VEND_NAME: {
        title: 'VEND_NAME'
      },
      DM_STATUS_TIMESTAMP: {
        title: 'DM_STATUS_TIMESTAMP'
      },

      CREATED_ON: {
        title: 'CREATED_ON'
      },
      VENDOR: {
        title: 'VENDOR'
      },
      LAST_CHANGE_TIME: {
        title: 'LAST_CHANGE_TIME'
      }
    }
  };

  constructor(protected source: CustomServerDataSource) {

  }
}