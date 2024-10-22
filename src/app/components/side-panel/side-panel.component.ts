import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [SidebarModule, ButtonModule, AvatarModule],
  templateUrl: './side-panel.component.html',
  styles: ``,
})
export class SidePanelComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: MouseEvent): void {
    this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;
}
