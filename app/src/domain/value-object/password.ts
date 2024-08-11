export class Password {
  value: string;

  constructor(value: string) {
    if (!this.isValidPassword(value)) {
      throw new Error('Invalid password format');
    }
    this.value = value;
  }

  private isValidPassword(password: string): boolean {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/;
    return passwordRegex.test(password);
  }
}
