import { Email } from '../value-object/email';
import { Password } from '../value-object/password';

export class User {
  private constructor(
    private readonly email: Email,
    private readonly password: Password,
  ) {}

  static create(email: string, password: string): User {
    return new User(new Email(email), new Password(password));
  }
}
