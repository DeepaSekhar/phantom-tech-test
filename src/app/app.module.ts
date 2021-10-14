import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { ResultComponent } from './components/result/result.component';

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
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
