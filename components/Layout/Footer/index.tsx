"use client";
import Link from "next/link";
import { FooterMainContainer } from "./styles";
import Image from "next/image";
import { H4Title } from "design-system-ticket-sports";

export const Footer = () => {
  return (
    <FooterMainContainer>
      <div className="wrapper">
        <div className="column-1">
          <Image
            width={180}
            height={28}
            src="/logo-ticket-sports.svg"
            alt="Ticket Sports"
            className="web"
          />
          <Image
            width={40}
            height={40}
            src="/logo.svg"
            alt="Ticket Sports"
            className="mob"
          />
          <p>
            Ticket Sports é líder nacional para organizadores de eventos para
            esporte, faça parte agora!
          </p>
          <div className="icon-media">
            <Image
              width={30}
              height={30}
              src="/Instagram_black.svg"
              alt="Ticket Sports"
            />
            <Image
              width={30}
              height={30}
              src="/Youtube_black.svg"
              alt="Ticket Sports"
            />
            <Image
              width={30}
              height={30}
              src="/Facebook_black.svg"
              alt="Ticket Sports"
            />
          </div>
        </div>
        <div className="column-2">
          <H4Title text="PARTICIPANTES" />
          <ul>
            <li>Login</li>
            <li>Cadastre-se</li>
            <li>Central de ajuda</li>
            <li>
              <Link href="/dashboard/termos-de-compra">Termos de compra</Link>
            </li>
          </ul>
        </div>
        <div className="column-3">
          <H4Title text="ORGANIZADORES" />
          <ul>
            <li>Sobre a plataforma</li>
            <li>Solicite um orçamento</li>
            <li>Suporte</li>
            <li>HUB</li>
          </ul>
        </div>
        <div className="column-4">
          <H4Title text="GRUPOS E ASSESSORIAS" />
          <ul>
            <li>Cadastre-se</li>
            <li>Central de ajuda</li>
            <li>Suporte</li>
          </ul>
        </div>
        <div className="column-4">
          <H4Title text="EMPRESA" />
          <ul>
            <li>Quem somos</li>
            <li>Trabalhe conosco</li>
            <li>
              <Link href="/dashboard/politica-de-privacidade">
                Política de privacidade
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p>Copyright © 2010-2024 Ticket Sports. All rights reserved.</p>
    </FooterMainContainer>
  );
};
