import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

//services
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
//components
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule

  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
    

  ],
  providers: [
    AuthService,
    DataStorageService,
    RecipeService,
    ShoppingListService

  ]
})
export class CoreModule {}