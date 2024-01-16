import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/components/counter/counter.module';
import { HeroesModule } from './heroes/components/counter/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CounterModule,
    BrowserModule,
    HeroesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }