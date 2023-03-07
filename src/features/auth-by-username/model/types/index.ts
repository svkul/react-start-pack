export interface ILoginSchema {
  isLoading: boolean;
  username: string;
  password: string;
  isModalOpen: boolean;
  error?: string;
}
