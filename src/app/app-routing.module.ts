import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { NewsComponent } from "./components/news/news.component";
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "home", 
    component: HomeComponent,
    children: [
      { path: "main", component: MainComponent, pathMatch:'full' },
      { path: "news", component: NewsComponent,  pathMatch:'full' }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
