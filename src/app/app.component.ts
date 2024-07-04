import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'clients-dashboard';

  data:any[] =[];

  constructor(private dataService:DataService){}


  ngOnInit(): void {
      this.dataService.getData().subscribe((data=>{
          this.data = data;
      }),
      (err)=>{
        console.log(err);
        
      }
    );
  }
}
