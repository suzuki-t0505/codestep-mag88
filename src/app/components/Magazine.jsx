import Image from "next/image";
import magazineArchive from '../../../public/magazine-archive.jpg';
import magazineNew from '../../../public/magazine-new.jpg';

export const Magazine = () => {
  return (
    <section id='magazine' className="text-center mb-20 max-w-full">
      <div className="max-w-[1200px] px-[5%] mx-auto">
        <h2 className="text-2xl font-bold mb-6">A special, long article in a newspaper or magazine</h2>
        <p className="text-sm mb-10">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
          テキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div className="flex justify-between flex-wrap">
          <Image src={magazineArchive} alt='magazineArchive image' className="w-[49%] sm:w-full sm:mb-10" />
          <Image src={magazineNew} alt='magazineNew image' className="w-[49%] sm:w-full" />
        </div>
      </div>
    </section>
  )
}