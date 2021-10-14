import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ResultComponent } from './result/result.component';

const appRoutes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'result', component: ResultComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: '**', redirectTo: 'overview' },
];
@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    FormComponent,
    ListComponent,
    ResultComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
