import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DownloadComponent } from './download/download.component';
import { FeaturesComponent } from './features/features.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  { path: 'preview', component: PreviewComponent }, 
  { path: 'features', component: FeaturesComponent }, 
  { path: 'download', component: DownloadComponent },
  { path: '**', component: DownloadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
