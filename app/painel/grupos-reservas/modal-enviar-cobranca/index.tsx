"use client";

import { Button } from "design-system-ticket-sports";
import { StyledModal } from "./styles";
import Image from "next/image";

export const ModalEnviarCobranca = ({ setOpenModalSendBill }: any) => {
  return (
    <>
      <StyledModal>
        <Image
          src={"/icon-modal-enviar.svg"}
          alt={"Icone de confirmação"}
          width={40}
          height={40}
        />
        <h2>Deseja enviar a cobrança para os atletas selecionados?</h2>
        <p>
          Escolha abaixo a forma de enviar o link da cobranças para o atleta:
        </p>
        <div className="wrapper-copy">
          <p>www.linkteste.com.br</p>
          <p>Copiar código</p>
        </div>
        <div className="btn">
          <Button
            size="small"
            title="Enviar Cadastro por Whatsapp"
            variation="primary"
          />
        </div>
        <input
          type="button"
          value="Enviar Cadastro por E-mail"
          className="email"
          onClick={() => {}}
        />
        <input
          type="button"
          value="Cancelar"
          className="cancelar"
          onClick={() => {
            setOpenModalSendBill(false);
          }}
        />
      </StyledModal>
    </>
  );
};
