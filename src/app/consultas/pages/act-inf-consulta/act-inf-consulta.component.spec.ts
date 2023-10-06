import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActInfConsultaComponent } from './act-inf-consulta.component';

describe('ActInfConsultaComponent', () => {
  let component: ActInfConsultaComponent;
  let fixture: ComponentFixture<ActInfConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActInfConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActInfConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
