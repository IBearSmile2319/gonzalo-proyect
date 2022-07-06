import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyect';
  public datos: Array<any>=[]
  constructor(
    private DataService: DataService
  ) {
    this.DataService.getData().subscribe(
      (res: any) => {
        console.log(res.objModel);
        this.datos = res.objModel;
      }
    );
   }
}
