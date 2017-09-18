export class AuthState {
  constructor(public $uid: string) {

  }

  checkLoginState() {
    return !!this.$uid;
  }
}
