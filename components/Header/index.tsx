"use client";

import Link from "next/link";
import { MainHeader } from "./styles";
import { useId } from "react";
import Image from "next/image";
import { Button } from "../Button";

export const HeaderDashboard = (): JSX.Element => {
  const idLayoutHeader = useId();

  return (
    <div className={idLayoutHeader}>
      <MainHeader>
        <div className="section">
          <div>
            <p className="back">Voltar</p>
          </div>
          <div className="logo">
            <Link href="/dashboard">
              <Image
                src="/logo-ticket-sports.svg"
                width={181}
                height={32}
                alt="Ticket Sports"
              />
            </Link>
          </div>
          <div>
            <Button
              backgroundColor={"#ddd"}
              textColor={"#000"}
              title="Preciso de ajuda"
              btnFunction={() => {}}
              hoverColor={"#ddd"}
              textHoverColor={"#000"}
            />
          </div>
        </div>
      </MainHeader>
    </div>
  );
};
