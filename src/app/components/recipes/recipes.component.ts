import { Component, inject } from '@angular/core';
import { RecipeService } from '../../service/recipe.service';
import { Recipe, RecipeModel } from '../../model/recipe.model';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    DataViewModule,
    ButtonModule,
    TagModule,
    CommonModule,
    NgOptimizedImage,
    RecipeCardComponent,
    PaginatorModule
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
  providers: [RecipeService],
})
export class RecipesComponent {
  recipeService = inject(RecipeService);
  recipes: Recipe = { recipes: [], limit: 0, skip: 0, total: 0 };
  first: number = 0;

  rows: number = 10;

  onPageChange(event: PaginatorState) {
      this.first = event.first as number;
      this.rows = event.rows as number;
  }
  ngOnInit() {
    this.recipeService
      .getAllRecipes()
      .subscribe((recipe) => (this.recipes = recipe));
  }
}
