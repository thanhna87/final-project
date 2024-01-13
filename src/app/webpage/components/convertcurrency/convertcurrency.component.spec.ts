import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertcurrencyComponent } from './convertcurrency.component';

describe('ConvertcurrencyComponent', () => {
  let component: ConvertcurrencyComponent;
  let fixture: ComponentFixture<ConvertcurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertcurrencyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConvertcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
