"use client";

import { Button } from "design-system-ticket-sports";
import { StyledModal } from "./styles";
import Image from "next/image";

export const ModalPerguntasReservas = ({
  setOpenModalPerguntasReservas,
}: any) => {
  return (
    <>
      <StyledModal>
        <Image
          src={"/icon-alert.svg"}
          alt={"Icone de confirmação"}
          width={40}
          height={40}
        />
        <h2>As Perguntas Reservas não foram respondidas</h2>
        <p>
          Este processo é obrigatório para finalizar as inscrições, capricha lá
          chuchu!
        </p>
        <div className="btn-delete">
          <div className="btn">
            <input
              type="button"
              value="Depois"
              className="cancelar"
              onClick={() => {
                setOpenModalPerguntasReservas(false);
              }}
            />
          </div>

          <div className="btn">
            <Button title="Responder" size="small" variation="dark" />
          </div>
        </div>
      </StyledModal>
    </>
  );
};
