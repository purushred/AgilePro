import { Role } from './role';

export class User {
    public id: BigInteger;
    public username: string;
    public password: string;
    public role: Role;
}
