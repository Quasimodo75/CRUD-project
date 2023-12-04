import { Component } from '@angular/core';
import { Items } from 'src/app/interfaces/items';
import { CrudService } from 'src/app/services/crud.service';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


items: Items []= []; 

id:any

  constructor(private crudService: CrudService,) {}
    
  form:FormGroup =new FormGroup({
  name: new FormControl(''),
  description : new FormControl(''),

  })

   ngOnInit(){

   //get all the items. 

    this.crudService.read().subscribe((data: any) =>
    this.items= data,
    )}

     create(){
      this.crudService.create(this.form.value).subscribe((data:any) => {
      this.items =data

      console.log(this.items)
      window.location.reload()

      }   )


     }


}
  