"use client";

import { StyledModal } from "./styles";
import Image from "next/image";

export const ModalSolicitacao = ({ setOpenModalRequest }: any) => {
  return (
    <>
      <StyledModal>
        <Image
          src={"/icon-confirmacao.svg"}
          alt={"Icone de confirmação"}
          width={40}
          height={40}
        />
        <h2>Solicitação enviada</h2>
        <p>
          Aguarde, em breve a organização do evento retornará sua solicitação.
          Você receberá no e-mail <strong>william@email.com</strong> a
          confirmação para continuar o processo.
        </p>
        <h4>Nº da solicitação: 000000098593</h4>
        <input
          type="button"
          value="Fechar"
          onClick={() => {
            setOpenModalRequest(false);
          }}
        />
      </StyledModal>
    </>
  );
};
