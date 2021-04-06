import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router,
} from '@angular/router';

import {Store} from '@ngxs/store';
import {UserState} from '../../store/auth/auth.state';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.store.selectSnapshot<boolean>(UserState.isAuthenticated);
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigateByUrl('/auth');
      return false;
    }
  }
}
