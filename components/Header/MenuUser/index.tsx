"use client";
import Image from "next/image";
import { StyleMenu } from "./styles";
import Link from "next/link";
import { useProdStore } from "../../../store";

export const MenuUser = (): JSX.Element => {
  const openMenuMobile = useProdStore((state: any) => state?.openMenu);

  return (
    <>
      <StyleMenu>
        <div className="user-orders">
          <menu>
            <li>
              <Link href="/dashboard/meus-pedidos">Meus pedidos</Link>
            </li>
          </menu>
        </div>
        <Image
          src="/user-menu.png"
          width={40}
          height={40}
          className="pic-user"
          alt="Ticket Sports"
          onClick={openMenuMobile}
        />
      </StyleMenu>
    </>
  );
};
