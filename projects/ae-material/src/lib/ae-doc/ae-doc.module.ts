import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeDocComponent } from './ae-doc.component';
import { RouterModule, Routes } from '@angular/router';
import { AeAvatarComponent } from '../ae-avatar/ae-avatar.component';
import { AeAvatarModule } from '../ae-avatar/ae-avatar.module';
import { AeCardComponent } from '../ae-card/ae-card.component';
import { AeCardModule } from '../ae-card/ae-card.module';
import { AeFormModule } from '../ae-form/ae-form.module';
import { AeToolbarModule } from '../ae-toolbar/ae-toolbar.module';
import { AeFormComponent } from '../ae-form/ae-form.component';
import { AeToolbarComponent } from '../ae-toolbar/ae-toolbar.component';
import { MatDividerModule } from '@angular/material/divider';
import { AeListModule } from '../ae-list/ae-list.module';
import { AeListComponent } from '../ae-list/ae-list.component';
import { AeSideNavModule } from '../ae-side-nav/ae-side-nav.module';
import { AeViewModule } from '../ae-view/ae-view.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './actions';
import { AeSideNavComponent } from '../ae-side-nav/ae-side-nav.component';
import { AeTableComponent } from '../ae-table/ae-table.component';
import { AeTableModule } from '../ae-table/ae-table.module';
import { AeDetailsComponent } from '../ae-details/ae-details.component';
import { AeDetailsModule } from '../ae-details/ae-details.module';

const routes: Routes = [
  {
    path: 'ae-material/doc',
    component: AeDocComponent,
    children: [
      { path: '', redirectTo: 'avatar', pathMatch: 'full' },
      { path: 'avatar', component: AeAvatarComponent },
      { path: 'card', component: AeCardComponent },
      { path: 'form', component: AeFormComponent },
      { path: 'side-nav', component: AeSideNavComponent },
      { path: 'toolbar', component: AeToolbarComponent },
      { path: 'list', component: AeListComponent },
      { path: 'table', component: AeTableComponent },
      { path: 'details', component: AeDetailsComponent }
    ]
  },
];



@NgModule({
  declarations: [AeDocComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('aeDoc', { aeView: reducer }),
    MatDividerModule,
    AeAvatarModule,
    AeCardModule,
    AeFormModule,
    AeToolbarModule,
    AeListModule,
    AeSideNavModule,
    AeViewModule,
    AeTableModule,
    AeDetailsModule,
  ],
  exports: [AeDocComponent]
})
export class AeDocModule { }
