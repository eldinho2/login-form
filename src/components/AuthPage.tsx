import { UserForm } from "./UserForm";
import { FooterAuth } from './FooterAuth';
import { HeaderAuth } from "./HeaderAuth";

type AuthPageProps = {
  isRegister: boolean;
};

export const AuthPage = ({ isRegister }: AuthPageProps) => {
  return (
    <div className="min-h-[812px] w-[475px] border-2 shadow-2xl select-none">
      <section>
      <HeaderAuth isRegister={isRegister} />
      </section>
      <section className="flex items-center justify-center mt-6">
        <UserForm isRegister={isRegister} />
      </section>
      <section className="mt-16 mb-4">
        <FooterAuth isRegister={isRegister} />
      </section>
    </div>
  );
};
