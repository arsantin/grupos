"use client";
import Link from "next/link";
import { Button } from "../Button";
import { StyledCard } from "./styles";
import Image from "next/image";
interface ICard {
  textColor?: any;
  backgroundColor?: any;
  hoverColor?: any;
  handleClick?: any;
  textAdd?: any;
}

export const Card = ({
  textColor,
  backgroundColor,
  hoverColor,
  handleClick,
  textAdd,
}: ICard) => {
  return (
    <>
      <StyledCard
        $backgroundColor={backgroundColor}
        $hoverColor={hoverColor}
        $textColor={textColor}
      >
        <div className="card-left">
          <Image
            src="/thumb-meus-pedidos.png"
            width={134}
            height={134}
            alt="Ticket Sports"
          />
        </div>
        <div className="card-right">
          <div className="card-right-top">
            <div className="card-right-order">
              <strong>Pedido</strong> nº: 6175862
            </div>
            <div className="card-right-value">
              <strong>Valor:</strong> Valor: R$ 150,00 ·{" "}
              <span>
                <strong>Pago</strong>
              </span>
            </div>
          </div>
          <div className="card-right-title">
            <strong>XXV Troféu cidade de São Paulo Taunsa Group</strong>
          </div>
          <div className="card-right-location">
            São José do Rio Preto , SP, Brasil
          </div>
          <div className="card-right-date">Data do evento: 25/10/2024</div>
          <Link href="meus-pedidos/detalhes-pedido">
            <Button
              backgroundColor={"#fff"}
              textColor={"#000"}
              hoverColor={"#000"}
              textHoverColor={"#fff"}
              paddingProps={"3px 15px"}
              title="Mais detalhes"
              borderProps={"solid 1px var(--text-color)"}
              btnFunction={() => {}}
            />
          </Link>
          <div className="actionAdd" onClick={handleClick}>
            <p>{textAdd}</p>
          </div>
        </div>
      </StyledCard>
    </>
  );
};
