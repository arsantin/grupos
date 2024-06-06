"use client";

import Link from "next/link";
import { StyledPayment } from "./styles";
import Image from "next/image";

export default function DetailsPayment() {
  return (
    <>
      <StyledPayment>
        <div>
          <h2>Detalhes do pedido</h2>
          <p>2º Juara Race – Evento Beneficente · Reserva 98339</p>
        </div>
        <div>
          <div className="title-list">
            <div className="atleta">Atleta</div>
            <div className="email">Email*</div>
            <div className="sexo">Sexo</div>
            <div className="categoria">Categoria</div>
            <div className="modalidade">Modalidade</div>
            <div className="camisa">Camis.</div>
            <div className="valor">Valor</div>
          </div>
          <div className="list-detalhes">
            <div className="content-list">
              <div className="list-atleta">Atleta</div>
              <div className="list-email">Email*</div>
              <div className="list-sexo">Sexo</div>
              <div className="list-categoria">Categoria</div>
              <div className="list-modalidade">Modalidade</div>
              <div className="list-camisa">Camis.</div>
              <div className="list-valor">Valor</div>
            </div>
            <div className="content-list">
              <div className="list-atleta">Atleta</div>
              <div className="list-email">Email*</div>
              <div className="list-sexo">Sexo</div>
              <div className="list-categoria">Categoria</div>
              <div className="list-modalidade">Modalidade</div>
              <div className="list-camisa">Camis.</div>
              <div className="list-valor">Valor</div>
            </div>
          </div>
        </div>
      </StyledPayment>
    </>
  );
}
