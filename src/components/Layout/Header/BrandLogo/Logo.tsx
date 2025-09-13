import Image from "next/image";

type LogoProps = {
  type: "main" | "navbar";
};

const Logo: React.FC<LogoProps> = ({ type }) => {
  const mainLight = "/images/header/logo.svg";
  const mainDark = "/images/header/logo.svg";
  const navLight = "/images/header/nw-logo1.svg";
  const navDark = "/images/header/nw-logo1.svg";

  const lightLogo = type === "main" ? mainLight : navLight;
  const darkLogo = type === "main" ? mainDark : navDark;

  return (
    <>
      <Image
        src={lightLogo}
        alt="logo light mode"
        width={type === "main" ? 200 : 150}
        height={type === "main" ? 80 : 68}
        unoptimized={true}
        className="dark:hidden"
      />
      <Image
        src={darkLogo}
        alt="logo dark mode"
        width={type === "main" ? 200 : 150}
        height={type === "main" ? 80 : 68}
        unoptimized={true}
        className="hidden dark:block"
      />
    </>
  );
};

export default Logo;
