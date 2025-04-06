import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideBarComponentComponent } from '../side-bar-component/side-bar-component.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, SideBarComponentComponent, ContentComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
