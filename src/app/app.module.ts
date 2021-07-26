import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HobbyComponent } from './hobby/hobby.component';
import { FormsModule } from '@angular/forms';

import { DataService } from './data.service'
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { RouterModule, Route} from '@angular/router';

const routes: Route[] = [
  { path: '', component: AppComponent },
  { path: 'about', component: AboutComponent },
  { path: 'hello', component: HelloWorldComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HobbyComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
