import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigaMeFormComponent } from './siga-me-form.component';

describe('SigaMeFormComponent', () => {
  let component: SigaMeFormComponent;
  let fixture: ComponentFixture<SigaMeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigaMeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigaMeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
