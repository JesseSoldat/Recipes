import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
    private authService: AuthService,
    private recipeService: RecipeService) {}

    storeRecipes() {
      const token = this.authService.getToken();
      return this.http.put('https://playground-3f11f.firebaseio.com/recipes.json?auth='+ token,
        this.recipeService.getRecipes());     
    }

    getRecipes() {
      const token = this.authService.getToken();
      
      this.http.get('https://playground-3f11f.firebaseio.com/recipes.json?auth=' + token)
        .map((res: Response) => {
          const recipes: Recipe[] = res.json();
          for(let recipe of recipes) {
            if(!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ).subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      })
    }
}