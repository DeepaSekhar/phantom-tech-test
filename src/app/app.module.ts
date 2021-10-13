import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [{ path: 'overview', component: OverviewComponent }];
@NgModule({
  declarations: [AppComponent, OverviewComponent, FormComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
