import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellComponent } from './sell/sell.component';
import { SellEditComponent } from './sell/sell.edit.component';
import { TwitterComponent } from './twitter/twitter.component';
import { InviteComponent } from './invite/invite.component';

const appRoutes: Routes = [
  { path: 'sell', component: SellComponent },
  { path: 'sell/edit', component: SellEditComponent },
  { path: 'twitter', component: TwitterComponent },
  { path: 'invite', component: InviteComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
