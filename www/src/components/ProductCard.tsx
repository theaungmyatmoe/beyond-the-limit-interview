import { FC, ReactNode } from "react";

export type SVGIcon = HTMLElement & SVGAElement;
export enum BackgroundColor {
  Green = "bg-green-400",
  Red = "bg-red-400",
  Indigo = "bg-blue-400",
}

export interface IProduct {
  name: string;
  description: string;
  icon: ReactNode;
  backgroundColor: BackgroundColor;
}
interface IProductProps {
  product: IProduct;
}
export default function ProductCard({
  product: { name, description, icon, backgroundColor },
}: IProductProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-300 text-white ${backgroundColor}`}
      >
        {icon}
      </div>
      <h3 className="mt-3 max-w-3xl text-2xl font-bold text-gray-800/80">
        {name}
      </h3>
      <p className="mt-3 text-center leading-relaxed text-gray-700">
        {description}
      </p>
    </div>
  );
}
