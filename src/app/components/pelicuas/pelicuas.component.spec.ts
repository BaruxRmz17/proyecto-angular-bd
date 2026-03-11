import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelicuasComponent } from './pelicuas.component';

describe('PelicuasComponent', () => {
  let component: PelicuasComponent;
  let fixture: ComponentFixture<PelicuasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PelicuasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PelicuasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
