"use client";

import { Button } from "design-system-ticket-sports";
import { StyledModal } from "./styles";
import Image from "next/image";

export const ModalEmailEnviado = ({ setOpenModalPerguntasReservas }: any) => {
  return (
    <>
      <StyledModal>
        <Image
          src={"/icon-confirmacao.svg"}
          alt={"Icone de confirmação"}
          width={40}
          height={40}
        />
        <h2>E-mail enviado com sucesso!</h2>
        <p>Foi enviado um e-mail para: william@email.com</p>
        <p>Abra o link e finalize o cadastro!</p>

        <div className="btn-delete">
          <div className="btn">
            <Button
              title="Fechar"
              size="small"
              variation="dark"
              btnfunction={() => {
                setOpenModalPerguntasReservas(false);
              }}
            />
          </div>
        </div>
      </StyledModal>
    </>
  );
};
