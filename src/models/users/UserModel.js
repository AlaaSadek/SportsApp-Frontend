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
    confirmPassword = ""
  ) {
    this.fullName = fullName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}
