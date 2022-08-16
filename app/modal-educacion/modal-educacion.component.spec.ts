import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEducacionComponent } from './modal-educacion.component';

describe('ModalEducacionComponent', () => {
  let component: ModalEducacionComponent;
  let fixture: ComponentFixture<ModalEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
