import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculaRoutingModule } from './pelicula-routing.module';
import { ListaComponent } from './components/lista/lista.component';
import { AuthorsComponent } from './components/authors/authors.component';

import {
   AccordionModule, BadgeModule, BreadcrumbModule, ButtonModule, CardModule, CollapseModule,
   GridModule, UtilitiesModule, SharedModule, ListGroupModule, PlaceholderModule,
   ProgressModule, SpinnerModule,  TabsModule,
   NavModule,
   TooltipModule,
   CarouselModule,
   FormModule,
   DropdownModule,
   PaginationModule,
   PopoverModule,
   TableModule,

} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { PeliculasFirmadasComponent } from './components/peliculas-firmadas/peliculas-firmadas.component';
import { ReloadComponent } from './components/reload/reload.component';
@NgModule({
  declarations: [
  
    ListaComponent,
       AuthorsComponent,
       PeliculasFirmadasComponent,
       ReloadComponent
  ],
  imports: [

AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
    CommonModule,
    PeliculaRoutingModule
  ]
})
export class PeliculaModule { }
