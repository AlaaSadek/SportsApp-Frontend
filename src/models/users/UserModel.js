export class SignIn {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}
export class SignUp {
  constructor(
    fullName = "",
    email = "",
    phoneNumber = "",
    password = "",
  ) {
    this.fullName = fullName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
  }
}
