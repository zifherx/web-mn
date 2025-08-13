import { BottomBarType } from "@/props";

export function BottomBar({ currentYear }: BottomBarType) {
  return (
    <div className="bg-gray-950 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Maximus Nutrition. Todos los derechos
            reservados
          </p>
          <p className="mt-2 md:mt-0">Desarrollado por Ziphonex</p>
        </div>
      </div>
    </div>
  );
}
