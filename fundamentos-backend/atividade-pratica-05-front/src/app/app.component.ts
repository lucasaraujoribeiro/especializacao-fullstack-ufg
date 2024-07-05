import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CdkMenuTrigger} from "@angular/cdk/menu";
import {MatMenuModule} from '@angular/material/menu';
import {MenuComponent} from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CdkMenuTrigger,
    MatMenuModule,
    MenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
