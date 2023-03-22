import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidbuttonComponent } from './midbutton.component';

describe('MidbuttonComponent', () => {
  let component: MidbuttonComponent;
  let fixture: ComponentFixture<MidbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
