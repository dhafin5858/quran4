import { useSurahs } from "@/libs/hooks/surah";
import Head from "next/head";
import Link from "next/link";

import Image from 'next/image'




export default function Home() {
  const { data: surahs } = useSurahs();
  return (
    <>
      <Head>
        <title>Al-Quran Digital</title>
      </Head>

      <div className="max-w-[600px] container mx-auto px-5 md:px-0">
        <div className="pt-10">
          <h2 className="text-3xl mb-1">Quran Opat</h2>
          <p className="text-gray-400 font-light text-xl">
            akang teteh bisa akses quran ini dengan lancar
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 py-10">
          {surahs?.map((surah) => (
            <Link
              className="border border-gray-200 duration-300 hover:border-black rounded-md px-6 py-4"
              href={`/${surah?.number}`}
              key={surah?.number}
            >
              <div>
                <div className="font-medium">
                  {surah?.number}. {surah?.englishName}
                </div>
                <div className="text-gray-400 font-light">
                  {surah?.revelationType} | {surah?.numberOfAyahs} Ayat
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}




