import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroSearchComponent } from './hero-search.component';
import {HeroService} from '../hero.service';
import {of} from 'rxjs';

const makeSpy = function(target){
    const methods = (<any>Reflect).getMetadata('spyableMethods', target);

  return jasmine.createSpyObj('heroService', methods);
}

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSearchComponent ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      providers: [{ provide: HeroService, useValue: makeSpy(HeroService) }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke search', fakeAsync(() => {
    const heroService = TestBed.get(HeroService);
    heroService.searchHeroes.and.returnValue(of([]));
    component.search('superman');
    fixture.detectChanges();

    tick();
    fixture.detectChanges();



    expect(heroService.searchHeroes).toHaveBeenCalled();
    expect(heroService.searchHeroes).toHaveBeenCalledWith('superman');

  }));
});
