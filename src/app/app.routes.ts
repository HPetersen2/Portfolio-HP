import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { AboutMeComponent } from './landing-page/about-me/about-me.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent, 
        children: [
            {
                path: 'about-me',
                component: AboutMeComponent
            }
        ]
    },
    { path: 'imprint', component: ImprintComponent},
    { path: 'data-protection', component: DataProtectionComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
