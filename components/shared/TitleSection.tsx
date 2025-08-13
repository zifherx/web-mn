import { TitleSectionType } from "@/props";

export function TitleSection({ titleOne, titleTwo, slogan }: TitleSectionType) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        {titleOne} <span className="text-yellow-600">{titleTwo}</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">{slogan}</p>
    </div>
  );
}
