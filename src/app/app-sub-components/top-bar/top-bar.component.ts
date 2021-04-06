import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../core/models/user.model';
import {Store} from '@ngxs/store';
import {Login, Logout} from '../../store/auth/auth.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-start-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  // @ts-ignore
  @Input() user: User;

  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  authAction(): void {
    if (this.user) {
      this.store.dispatch(new Logout());
    } else {
      const name = 'Samuel';
      const email = 'adebayo@mail.com';
      this.store.dispatch(new Login({ name, email})).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    }
  }
}
