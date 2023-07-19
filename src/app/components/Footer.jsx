import Image from "next/image";
import logo from '../../../public/logo.svg';

export const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-zinc-700">
        <div className="max-w-[1200px] px-[5%] mx-auto py-24 sm:py-8 flex flex-wrap items-center justify-between text-white text-xs leading-5">
          <div className="w-[32%] sm:w-full sm:mb-8">
            <Image src={logo} alt='logo' className="sm:mx-auto" />
          </div>

          <div className="w-[32%] sm:w-full sm:mb-8">
            <h4 className="mb-2.5 text-base font-bold">タイトル</h4>
            <ul>
              <li className="before:content-['-'] before:mr-2">テキストテキストテキスト</li>
              <li className="before:content-['-'] before:mr-2">テキストテキストテキスト</li>
              <li className="before:content-['-'] before:mr-2">テキストテキストテキスト</li>
              <li className="before:content-['-'] before:mr-2">テキストテキストテキスト</li>
              <li className="before:content-['-'] before:mr-2">テキストテキストテキスト</li>
            </ul>
          </div>

          <div className="w-[32%] sm:w-full sm:mb-8">
            <h4 className="mb-2.5 text-base font-bold">タイトルタイトルタイトル</h4>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
      </div>
      <p className="w-full text-center text-xs py-8">&copy; Mag88</p>
    </footer>
  )
}