import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MemoLeakComponent } from './memo-leak/memo-leak.component';

export const routes: Routes = [
    {path:'', component: AppComponent},
    {path: 'memoLeak', component: MemoLeakComponent}
];
