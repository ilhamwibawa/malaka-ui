import { ChevronRight } from "lucide-react";
import React from 'react';

import { Button } from "./button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { cn } from "../../lib/utils";

type MenuSheetType = {
  icon?: React.ReactNode;
  title: string;
  href?: string;
  description?: string;
  children?: MenuSheetType[] | undefined;
};

type Props = {
  menu: MenuSheetType[];
};


const MenuItem = (props: { menu: MenuSheetType }) => {
  return (
    <div className="">
      <a href={props.menu.href}>
        <div
          className={cn("flex gap-2 p-1.5", {
            "hover:bg-muted-foreground/20 cursor-pointer rounded":
              !props.menu.children,
          })}
        >
          {props.menu.icon || null}
          <p
            className={cn("", {
              "text-muted-foreground text-sm": props.menu.children,
            })}
          >
            {props.menu.title}
          </p>
        </div>
      </a>

      {props.menu.children && (
        <div className="ml-2 flex flex-col">
          {props.menu.children.map((menu) => (
            <MenuItem key={menu.title} menu={menu} />
          ))}
        </div>
      )}
    </div>
  );
};

const MenuSheet = (props: Props) => {
  const { menu } = props;
  // if menu has children, flatten it
  const flattenMenu = (menu: MenuSheetType): MenuSheetType[] => {
    if (!menu.children) {
      return [menu];
    }

    return menu.children.flatMap(flattenMenu);
  };

  const flatMenus = menu.flatMap(flattenMenu);

  return (
    <div className="relative h-full">
      <div className="text-center">
        {flatMenus.map((menu) => (
          <TooltipProvider delayDuration={0} key={menu.title}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href={menu.href}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-muted/20"
                  >
                    {menu.icon || null}
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">{menu.title}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>

      <Sheet>
        <SheetTrigger>
          <Button size="icon" asChild variant="secondary" className="absolute">
            <ChevronRight className="-right-4 top-1/2 h-8 w-8 -translate-y-1/2" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="flex items-center justify-center border-b text-center">
            <SheetTitle className="mb-2">Security Operation Center</SheetTitle>
          </SheetHeader>

          <div className="mt-4 flex flex-col gap-4">
            {menu.map((menu) => (
              <MenuItem key={menu.title} menu={menu} />
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};




export { MenuSheet };