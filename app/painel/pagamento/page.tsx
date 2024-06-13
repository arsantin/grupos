"use client";

import Link from "next/link";
import { StyledPayment } from "./styles";
import Image from "next/image";
import { useState } from "react";
import { H3Title } from "design-system-ticket-sports";
import { Dialog } from "@/components/Dialog";
import { ModalEndereco } from "./cadastrar-endereco";

export default function Payment() {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [openModalEndereco, setOpenModalEndereco] = useState<Boolean>(false);

  const handleRadioChange = (paymentType: any) => {
    setSelectedPayment(paymentType);
  };
  return (
    <>
      {openModalEndereco && (
        <Dialog open={openModalEndereco}>
          <ModalEndereco
            setOpenModalEndereco={() => {
              setOpenModalEndereco(false);
            }}
          />
        </Dialog>
      )}
      <StyledPayment>
        <div className="title-info">
          <p>2º Juara Race – Evento Beneficente · Reserva 98339</p>
          <h2>Pagamento</h2>
          <div className="info-event">
            <div>
              Atleta: <strong>Amanda Carolina dos Santos</strong>
            </div>
            <div>
              E-mail: <strong>amandacarol@gmail.com</strong>
            </div>
            <div>
              Período de pagamento: <strong>19/04/2024 à 07/04/2024</strong>
            </div>
          </div>
          <div className="wrapper-payment">
            <div className="content-payment">
              <div
                className={`pix ${selectedPayment === "pix" ? "selected" : ""}`}
              >
                <div className="line-pix">
                  <div>
                    <input
                      type="radio"
                      name="payment"
                      className="custom-radio"
                      id="pix"
                      checked={selectedPayment === "pix"}
                      onChange={() => handleRadioChange("pix")}
                      style={{
                        width: "24px",
                        height: "20px",
                        margin: "0px 16px 0px 0px",
                      }}
                    />
                    <Image
                      src={"/icon-pix.svg"}
                      width={48}
                      height={48}
                      alt={""}
                    />
                    <div className="type">
                      <p>PIX</p>
                      <p>Aprovação imediata</p>
                    </div>
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
                        Pagamentos a qualquer hora de forma instantânea e
                        segura;
                      </li>
                      <li>
                        O pagamento poderá ser realizado até 13/12/2023
                        22:04:15;
                      </li>
                      <li>
                        Os pagamentos por Pix e Picpay dos seus pedidos Ticket
                        Sports são realizados por QR code ou código de
                        transferência Pix.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="btn-pedido">
                  <Link href={"/painel/pagamento/pagamento-pix"}>
                    <input type="button" value="Pagar com pix" />
                  </Link>
                </div>
              </div>
              <div
                className={`boleto ${selectedPayment === "boleto" ? "selected" : ""}`}
              >
                <div className="line-pix">
                  <div>
                    <input
                      type="radio"
                      name="payment"
                      checked={selectedPayment === "boleto"}
                      id="boleto"
                      onChange={() => handleRadioChange("boleto")}
                      style={{
                        width: "24px",
                        height: "20px",
                        margin: "0px 16px 0px 0px",
                      }}
                    />
                    <Image
                      src={"/icon-boleto.svg"}
                      width={48}
                      height={48}
                      alt={""}
                    />
                    <div className="type">
                      <p>Boleto</p>
                      <p>Vencimento em 1 dia útil.</p>
                    </div>
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
                        Pedimos que não efetue o pagamento após a data de
                        vencimento ou com valor divergente, caso isso ocorra seu
                        pedido será cancelado automaticamente. Vencimento em
                        18/12/2023;
                      </li>
                      <li>
                        Você poderá visualizar ou imprimir o boleto após a
                        finalização do pedido.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="btn-pedido">
                  <Link href={"/painel/pagamento/pagamento-boleto"}>
                    <input type="button" value="Gerar boleto" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="details-order">
              <H3Title text="Resumo da compra" />
              <hr />
              <H3Title text="Maratona 365 Hugo Farias - Projeto Propósito" />

              <div className="info-basic">
                <p>12 inscrições</p>
                <p>R$ 129,90</p>
              </div>
              <div className="info-basic">
                <p>Forma de pagamento</p>
                <p>PIX</p>
              </div>
              <Link href={"/painel/pagamento/detalhes-pedido"}>
                <div className="details">Detalhes do pedido</div>
              </Link>
              <hr />
              <div className="total">
                <p>Total do pedido</p>
                <p>R$ 389,70</p>
              </div>

              <div className="btn-pedido">
                <input
                  type="button"
                  value="Finalizar pedido"
                  onClick={() => {
                    setOpenModalEndereco(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </StyledPayment>
    </>
  );
}
