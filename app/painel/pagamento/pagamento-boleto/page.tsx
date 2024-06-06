"use client";

import Link from "next/link";
import { StyledPayment } from "./styles";
import Image from "next/image";
import { Button, H2Title } from "design-system-ticket-sports";

export default function BoletoPayment() {
  return (
    <>
      <StyledPayment>
        <div>
          <p>2º Juara Race – Evento Beneficente · Reserva 98339</p>
          <H2Title text="Seu pedido será processado após o pagamento" />
        </div>
        <div className="Qr-code">
          <div className="detalhes-pix">
            <p>
              Vencimento: <strong>31/03/2023</strong>
            </p>
            <p>
              Valor do pedido: <strong>R$ 200,00</strong>
            </p>
          </div>
          <div className="image-qrcode">
            Código do Boleto 75590.00331 89850.763536 21050.179841 2
            93060000019904
            <Image src={"/Group.png"} alt={""} width={800} height={85} />
          </div>
          <div className="btn-pay">
            <div className="btn">
              <Button variation="primary" title="Visualizar boleto" />
            </div>
            <div className="btn">
              <Button variation="primary" title="Copiar código do boleto" />
            </div>
          </div>
          <div className="info-payment">
            <div>
              <Image
                src={"/icon-info-payment.svg"}
                width={40}
                height={40}
                className=""
                alt={""}
              />
            </div>
            <div>
              <h3>Orientações</h3>
              <ul>
                <li>
                  Pedimos que não efetue o pagamento após a data de vencimento
                  ou com valor divergente, caso isso ocorra seu pedido será
                  cancelado automaticamente. Vencimento em 18/12/2023;
                </li>
                <li>
                  Você poderá visualizar ou imprimir o boleto após a finalização
                  do pedido.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </StyledPayment>
    </>
  );
}
