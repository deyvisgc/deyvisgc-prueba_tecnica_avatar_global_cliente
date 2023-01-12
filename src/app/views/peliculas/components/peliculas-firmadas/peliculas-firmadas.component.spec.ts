import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasFirmadasComponent } from './peliculas-firmadas.component';

describe('PeliculasFirmadasComponent', () => {
  let component: PeliculasFirmadasComponent;
  let fixture: ComponentFixture<PeliculasFirmadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasFirmadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasFirmadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
