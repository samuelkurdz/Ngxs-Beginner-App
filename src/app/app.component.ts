import {Component, OnInit} from '@angular/core';
import {Actions, ofActionDispatched, Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {User} from './core/models/user.model';
import {UserState} from './store/auth/auth.state';
import {Router} from '@angular/router';
import {Logout} from './store/auth/auth.actions';

@Component({
  selector: 'ngx-start-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Select(UserState.getUser) user: Observable<User> | undefined;

  constructor(
    private actions: Actions, private router: Router
  ) { }

  ngOnInit(): void {
    this.actions.pipe(
      ofActionDispatched(Logout)
    ).subscribe(() => {
      this.router.navigate(['/auth']);
    });
  }

}
