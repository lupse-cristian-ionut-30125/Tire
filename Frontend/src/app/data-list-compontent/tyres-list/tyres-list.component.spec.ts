import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyresListComponent } from './tyres-list.component';

describe('TyresListComponent', () => {
  let component: TyresListComponent;
  let fixture: ComponentFixture<TyresListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TyresListComponent]
    });
    fixture = TestBed.createComponent(TyresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
