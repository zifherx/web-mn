"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadcrumbSectionType = {
  productName: string;
};

export function BreadcrumbSection({ productName }: BreadcrumbSectionType) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-xl mb-8">
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="hover:text-yellow-600">
            Inicio
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/productos" className="hover:text-yellow-600">
            Productos
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{productName}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
