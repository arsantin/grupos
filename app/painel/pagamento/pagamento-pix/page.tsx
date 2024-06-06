"use client";

import Link from "next/link";
import { StyledPayment } from "./styles";
import Image from "next/image";
import { Button, H2Title } from "design-system-ticket-sports";

export default function PixPayment() {
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
            <Image src={"/Vector.png"} alt={""} width={200} height={200} />
            imagem exemplo
          </div>
          <div className="btn-pay">
            <Button variation="primary" title="Copiar código chave PIX" />
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
                  Pagamentos a qualquer hora de forma instantânea e segura;
                </li>
                <li>
                  O pagamento poderá ser realizado até 13/12/2023 22:04:15;
                </li>
                <li>
                  Os pagamentos por Pix e Picpay dos seus pedidos Ticket Sports
                  são realizados por QR code ou código de transferência Pix.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </StyledPayment>
    </>
  );
}
