import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfPacienteComponent } from './inf-paciente.component';

describe('InfPacienteComponent', () => {
  let component: InfPacienteComponent;
  let fixture: ComponentFixture<InfPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
