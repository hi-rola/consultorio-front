import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConsultarComponent } from './form-consultar.component';

describe('FormConsultarComponent', () => {
  let component: FormConsultarComponent;
  let fixture: ComponentFixture<FormConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConsultarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
