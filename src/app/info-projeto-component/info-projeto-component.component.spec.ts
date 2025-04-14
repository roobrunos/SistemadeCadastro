import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProjetoComponentComponent } from './info-projeto-component.component';

describe('InfoProjetoComponentComponent', () => {
  let component: InfoProjetoComponentComponent;
  let fixture: ComponentFixture<InfoProjetoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoProjetoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoProjetoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
