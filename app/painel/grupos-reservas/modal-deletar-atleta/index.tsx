"use client";

import { StyledModal } from "./styles";
import Image from "next/image";

export const ModalDeletar = ({ setOpenModalExcludeAthlete }: any) => {
  return (
    <>
      <StyledModal>
        <Image
          src={"/icon-alert.svg"}
          alt={"Icone de confirmação"}
          width={40}
          height={40}
        />
        <h2>Tem certeza que deseja deletar o atleta?</h2>
        <p>
          Todas as informações serão perdidas, inclusive informações de
          pagamento.
        </p>
        <div className="btn-delete">
          <input
            type="button"
            value="Cancelar"
            className="cancelar"
            onClick={() => {
              setOpenModalExcludeAthlete(false);
            }}
          />
          <input type="button" value="Deletar" onClick={() => {}} />
        </div>
      </StyledModal>
    </>
  );
};
