import { Component, inject, OnInit } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '../../service/productService';
import { PageEvent, Product } from '../../model/productModel';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { SelectItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { SkeletonModule } from 'primeng/skeleton';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [
    ListboxModule,
    FormsModule,
    DataViewModule,
    ButtonModule,
    CommonModule,
    TagModule,
    DropdownModule,
    SkeletonModule,
    PaginatorModule,
  ],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
  providers: [ProductService],
})
export class ListItemComponent {
  first = 0;

  rows = 10;

  onPageChange(event: PaginatorState) {
    this.first = event?.first!;
    this.rows = event.rows as number;
  }

  products!: Product[];
  productService = inject(ProductService);
  sortOptions!: SelectItem[];
  sortKey = '';
  sortOrder!: number;
  layout: 'list' | 'grid' = 'list';
  sortField!: string;

  ngOnInit() {
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];
    this.productService.getProducts().then((data) => (this.products = data));
  }
  counterArray(n: number): any[] {
    return Array(n);
  }
  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return 'info';
    }
  }
}
