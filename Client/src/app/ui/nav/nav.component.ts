import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ChangeDetectorRef, ElementRef, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    // ... more items
  ];

  read:any; // this is the fuction that brings all the items. 
  searchTerm = '';
  results: any = [];



}
