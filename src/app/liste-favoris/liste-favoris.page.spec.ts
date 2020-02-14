import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeFavorisPage } from './liste-favoris.page';

describe('ListeFavorisPage', () => {
  let component: ListeFavorisPage;
  let fixture: ComponentFixture<ListeFavorisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFavorisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeFavorisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
