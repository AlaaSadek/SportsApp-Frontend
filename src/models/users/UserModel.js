export class SignIn {
  constructor(emailAddress, password) {
    this.emailAddress = emailAddress;
    this.password = password;
  }
}
export class SignUp {
  constructor(
    fullName = "",
    emailAddress = "",
    phoneNumber = "",
    password = "",
    confirmPassword = ""
  ) {
    this.fullName = fullName;
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}
