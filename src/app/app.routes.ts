import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'imprint', component: ImprintComponent},
    { path: 'data-protection', component: DataProtectionComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
