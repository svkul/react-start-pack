export interface IProfile {
  name: string;
  country: string;
}

export interface IProfileSchema {
  data?: IProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
