import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowstockalertComponent } from './lowstockalert.component';

describe('LowstockalertComponent', () => {
  let component: LowstockalertComponent;
  let fixture: ComponentFixture<LowstockalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowstockalertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowstockalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
