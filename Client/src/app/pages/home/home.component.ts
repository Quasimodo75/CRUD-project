import { Component } from '@angular/core';
import { Items } from 'src/app/interfaces/items';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

item: Items | null =null 

items: Items []= []; 



  constructor(private crudService: CrudService,) {}

   ngOnInit(){

   //get all the items. 

    this.crudService.read().subscribe((data: any) =>
    this.items= data
    )
  
   }


    }
  