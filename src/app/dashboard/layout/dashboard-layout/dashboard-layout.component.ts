import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  LucideAngularModule,
  Menu,
  Search,
  ArrowLeftRight,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Database,
  LayoutDashboard,
  LogOut,
  Package,
  Store,
  Tag,
  Trash2,
  UserCog,
  Wallet,
  X,
} from 'lucide-angular';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css'],
})
export class DashboardLayoutComponent {
  Menu = Menu;
  Search = Search;
  ArrowLeftRight = ArrowLeftRight;
  Camera = Camera;
  CheckCircle2 = CheckCircle2;
  ChevronLeft = ChevronLeft;
  ChevronRight = ChevronRight;
  Database = Database;
  LayoutDashboard = LayoutDashboard;
  LogOut = LogOut;
  Package = Package;
  Store = Store;
  Tag = Tag;
  Trash2 = Trash2;
  UserCog = UserCog;
  Wallet = Wallet;
  X = X;

  isSidebarOpen = false;
  sidebarView = 'menu';
  activeSubmenuKey: string | null = null;
  searchQuery = '';

  activeAccount = {
    name: 'مدير النظام (Admin)',
    email: 'admin@moonlight.com',
    roleLabel: 'مدير النظام',
    avatar: '',
  };

  constructor(public router: Router, public location: Location) {}

  initials(name: string) {
    return (
      name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word[0])
        .join('') || 'م'
    );
  }

  closeSidebar() {
    this.isSidebarOpen = false;
    this.sidebarView = 'menu';
  }

  logout() {
    this.router.navigate(['/']);
  }
}

