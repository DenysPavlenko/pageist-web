import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <>
      <Image
        className={`hidden dark:block ${className}`}
        src="/logo-icon-light.svg"
        alt="app logo"
        width={100}
        height={100}
        priority
      />
      <Image
        className={`block dark:hidden ${className}`}
        src="/logo-icon-dark.svg"
        alt="app logo"
        width={100}
        height={100}
        priority
      />
    </>
  );
};
