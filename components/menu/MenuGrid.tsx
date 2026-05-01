"use client";

import { MenuCategory } from "@/components/menu/MenuCategory";
import { MENU } from "@/lib/menu";

export function MenuGrid() {
  const left = MENU.filter((c) => c.column === "left");
  const right = MENU.filter((c) => c.column === "right");

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-16 md:py-24 lg:px-12">
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0">
        <div className="space-y-20">
          {left.map((cat) => (
            <MenuCategory key={cat.id} category={cat} />
          ))}
        </div>
        <div className="space-y-20">
          {right.map((cat) => (
            <MenuCategory key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </div>
  );
}
