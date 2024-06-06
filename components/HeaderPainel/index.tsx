"use client";

import Link from "next/link";
import "./styles.scss";
import Image from "next/image";

export const HeaderPainel = (): JSX.Element => {
  return (
    <div className="header-painel">
      <div>
        <p className="header-painel__back-button">Voltar</p>
      </div>
      <div className="header-painel__logo">
        <Link href="/">
          <Image
            src="/logo-ticket-sports.svg"
            width={181}
            height={32}
            alt="Ticket Sports"
          />
        </Link>
      </div>
      <div className="header-painel__help-link">
        <Link
          href="https://gruposeassessorias.zendesk.com/hc/pt-br"
          className="btn-help"
          target="_blank"
        >
          Preciso de ajuda
        </Link>
      </div>
    </div>
  );
};
