import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-faces-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './faces-page-editor.component.html',
  styleUrl: './faces-page-editor.component.css'
})
export class FacesPageEditorComponent {
  private configService = inject(DashboardConfigService);

  get config() {
    return this.configService.facesPageConfig() || {};
  }

  updateConfig(updates: any) {
    this.configService.facesPageConfig.update(c => ({ ...(c || {}), ...updates }));
  }

  addFace() {
    const faces = [...(this.config.faces || [])];
    faces.push({ 
      id: Date.now().toString(), 
      name: "إطلالة جديدة", 
      image: "", 
      icon: "Sun", 
      iconColor: "#0B2E74", 
      visible: true 
    });
    this.updateConfig({ faces });
  }

  moveFaceUp(index: number) {
    if (index === 0) return;
    const faces = [...(this.config.faces || [])];
    [faces[index], faces[index-1]] = [faces[index-1], faces[index]];
    this.updateConfig({ faces });
  }

  moveFaceDown(index: number) {
    if (index === (this.config.faces?.length || 0) - 1) return;
    const faces = [...(this.config.faces || [])];
    [faces[index], faces[index+1]] = [faces[index+1], faces[index]];
    this.updateConfig({ faces });
  }

  updateFace(index: number, updates: any) {
    const faces = [...(this.config.faces || [])];
    faces[index] = { ...faces[index], ...updates };
    this.updateConfig({ faces });
  }

  removeFace(index: number) {
    const faces = [...(this.config.faces || [])];
    faces.splice(index, 1);
    this.updateConfig({ faces });
  }
}
