"use client";
import Image from "next/image";
import { StyleVerticalUserMenu } from "./styles";
import Link from "next/link";
import { useProdStore } from "../../store";

export const VerticalUserMenu = (): JSX.Element => {
  const closeMenuMobile = useProdStore((state: any) => state?.closeMenu);
  const isMainMenuOpen = useProdStore((state: any) => state?.isMainMenuOpen);

  return (
    <>
      <StyleVerticalUserMenu className="header-mob-user-menu">
        <Link
          href="/dashboard/perfil"
          onClick={closeMenuMobile}
          className="profile-user"
        >
          <Image
            src="/user-menu-lateral.png"
            width={197}
            height={56}
            alt="Ticket Sports"
          />
        </Link>
        <Image
          src="/close.png"
          width={32}
          height={32}
          className="close"
          alt="Ticket Sports"
          onClick={closeMenuMobile}
        />
        <div className="list-items">
          <div className="wrapper">
            <h3>Inscrições</h3>
            <menu>
              <li>
                <Link href="/dashboard/meus-pedidos" onClick={closeMenuMobile}>
                  Meus pedidos
                </Link>
              </li>
              <li>
                <Link href="/dashboard/realizados-por-terceiros">
                  Realizadas por terceiros
                </Link>
              </li>
              <li>
                <Link href="#">Grupo e Assessorias</Link>
              </li>
              <li>
                <Link href="#">Pedidos</Link>
              </li>
              <li>
                <Link href="/dashboard/favoritos">Favoritos</Link>
              </li>
            </menu>
          </div>
          <div className="wrapper">
            <h3>Desafios Virtuais</h3>
            <menu>
              <li>
                <Link href="/dashboard/eventos-virtuais">Eventos</Link>
              </li>
              <li>
                <Link href="#">Certificados</Link>
              </li>
            </menu>
          </div>
          <div className="wrapper">
            <h3>Outros</h3>
            <menu>
              <li>
                <Link href="/dashboard/contatos" onClick={closeMenuMobile}>
                  Contatos
                </Link>
              </li>
              <li>
                <Link href="/dashboard/vouchers" onClick={closeMenuMobile}>
                  Vouchers
                </Link>
              </li>
            </menu>
          </div>
          <div className="wrapper">
            <menu>
              <li>
                <Link
                  href="/dashboard/politica-de-privacidade"
                  onClick={closeMenuMobile}
                >
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/termos-de-compra"
                  onClick={closeMenuMobile}
                >
                  Termo de compra
                </Link>
              </li>
              <li>
                <Link href="#">Sair</Link>
              </li>
            </menu>
          </div>
        </div>
      </StyleVerticalUserMenu>
    </>
  );
};
