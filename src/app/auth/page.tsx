import SignInForm from "@/components/signInForm";
import SignUpForm from "@/components/signUpForm";

export default function Auth() {
  return (
    <div className='flex w-4xl justify-between my-[30px] mx-auto'>
      <div className='flex flex-col w-[380px]'>
        <h2 className='text-[24px]'>I already have an account</h2>
        <span>Sign in with email and password</span>
        <SignInForm />
      </div>
      <div className='flex flex-col w-[380px] justify-between'>
        <h2 className='text-[24px]'>Don&apos;t have an account?</h2>
        <span>Sign up with email and password</span>
        <SignUpForm />
      </div>
    </div>
  );
}
