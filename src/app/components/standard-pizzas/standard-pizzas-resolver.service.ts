import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {IPizza} from '../../models/IPizza';
import {PizzaService} from '../../services/PizzaService';

@Injectable({
  providedIn: 'root'
})
export class StandardPizzasResolverService implements Resolve<IPizza[]> {

  constructor(private pizzaService: PizzaService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot):
                   Observable<IPizza[]>  {

    const category = route.paramMap.get('category');
    if (category == null) {
      return this.pizzaService.getAllPizzas();
    }
    return this.pizzaService.getPizzasByCategorie(category);
  }
}
