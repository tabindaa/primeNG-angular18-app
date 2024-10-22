import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import { StyleClassModule } from 'primeng/styleclass';
import { TabMenuModule } from 'primeng/tabmenu';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StyleClassModule,
    ButtonModule,
    DockModule,
    TabMenuModule,
    HeaderToolbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Signal App';

  items: MenuItem[] | undefined;

  constructor() {}

  ngOnInit() {
    this.items = [
      { label: 'Login', icon: 'pi pi-sign-in', route: '/login' },
      { label: 'Contacts', icon: 'pi pi-home', route: '/contact' },
      { label: 'Items', icon: 'pi pi-palette', route: '/item' },
      { label: 'Recipe', icon: 'pi pi-sparkles', route: '/recipe' },
    ];
  }
}
