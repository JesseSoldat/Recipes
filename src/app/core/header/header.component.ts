import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe((res: Response) => {
        console.log('stored recipes', res);
      });
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

}
 