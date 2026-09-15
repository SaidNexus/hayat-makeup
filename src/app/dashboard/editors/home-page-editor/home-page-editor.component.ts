import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';
import { PreviewScrollService } from '../../../core/services/preview-scroll.service';
import { SectionCardComponent } from '../components/section-card/section-card.component';
import { BilingualInputComponent } from '../../components/bilingual-input/bilingual-input.component';
import { LucideAngularModule, Plus, Edit2, Image, Banknote, Truck, Package, Trash2, Copy, ChevronDown } from 'lucide-angular';

const sectionTemplates: Record<string, () => any> = {
  hero: () => ({
    id: "sec-" + Date.now(),
    type: "hero",
    enabled: true,
    title: "جمالكِ يتألق مع حياة",
    titleAr: "جمالكِ يتألق مع حياة",
    titleEn: "Your Beauty Shines with Hayat",
    slides: [{
      id: "slide-" + Date.now(),
      image: "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248204/hayat-makeup/hero-Banner.jpg",
      title: "جمالكِ يتألق مع حياة\nأرقى تشكيلة مكياج",
      titleAr: "جمالكِ يتألق مع حياة\nأرقى تشكيلة مكياج",
      titleEn: "Your Beauty Shines with Hayat\nFinest Makeup Collection"
    }]
  }),
  benefits: () => ({
    id: "sec-" + Date.now(),
    type: "benefits",
    enabled: true,
    benefits: [
      { id: "b1-" + Date.now(), text: "فائدة جديدة", textAr: "فائدة جديدة", textEn: "New Benefit", icon: "Truck", enabled: true }
    ]
  }),
  categories: () => ({
    id: "sec-" + Date.now(),
    type: "categories",
    enabled: true,
    title: "تسوقي حسب الفئة",
    titleAr: "تسوقي حسب الفئة",
    titleEn: "Shop by Category",
    categories: []
  }),
  bestsellers: () => ({
    id: "sec-" + Date.now(),
    type: "bestsellers",
    enabled: true,
    title: "الأكثر مبيعاً",
    titleAr: "الأكثر مبيعاً",
    titleEn: "Best Sellers",
    products: []
  }),
  promo: () => ({
    id: "sec-" + Date.now(),
    type: "promo",
    enabled: true,
    eyebrow: "وصل حديثاً",
    eyebrowAr: "وصل حديثاً",
    eyebrowEn: "New Arrival",
    title: "جديد الجمال بانتظارك",
    titleAr: "جديد الجمال بانتظارك",
    titleEn: "New Beauty Awaits You",
    subtitle: "اكتشفي أحدث المنتجات والعلامات الحصرية",
    subtitleAr: "اكتشفي أحدث المنتجات والعلامات الحصرية",
    subtitleEn: "Discover the latest exclusive products & brands",
    image: "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248206/hayat-makeup/hero.png"
  }),
  looks: () => ({
    id: "sec-" + Date.now(),
    type: "looks",
    enabled: true,
    title: "إطلالات مكياج ساحرة",
    titleAr: "إطلالات مكياج ساحرة",
    titleEn: "Charming Makeup Looks"
  })
};

const titles: Record<string, string> = {
  hero: "الصورة الرئيسية (البانر)",
  benefits: "شريط المزايا",
  categories: "الأقسام (تسوقي حسب الفئة)",
  bestsellers: "الأكثر مبيعاً",
  promo: "البانر الترويجي",
  looks: "إطلالات المكياج"
};

@Component({
  selector: 'app-home-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionCardComponent, BilingualInputComponent, LucideAngularModule],
  templateUrl: './home-page-editor.component.html',
  styleUrl: './home-page-editor.component.css'
})
export class HomePageEditorComponent implements OnInit, OnDestroy {
  configService = inject(DashboardConfigService);
  previewScrollService = inject(PreviewScrollService);

  get config() {
    return this.configService.homePageConfig();
  }

  draggedIdx: number | null = null;
  showAddMenu = false;
  private editorScrollSub?: Subscription;

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

  ngOnInit() {
    this.editorScrollSub = this.previewScrollService.scrollToEditor$.subscribe(idOrType => {
      this.scrollToEditorCard(idOrType);
    });
  }

  ngOnDestroy() {
    this.editorScrollSub?.unsubscribe();
  }

  onCardClick(section: any) {
    if (!section) return;
    this.previewScrollService.scrollToSection({
      sectionId: section.id,
      sectionType: section.type
    });
  }

  scrollToEditorCard(idOrType: string | number) {
    if (typeof document === 'undefined') return;
    let targetEl: HTMLElement | null = null;
    targetEl = document.getElementById('editor-card-' + idOrType)
      || document.querySelector(`[data-card-type="${idOrType}"]`);
    if (!targetEl && typeof idOrType === 'number') {
      const cards = document.querySelectorAll('app-section-card');
      if (cards[idOrType]) targetEl = cards[idOrType] as HTMLElement;
    }
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      targetEl.classList.add('ring-2', 'ring-[#D4146A]', 'transition-all');
      setTimeout(() => {
        targetEl?.classList.remove('ring-2', 'ring-[#D4146A]');
      }, 2000);
    }
  }

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
    if (!sectionTemplates[type]) return;
    this.onChange({ ...this.config, sections: [...this.config.sections, sectionTemplates[type]()] });
    this.showAddMenu = false;
  }

  addHeroSlide(section: any) {
    const slides = section.slides || (section.image ? [{ id: "old-1", image: section.image }] : []);
    const newSlide = {
      id: "slide-" + Date.now(),
      image: "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248204/hayat-makeup/hero-Banner.jpg",
      title: "شريحة جديدة",
      titleAr: "شريحة جديدة",
      titleEn: "New Slide"
    };
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
    benefits.push({
      id: "b-" + Date.now(),
      text: "ميزة جديدة",
      textAr: "ميزة جديدة",
      textEn: "New Feature",
      icon: "Truck",
      enabled: true
    });
    this.updateSection(section.id, { benefits });
  }

  deleteBenefit(section: any, bIdx: number) {
    const newB = [...(section.benefits || [])];
    newB.splice(bIdx, 1);
    this.updateSection(section.id, { benefits: newB });
  }

  updateBenefit(section: any, bIdx: number, updates: any) {
    const newBenefits = [...(section.benefits || [])];
    newBenefits[bIdx] = { ...newBenefits[bIdx], ...updates };
    this.updateSection(section.id, { benefits: newBenefits });
  }

  promptPromoImage(section: any) {
    const url = window.prompt("أدخل رابط الصورة الجديدة:", section.image || "");
    if (url) this.updateSection(section.id, { image: url });
  }

  getHeroSlides(section: any) {
    return section.slides || (section.image ? [{ id: "old-1", image: section.image, title: section.title, titleAr: section.titleAr, titleEn: section.titleEn }] : []);
  }

  getAddAction(section: any) {
    if (section.type === 'hero') {
      return { label: 'إضافة صورة', onClick: () => this.addHeroSlide(section) };
    }
    if (section.type === 'benefits') {
      return { label: 'إضافة ميزة', onClick: () => this.addBenefit(section) };
    }
    return null;
  }
}
