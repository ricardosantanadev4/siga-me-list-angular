import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigaMeListComponent } from './siga-me.component';

describe('SigaMeListComponent', () => {
  let component: SigaMeListComponent;
  let fixture: ComponentFixture<SigaMeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigaMeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigaMeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
