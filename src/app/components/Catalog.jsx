import Image from "next/image";
import catalog from '../../../public/catalog.jpg';
import antique from '../../../public/antique.jpg';

export const Catalog = () => {
  return (
    <section id='catalog' className="bg-gray-100">
      <div className="max-w-[1200px] px-[5%] mx-auto py-14">
        <div className="flex flex-wrap justify-between items-center mb-28">
          <Image src={catalog} alt='catalog image' className="w-[48%] sm:w-full sm:mb-14" />
          <div className="w-[48%] sm:w-full text-sm">
            <h3 className="text-2xl text-center mb-10">Catalog</h3>
            <p className="mb-8">テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <p className="mb-8">テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <p className="last:mb-0">テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-[48%] sm:w-full text-sm sm:mb-14">
            <h3 className="text-2xl text-center mb-10">Antique</h3>
            <p className="mb-8">テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <p className="mb-8">テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <p className="mb-8">テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <button type='button' className="py-3.5 px-8 border border-black text-sm block mx-auto">Read More</button>
          </div>
          <Image src={antique} alt='antique image' className="w-[48%] sm:w-full" />
        </div>
      </div>
    </section>
  )
}