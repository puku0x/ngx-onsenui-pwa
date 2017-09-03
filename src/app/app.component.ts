import { Component } from '@angular/core';
import { MainPageComponent } from './pages/main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rootPage = MainPageComponent;
}
