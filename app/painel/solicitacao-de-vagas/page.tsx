"use client";
import { useState } from "react";
import { StyledRequest } from "./styles";
import { useForm } from "react-hook-form";
import { Dialog } from "@/components/Dialog";
import { ModalSolicitacao } from "./modal-solicitacao-enviada";

export default function RequestVancancies() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  const [openModalRequest, setOpenModalRequest] = useState<Boolean>(false);
  return (
    <>
      {openModalRequest && (
        <Dialog open={openModalRequest}>
          <ModalSolicitacao
            setOpenModalRequest={() => {
              setOpenModalRequest(false);
            }}
          />
        </Dialog>
      )}
      <StyledRequest>
        <div className="wrapper-request">
          <p className="title-event">2º Juara Race – Evento Beneficente</p>
          <h2>Solicitação de vagas</h2>
          <p>
            Sua solicitação será enviada para o organizador e estará sujeita a
            aprovação.
          </p>
          <strong>
            *Você receberá um e-mail com a resposta assim que analisada.
          </strong>
          <div className="prazo-grupo">Inscrições de grupos até 30/04/2024</div>
        </div>
        <form className="info-grupos" onSubmit={handleSubmit(onSubmit)}>
          <div className="info-grupos-row">
            <label htmlFor="">Informe a quantidade de vagas</label>
            <input
              {...register("Qtd-vagas")}
              type="number"
              placeholder="Mínimo de 5"
            />
          </div>
          <div className="info-grupos-row">
            <label htmlFor="">Segmento*</label>
            <select {...register("Segmento")}>
              <option value="Assessoria">Assessoria</option>
            </select>
          </div>
          <div className="info-grupos-row">
            <label htmlFor="">Nome do grupo, equipe ou assessoria</label>
            <input
              {...register("Nome do grupo")}
              type="text"
              placeholder="Digite Aqui"
            />
          </div>
          <input
            className="enviar"
            type="submit"
            value="Enviar solicitação"
            onClick={() => {
              setOpenModalRequest(true);
            }}
          />
        </form>
      </StyledRequest>
    </>
  );
}
