import { Component } from '@angular/core';
import { Items } from 'src/app/interfaces/items';
import { CrudService } from 'src/app/services/crud.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  items: Items[] = [];

  form = new FormGroup({
  name: new FormControl(''),
  description: new FormControl(''),
  });

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    //get all the items.

    this.crudService.read().subscribe((data: any) => {
      this.items = data;
    });
  }

  create() {
    let item = {
      name: this.form.value.name || '',
      description: this.form.value.description || '',
    };

    this.crudService.create(item).subscribe((data: any) => {
      (this.items = data), console.log(this.items);
      window.location.reload();
    });
  }

  delete(id: any) {
    this.crudService.remove(id).subscribe((res: any) => {
      window.location.reload();
    });
  }
  update(id: any) {
    // this.crudService.update(id).subscribe((res:any) => {
    //  window.location.reload();
    // }  )
  }
 


}
