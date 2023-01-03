type LoginTypes = {
  className: string;
};

export default function Login({ className }: LoginTypes) {
  return (
    <div
      className={`${className} w-full h-full transform translate-y-full bg-primary-clr fixed flex-center transition-transform duration-1000 ease-in-out motion-reduce:transition-none`}>
      Login
    </div>
  );
}
