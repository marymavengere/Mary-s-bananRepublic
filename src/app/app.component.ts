import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bananaRepublic';


public isViewable: boolean = true; 
constructor()
 { 
  
}



ngOnInit(): void {
  this.isViewable = true;
}
public toggle(): void { this.isViewable = !this.isViewable;}
}