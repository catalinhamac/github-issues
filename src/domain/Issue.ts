import { Repository } from './Repository';
import { User } from './User';

export enum LabelColor {
  red = 'd73a4a',
  blue = '0075ca',
  yellow = 'e4e669',
  pink = 'd876e3',
}

export enum State {
  open = 'open',
  closed = 'closed',
}

export interface Label {
  readonly id: number;
  readonly color: string;
  readonly name: string;
}

export interface Issue {
  readonly id: string;
  readonly url: string;
  readonly created_at: string;
  readonly closed_at: string;
  readonly state: string;
  readonly title: string;
  readonly updated_at: string;
  readonly number: number;
  readonly pull_request: string;
  readonly labels: Label[];
  readonly repository: Repository;
  readonly user: User;
}
