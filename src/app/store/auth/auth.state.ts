import {Injectable} from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Login, Logout} from './auth.actions';
import {User} from '../../core/models/user.model';

export interface UserStateModel {
  user: User;
}

@State<UserStateModel>({
  name: 'auth',
  defaults: {
// @ts-ignore
    user: undefined
  }
})
@Injectable()
export class UserState {

  // selectors
  @Selector()
  static isAuthenticated(state: UserStateModel): boolean {
    return !!state.user;
  }

  @Selector()
  static getUser(state: UserStateModel): User {
    return state.user;
  }

  // actions
  @Action(Login)
  userLogin({getState, patchState }: StateContext<UserStateModel>, { payload }: Login): void {
    const state = getState();
    patchState({
      ...state,
      user: payload
    });
  }

  @Action(Logout)
  userLogout({ getState, patchState }: StateContext<UserStateModel>): void {
    const state = getState();
    patchState({
      ...state,
      user: undefined
    });
  }
}
