import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottombannerComponent } from './bottombanner.component';

describe('BottombannerComponent', () => {
  let component: BottombannerComponent;
  let fixture: ComponentFixture<BottombannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottombannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottombannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
