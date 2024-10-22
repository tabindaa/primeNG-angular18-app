import { Component, inject } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { Router } from '@angular/router';
import { SidePanelComponent } from '../side-panel/side-panel.component';

@Component({
  selector: 'app-header-toolbar',
  standalone: true,
  imports: [ToolbarModule, AvatarModule, SidePanelComponent],
  templateUrl: './header-toolbar.component.html',
  styleUrl: './header-toolbar.component.scss',
})
export class HeaderToolbarComponent {
  router = inject(Router);
  menuClick(clickedItem: string) {
    this.router.navigate([`/${clickedItem}`]);
  }
}
