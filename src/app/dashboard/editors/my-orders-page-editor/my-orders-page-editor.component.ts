import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';
import { SectionCardComponent } from '../components/section-card/section-card.component';

@Component({
  selector: 'app-my-orders-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionCardComponent],
  templateUrl: './my-orders-page-editor.component.html',
  styleUrl: './my-orders-page-editor.component.css'
})
export class MyOrdersPageEditorComponent {
  configService = inject(DashboardConfigService);
  config = this.configService.myOrdersPageConfig;

  updateConfig(updates: any) {
    this.configService.updateMyOrdersPageConfig(updates);
  }

  // No-ops for required inputs
  noop() {}
}
