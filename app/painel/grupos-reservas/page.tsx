"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog } from "@/components/Dialog";
import { StyledReserve } from "./styles";

export default function RequestVancancies() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  const [openModalRequest, setOpenModalRequest] = useState<Boolean>(false);

  const [filterSelect, setFilterSelect] = useState<number | null>(null);

  const addClassStyle = (index: number) => {
    setFilterSelect(index);
  };

  return (
    <>
      {/* {openModalRequest && (
        <Dialog open={openModalRequest}>
          <ModalSolicitacao
            setOpenModalRequest={() => {
              setOpenModalRequest(false);
            }}
          />
        </Dialog>
      )} */}
      <StyledReserve>
        <div className="wrapper-reserve">
          <div className="title-event">2º Juara Race – Evento Beneficente</div>
          <div className="info-reserve">
            <div className="n-reserva">Reserva 98339</div>
            <div className="box-blue">
              <div className="vagas-aprovadas">
                <p>
                  Vagas aprovadas: <strong>10</strong>
                </p>
              </div>
              <div className="desconto">
                <p>
                  Desconto aplicado: <strong>10%</strong>
                </p>
              </div>
              <div className="periodo-pgto">
                <p>
                  Período de pagamento: <strong>19/04/2024 </strong>à{" "}
                  <strong>07/04/2024</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-filter">
          <div className="filter">
            <div
              onClick={() => addClassStyle(0)}
              className={
                filterSelect === 0
                  ? "filter-inicial filter-selecionado"
                  : "filter-inicial"
              }
            >
              Iniciados (10)
            </div>
            <div
              onClick={() => addClassStyle(1)}
              className={
                filterSelect === 1
                  ? "filter-pago filter-selecionado"
                  : "filter-pago"
              }
            >
              Pagos (5)
            </div>
            <div
              onClick={() => addClassStyle(2)}
              className={
                filterSelect === 2
                  ? "filter-pendente filter-selecionado"
                  : "filter-pendente"
              }
            >
              Pendentes (3)
            </div>
            <div
              onClick={() => addClassStyle(3)}
              className={
                filterSelect === 3
                  ? "filter-cancelado filter-selecionado"
                  : "filter-cancelado"
              }
            >
              Cancelados (2){" "}
            </div>
          </div>
          <div className="search">
            <select name="" id="">
              <option value="">Selecione</option>
            </select>
            <input type="search" name="" id="" />
          </div>
        </div>
        <form className="info-grupos" onSubmit={handleSubmit(onSubmit)}></form>
      </StyledReserve>
    </>
  );
}
