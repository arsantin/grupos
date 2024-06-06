"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog } from "@/components/Dialog";
import { StyledReserve } from "./styles";
import Image from "next/image";
import { ModalEnviar } from "../grupos-reservas/modal-enviar-cadastro";
import { ModalEnviarCobranca } from "../grupos-reservas/modal-enviar-cobranca";
import { ModalDeletar } from "../grupos-reservas/modal-deletar-atleta";
import { ModalPagarGrupo } from "../grupos-reservas/modal-pagar-grupo";
import { ModalPerguntasReservas } from "./modal-perguntas-reservas";
import { ModalEmailEnviado } from "../modal-email-enviado";

export default function RequestVancancies() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  const [openModalSendRegistration, setOpenModalSendRegistration] =
    useState<Boolean>(false);
  const [openModalSendBill, setOpenModalSendBill] = useState<Boolean>(false);
  const [openModalExcludeAthlete, setOpenModalExcludeAthlete] =
    useState<Boolean>(false);
  const [openModalPayGroup, setOpenModalPayGroup] = useState<Boolean>(false);
  const [openMenuConfig, setOpenMenuConfig] = useState<Boolean>(false);
  const [openModalPerguntasReservas, setOpenModalPerguntasReservas] =
    useState<Boolean>(false);

  const [filterSelect, setFilterSelect] = useState<number | null>(null);

  const addClassStyle = (index: number) => {
    setFilterSelect(index);
  };
  const alternarMenu = () => {
    setOpenMenuConfig(!openMenuConfig);
  };
  const allFields = watch();
  const isFormFilled = Object.values(allFields).every(
    (value) => value !== "" && value !== false && value !== undefined,
  );
  return (
    <>
      {openModalSendRegistration && (
        <Dialog open={openModalSendRegistration}>
          <ModalEnviar
            setOpenModalSendRegistration={() => {
              setOpenModalSendRegistration(false);
            }}
          />
        </Dialog>
      )}
      {openModalSendBill && (
        <Dialog open={openModalSendBill}>
          <ModalEnviarCobranca
            setOpenModalSendBill={() => {
              setOpenModalSendBill(false);
            }}
          />
        </Dialog>
      )}
      {openModalPayGroup && (
        <Dialog open={openModalPayGroup}>
          <ModalPagarGrupo
            setOpenModalPayGroup={() => {
              setOpenModalPayGroup(false);
            }}
          />
        </Dialog>
      )}
      {openModalExcludeAthlete && (
        <Dialog open={openModalExcludeAthlete}>
          <ModalDeletar
            setOpenModalExcludeAthlete={() => {
              setOpenModalExcludeAthlete(false);
            }}
          />
        </Dialog>
      )}
      {openModalPerguntasReservas && (
        <Dialog open={openModalPerguntasReservas}>
          <ModalPerguntasReservas
            setOpenModalPerguntasReservas={() => {
              setOpenModalPerguntasReservas(false);
            }}
          />
        </Dialog>
      )}
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
            <input
              type="button"
              value="Perguntas reservas"
              className="perguntas"
              onClick={() => {
                setOpenModalPerguntasReservas(true);
              }}
            />
            <select name="" id="">
              <option value="">Importar</option>
              <option value="">Importar via cadastro</option>
              <option value="">Importar outra reserva</option>
              <option value="">Importar via arquivo (xls)</option>
            </select>
            <input
              className="icon-search"
              type="search"
              placeholder="Pesquise"
              name=""
              id=""
            />
          </div>
        </div>
        <form className="info-grupos" onSubmit={handleSubmit(onSubmit)}>
          <div className="title-list">
            <div className="title-cpf">
              <input type="checkbox" />
              CPF
            </div>
            <div className="title-atleta">Atleta</div>
            <div className="title-email">Email*</div>
            <div className="title-genero">Gênero</div>
            <div className="title-nasc">Data Nasc.</div>
            <div className="title-cat">Categoria</div>
            <div className="title-modali">Modalidade</div>
            <div className="title-camisa">Camis.</div>
            <div className="action">Ação</div>
          </div>
          <div className="list-reserva">
            <div className="box-status"></div>
            <div className="list-todos">
              <input type="checkbox" />
            </div>
            <div className="list-cpf">
              <input {...register("Documento")} type="text" />
            </div>
            <div className="list-atleta">
              <input {...register("atleta")} type="text" />
            </div>
            <div className="list-email">
              <input {...register("email")} type="text" />
            </div>
            <div className="list-genero">
              <select id="" {...register("genero")}>
                <option value="M">M</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="list-data">
              <input {...register("data")} type="date" />
            </div>
            <div className="list-categoria">
              <select id="" {...register("categoria", { required: true })}>
                <option value="M">M</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="list-modalidade">
              <input
                {...register("modalidade", { required: true })}
                type="text"
              />
            </div>
            <div className="list-camisa">
              <select id="" {...register("camisa", { required: true })}>
                <option value="M">M</option>
                <option value="G">G</option>
              </select>
            </div>
            <div className="icon">
              <Image
                src={"/icon-preenchido.svg"}
                alt={""}
                width={32}
                height={32}
              />
              <Image
                src={"/icon-config.svg"}
                alt={""}
                onClick={alternarMenu}
                width={32}
                height={32}
              />
            </div>
            {isFormFilled && (
              <button
                type="submit"
                style={{
                  border: "none",
                  background: "none",
                  padding: 0,
                  cursor: "pointer",
                  position: "absolute",
                  left: "100%",
                  marginLeft: "8px",
                  width: "fit-content",
                }}
              >
                <Image
                  src={"/icon-save-cadastro.svg"}
                  alt={""}
                  width={32}
                  height={32}
                />
              </button>
            )}
            {openMenuConfig && (
              <div className="menu-config">
                <p
                  onClick={() => {
                    setOpenModalSendRegistration(true);
                  }}
                >
                  Enviar cadastro
                </p>
                <p
                  onClick={() => {
                    setOpenModalSendBill(true);
                  }}
                >
                  Enviar cobrança
                </p>
                <p
                  onClick={() => {
                    setOpenModalExcludeAthlete(true);
                  }}
                >
                  Excluir atleta
                </p>
              </div>
            )}
          </div>
        </form>
        <div className="btn-add">
          <input type="button" value="Adicionar" />
        </div>
      </StyledReserve>
    </>
  );
}
