import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAcercaComponent } from './modal-acerca.component';

describe('ModalAcercaComponent', () => {
  let component: ModalAcercaComponent;
  let fixture: ComponentFixture<ModalAcercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAcercaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAcercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
