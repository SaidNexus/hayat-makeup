import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-wishlist-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wishlist-page-editor.component.html'
})
export class WishlistPageEditorComponent {
  private configService = inject(DashboardConfigService);

  get config() {
    return this.configService.wishlistPageConfig();
  }

  handleChange(key: string, value: any) {
    this.configService.wishlistPageConfig.update(prev => ({ ...prev, [key]: value }));
  }
}
