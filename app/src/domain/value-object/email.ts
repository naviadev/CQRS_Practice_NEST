export class Email {
  value: string;
  constructor(value: string) {
    if (!this.isValidEmail(value)) {
      throw new Error('Invalid email format');
    }
    this.value = value;
  }
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
