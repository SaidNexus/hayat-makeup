import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';
import { SectionCardComponent } from '../components/section-card/section-card.component';
import { LucideAngularModule, Plus, Edit2, Image, Banknote, Truck, Package, Trash2, Copy, ChevronDown } from 'lucide-angular';

const sectionTemplates: Record<string, () => any> = {
  hero: () => ({
    id: "sec-" + Date.now(),
    type: "hero",
    enabled: true,
    title: "الصورة الرئيسية (البانر)",
    slides: [{
      id: "slide-" + Date.now(),
      image: "",
      title: "شّد أقوى\nوقوام أفضل"
    }]
  }),
  benefits: () => ({
    id: "sec-" + Date.now(),
    type: "benefits",
    enabled: true,
    benefits: [{ id: "b1-" + Date.now(), text: "فائدة جديدة", icon: "Truck", enabled: true }]
  }),
  categories: () => ({
    id: "sec-" + Date.now(),
    type: "categories",
    enabled: true,
    title: "تسوق حسب الفئة",
    categories: []
  }),
  bestsellers: () => ({
    id: "sec-" + Date.now(),
    type: "bestsellers",
    enabled: true,
    title: "الأكثر مبيعاً",
    products: []
  }),
  promo: () => ({
    id: "sec-" + Date.now(),
    type: "promo",
    enabled: true,
    eyebrow: "وصل حديثاً",
    title: "جديد الجمال بانتظارك",
    subtitle: "اكتشفي أحدث المنتجات والعلامات",
    image: ""
  }),
  shopByNeed: () => ({
    id: "sec-" + Date.now(),
    type: "shopByNeed",
    enabled: true,
    title: "تسوقي حسب احتياجك"
  }),
  reviews: () => ({
    id: "sec-" + Date.now(),
    type: "reviews",
    enabled: true,
    title: "آراء عملائنا"
  })
};

const titles: Record<string, string> = {
  hero: "الصورة الرئيسية (البانر)",
  benefits: "الشريط المميز تحت البانر",
  categories: "الأقسام (تسوق حسب الفئة)",
  bestsellers: "الأكثر مبيعاً",
  promo: "الصورة الترويجية",
  shopByNeed: "تسوقي حسب احتياجك",
  reviews: "آراء عملائنا"
};

@Component({
  selector: 'app-home-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionCardComponent, LucideAngularModule],
  templateUrl: './home-page-editor.component.html',
  styleUrl: './home-page-editor.component.css'
})
export class HomePageEditorComponent {
  configService = inject(DashboardConfigService);

  get config() {
    return this.configService.homePageConfig();
  }

  draggedIdx: number | null = null;
  showAddMenu = false;

  Plus = Plus;
  Edit2 = Edit2;
  ImageIcon = Image;
  Banknote = Banknote;
  Truck = Truck;
  Package = Package;
  Trash2 = Trash2;
  Copy = Copy;
  ChevronDown = ChevronDown;

  titles = titles;

  onChange(newConfig: any) {
    this.configService.updateHomePageConfig(newConfig);
  }

  handleDragStart(e: DragEvent, index: number) {
    this.draggedIdx = index;
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", index.toString());
    }
  }

  handleDragEnd() {
    this.draggedIdx = null;
  }

  handleDragOver(e: DragEvent) {
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = "move";
    }
  }

  handleDrop(e: DragEvent, dropIdx: number) {
    e.preventDefault();
    if (this.draggedIdx === null || this.draggedIdx === dropIdx) return;
    const newSections = [...this.config.sections];
    const draggedSection = newSections[this.draggedIdx];
    newSections.splice(this.draggedIdx, 1);
    newSections.splice(dropIdx, 0, draggedSection);
    this.onChange({ ...this.config, sections: newSections });
    this.draggedIdx = null;
  }

  updateSection(id: string, updates: any) {
    this.onChange({
      ...this.config,
      sections: this.config.sections.map((s: any) => s.id === id ? { ...s, ...updates } : s)
    });
  }

  duplicateSection(index: number) {
    const newSection = { ...this.config.sections[index], id: "sec-" + Date.now() };
    const newSections = [...this.config.sections];
    newSections.splice(index + 1, 0, newSection);
    this.onChange({ ...this.config, sections: newSections });
  }

  deleteSection(index: number) {
    if (confirm("هل أنت متأكد من حذف هذا القسم؟")) {
      const newSections = [...this.config.sections];
      newSections.splice(index, 1);
      this.onChange({ ...this.config, sections: newSections });
    }
  }

  moveUp(index: number) {
    if (index === 0) return;
    const newSections = [...this.config.sections];
    [newSections[index], newSections[index - 1]] = [newSections[index - 1], newSections[index]];
    this.onChange({ ...this.config, sections: newSections });
  }

  moveDown(index: number) {
    if (index === this.config.sections.length - 1) return;
    const newSections = [...this.config.sections];
    [newSections[index], newSections[index + 1]] = [newSections[index + 1], newSections[index]];
    this.onChange({ ...this.config, sections: newSections });
  }

  addSection(type: string) {
    this.onChange({ ...this.config, sections: [...this.config.sections, sectionTemplates[type]()] });
    this.showAddMenu = false;
  }

  addHeroSlide(section: any) {
    const slides = section.slides || (section.image ? [{ id: "old-1", image: section.image }] : []);
    const newSlide = { id: "slide-" + Date.now(), image: "" };
    this.updateSection(section.id, { slides: [...slides, newSlide] });
  }

  duplicateSlide(section: any, slideIndex: number) {
    const slides = [...(section.slides || [])];
    const newSlide = { ...slides[slideIndex], id: "slide-" + Date.now() };
    slides.splice(slideIndex + 1, 0, newSlide);
    this.updateSection(section.id, { slides });
  }

  updateSlide(section: any, slideIndex: number, updates: any) {
    const slides = [...(section.slides || [])];
    slides[slideIndex] = { ...slides[slideIndex], ...updates };
    this.updateSection(section.id, { slides });
  }

  deleteSlide(section: any, slideIndex: number) {
    const slides = [...(section.slides || [])];
    slides.splice(slideIndex, 1);
    this.updateSection(section.id, { slides });
  }

  promptHeroImage(section: any, slideIndex: number, currentUrl: string) {
    const url = window.prompt("أدخل رابط الصورة الجديدة:", currentUrl);
    if (url) this.updateSlide(section, slideIndex, { image: url });
  }

  addBenefit(section: any) {
    const benefits = [...(section.benefits || [])];
    benefits.push({ id: "b-" + Date.now(), text: "ميزة جديدة", icon: "Truck", enabled: true });
    this.updateSection(section.id, { benefits });
  }

  deleteBenefit(section: any, bIdx: number) {
    const newB = [...(section.benefits || [])];
    newB.splice(bIdx, 1);
    this.updateSection(section.id, { benefits: newB });
  }

  updateBenefit(section: any, bIdx: number, benefit: any, checked: boolean) {
    const newBenefits = [...(section.benefits || [])];
    newBenefits[bIdx] = { ...benefit, enabled: checked };
    this.updateSection(section.id, { benefits: newBenefits });
  }

  promptPromoImage(section: any) {
    const url = window.prompt("أدخل رابط الصورة الجديدة:", section.image || "");
    if (url) this.updateSection(section.id, { image: url });
  }

  updateSectionTitleToggle(section: any, checked: boolean) {
    this.updateSection(section.id, { title: checked ? "عنوان القسم" : "" });
  }

  getHeroSlides(section: any) {
    return section.slides || (section.image ? [{ id: "old-1", image: section.image }] : []);
  }

  getAddAction(section: any) {
    if (section.type === 'hero') {
      return { label: 'إضافة صورة', onClick: () => this.addHeroSlide(section) };
    }
    if (section.type === 'benefits') {
      return { label: 'إضافة عنصر', onClick: () => this.addBenefit(section) };
    }
    return null;
  }
}
