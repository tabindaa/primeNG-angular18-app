import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe, RecipeModel } from '../model/recipe.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class RecipeService {
  // private recipes: Recipe = { recipes: [], limit: 0, skip: 0, total: 0 };
  // private recipes = signal<Recipe>({
  //   recipes: [],
  //   limit: 0,
  //   skip: 0,
  //   total: 0,
  // });

  constructor(private http: HttpClient) {
    // this.loadAllRecipes();
  }

  // private loadAllRecipes() {
  //   this.http
  //     .get<Recipe>('https://dummyjson.com/recipes')
  //     .subscribe((recipe) => this.recipes.set(recipe));
  // }
  getAllRecipes(): Observable<Recipe> {
    return this.http.get<Recipe>('https://dummyjson.com/recipes');
  }
  getRecipeById(id: number): Observable<RecipeModel> {
    return this.http.get<RecipeModel>(`https://dummyjson.com/recipes/${id}`);
  }

  searchRecipeByQuery(query: string): Observable<Recipe> {
    return this.http.get<Recipe>(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
  }

  getAllRecipesTags(): Observable<string[]> {
    return this.http.get<string[]>('https://dummyjson.com/recipes/tags');
  }
  getRecipeByATag(tagName: string): Observable<Recipe> {
    return this.http.get<Recipe>(
      `https://dummyjson.com/recipes/tags/${tagName}`
    );
  }
  getRecipeByAMeal(mealName: string): Observable<Recipe> {
    return this.http.get<Recipe>(
      `https://dummyjson.com/recipes/meal-type/${mealName}`
    );
  }

  sortRecipesInAscOrDesc(order = 'asc'): Observable<Recipe> {
    return this.http.get<Recipe>(
      `https://dummyjson.com/recipes?sortBy=name&order=${order}`
    );
  }
}
