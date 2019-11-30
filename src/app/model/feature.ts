import { Status } from './status.enum';
export class Feature {
    public featureId: BigInteger;
    public name: string;
    public description: string;
    public projectId: number;
    public status: Status = Status.TODO;
}
