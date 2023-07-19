import Image from "next/image";
import mainvisual from '../../../public/mainvisual.jpg';
import logo from '../../../public/logo.svg';

export const Header = () => {
  return (
    <header className="max-w-full relative mb-20 h-[100vh] bg-[url('/mainvisual.jpg')] bg-cover bg-top">
      <h1 className="absolute top-10 right-10">
        <Image src={logo} alt='logo image' />
      </h1>
    </header>
  )
}