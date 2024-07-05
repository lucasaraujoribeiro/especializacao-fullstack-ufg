import { Component } from '@angular/core';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatButton} from "@angular/material/button";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatLine} from "@angular/material/core";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatMenuTrigger,
    MatButton,
    RouterLink,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatNavList,
    MatListItem,
    RouterLinkActive,
    MatSidenavContent,
    MatSidenavContainer,
    MatToolbar,
    MatLine,
    MatSidenav,
    RouterOutlet
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
