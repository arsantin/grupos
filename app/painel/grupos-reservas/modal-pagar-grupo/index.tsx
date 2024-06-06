"use client";

import { StyledModal } from "./styles";
import Image from "next/image";

export const ModalPagarGrupo = ({ setOpenModalPayGroup }: any) => {
  return (
    <>
      <StyledModal>
        <Image
          src={"/icon-modal-enviar.svg"}
          alt={"Icone de confirmação"}
          width={40}
          height={40}
        />
        <h2>Pagar pelo grupo</h2>
        <p>O valor da taxa de serviços será incluso na geração do pedido.</p>
        <div></div>
        <input
          type="button"
          value="Finalizar em diversos pagamentos"
          className="whatsapp"
          onClick={() => {}}
        />
        <p>
          Vencimento dia <strong>25/05/2024</strong>
        </p>
        <input
          type="button"
          value="Finalizar em pagamento único"
          className="email"
          onClick={() => {}}
        />
        <p>
          Vencimento dia <strong>25/05/2024 </strong>
        </p>
        <input
          type="button"
          value="Cancelar"
          className="cancelar"
          onClick={() => {
            setOpenModalPayGroup(false);
          }}
        />
      </StyledModal>
    </>
  );
};
