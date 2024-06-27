export type TypeisRegister = {
  isRegister: boolean;
  setIsRegister?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UserFormProps = {
  isRegister: boolean;
}

export type FormData = {
  email: string;
  password: string;
  phone?: string;
}
