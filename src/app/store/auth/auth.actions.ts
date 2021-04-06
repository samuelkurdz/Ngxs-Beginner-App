import {User} from '../../core/models/user.model';

export class Login {
  static readonly type = '[User] Login';

  constructor(public payload: User) {}
}

export class Logout {
  static readonly type = '[User] Logout';

  constructor() { }
}
