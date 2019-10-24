import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecipiesPage } from './recipies.page';
import { RecipieItemComponent } from './recipie-item/recipie-item.component';

const routes: Routes = [
  {
    path: '',
    component: RecipiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecipiesPage, RecipieItemComponent]
})
export class RecipiesPageModule {}
