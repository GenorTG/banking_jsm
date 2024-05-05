"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathName = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          href={"/"}
          className="mb-12 cursor-pointer flex items-center gap-2"
        >
          <Image
            src={"/icons/logo.svg"}
            alt="horizon logo"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks.map((l) => {
          const isActive =
            pathName === l.route || pathName.startsWith(`${l.route}/`);
          return (
            <Link
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
              href={l.route}
              key={l.label}
            >
              <div className="relative size-6">
                <Image
                  src={l.imgURL}
                  alt={l.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p className={cn("sidebar-label", { "text-white": isActive })}>
                {l.label}
              </p>
            </Link>
          );
        })}
        user
      </nav>
      <Footer user={user} type="desktop" />
    </section>
  );
};
export default Sidebar;