/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog } from "@/components/Dialog";
import { StyledReserve } from "./styles";
import Image from "next/image";
import { ModalStandard } from "@/components/ModalStandard";
import axios from "axios";

export default function RequestVancancies() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const [reservationList, setReservationList] = useState([]);
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

  async function getReservations(): Promise<void> {
    try {
      await axios
        .get(`/api/reservations?status=${filterSelect}`)
        .then(async (res) => {
          const dados = res.data?.data;
          setReservationList(dados);
        });
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getReservations();
  }, [filterSelect]);

  return (
    <>
      {openModalSendRegistration && (
        <Dialog open={openModalSendRegistration}>
          <ModalStandard
            setOpenModalRequest={() => {
              setOpenModalSendRegistration(false);
            }}
            imageSrc={"/icon-modal-enviar.svg"}
            title={"Enviar Cadastro"}
            textInfo={
              "Escolha abaixo a forma de enviar o link do cadastro para o atleta:"
            }
            linkAtleta="www.linkteste.com.br"
            titleButtonBlue="Enviar Cadastro por Whatsapp"
            titleButtonBorderBlue="Enviar Cadastro por E-mail"
            titleButtonBlack="Cancelar"
          />
        </Dialog>
      )}
      {openModalSendBill && (
        <Dialog open={openModalSendBill}>
          <ModalStandard
            setOpenModalRequest={() => {
              setOpenModalSendBill(false);
            }}
            imageSrc={"/icon-modal-enviar.svg"}
            title={"Deseja enviar a cobrança para os atletas selecionados?"}
            textInfo={
              "Escolha abaixo a forma de enviar o link da cobranças para o atleta:"
            }
            linkAtleta="www.linkteste.com.br"
            titleButtonBlue="Enviar Cadastro por Whatsapp"
            titleButtonBorderBlue="Enviar Cadastro por E-mail"
            titleButtonBlack="Cancelar"
          />
        </Dialog>
      )}
      {openModalPayGroup && (
        <Dialog open={openModalPayGroup}>
          <ModalStandard
            setOpenModalRequest={() => {
              setOpenModalPayGroup(false);
            }}
            imageSrc={"/icon-modal-enviar.svg"}
            title={"Pagar pelo grupo"}
            textInfo={
              "O valor da taxa de serviços será incluso na geração do pedido."
            }
            h4Text="Prazo máximo para gerar o pedido: 20/05/2024"
            titleButtonBlue="Enviar Cadastro por Whatsapp"
            titleButtonBorderBlue="Enviar Cadastro por E-mail"
            titleButtonBlack="Cancelar"
          />
        </Dialog>
      )}
      {openModalExcludeAthlete && (
        <Dialog open={openModalExcludeAthlete}>
          <ModalStandard
            setOpenModalRequest={() => {
              setOpenModalExcludeAthlete(false);
            }}
            imageSrc={"/icon-alert.svg"}
            title={"Tem certeza que deseja deletar o atleta?"}
            textInfo={
              "Todas as informações serão perdidas, inclusive informações de pagamento."
            }
            titleButtonSmallGray="Cancelar"
            titleButtonSmallBlack="Deletar"
          />
        </Dialog>
      )}
      {openModalPerguntasReservas && (
        <Dialog open={openModalPerguntasReservas}>
          <ModalStandard
            setOpenModalRequest={() => {
              setOpenModalPerguntasReservas(false);
            }}
            imageSrc={"/icon-alert.svg"}
            title={"As Perguntas Reservas não foram respondidas"}
            textInfo={
              "Este processo é obrigatório para finalizar as inscrições, capricha lá chuchu!"
            }
            titleButtonSmallGray="Depois"
            titleButtonSmallBlack="Responder"
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
              Iniciados
              {`(${
                reservationList?.filter(
                  (iniciados: any) => iniciados?.status === 0,
                ).length
              })`}
            </div>
            <div
              onClick={() => addClassStyle(1)}
              className={
                filterSelect === 1
                  ? "filter-pago filter-selecionado"
                  : "filter-pago"
              }
            >
              Pagos
              {`(${
                reservationList?.filter((pagos: any) => pagos?.status === 1)
                  .length
              })`}
            </div>
            <div
              onClick={() => addClassStyle(2)}
              className={
                filterSelect === 2
                  ? "filter-pendente filter-selecionado"
                  : "filter-pendente"
              }
            >
              Pendentes{" "}
              {`(${
                reservationList?.filter(
                  (pendentes: any) => pendentes?.status === 2,
                ).length
              })`}
            </div>
            <div
              onClick={() => addClassStyle(3)}
              className={
                filterSelect === 3
                  ? "filter-cancelado filter-selecionado"
                  : "filter-cancelado"
              }
            >
              Cancelados{" "}
              {`(${
                reservationList?.filter(
                  (cancelados: any) => cancelados?.status === 3,
                ).length
              })`}
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
          {reservationList?.map((reservation: any) => {
            return (
              <>
                <div className="list-reserva">
                  <div className="box-status"></div>
                  <div className="list-todos">
                    <input type="checkbox" />
                  </div>
                  <div className="list-cpf">
                    <input
                      {...register("Documento")}
                      type="text"
                      defaultValue={reservation?.document}
                    />
                  </div>
                  <div className="list-atleta">
                    <input
                      {...register("atleta")}
                      type="text"
                      defaultValue={reservation?.name}
                    />
                  </div>
                  <div className="list-email">
                    <input
                      {...register("email")}
                      type="text"
                      defaultValue={reservation?.email}
                    />
                  </div>
                  <p style={{ color: "red" }}>API DE GÊNEROS</p>
                  <div className="list-genero">
                    <select id="" {...register("genero")}>
                      <option value="M">M</option>
                      <option value="F">F</option>
                    </select>
                  </div>
                  <div className="list-data">
                    <input
                      {...register("data")}
                      type="date"
                      defaultValue={reservation?.birthday}
                    />
                  </div>
                  <div className="list-categoria">
                    <p style={{ color: "red" }}>API DE CAT</p>

                    <select
                      id=""
                      {...register("categoria", { required: true })}
                    >
                      <option value="M">M</option>
                      <option value="F">F</option>
                    </select>
                  </div>
                  <div className="list-modalidade">
                    <p style={{ color: "red" }}>API DE MODAL.</p>

                    <input
                      {...register("modalidade", { required: true })}
                      type="text"
                    />
                  </div>
                  <p style={{ color: "red" }}>
                    Qual prop do json é ref ao tam?
                  </p>

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
              </>
            );
          })}
        </form>
        <div className="btn-add">
          <input type="button" value="Adicionar" />
        </div>
      </StyledReserve>
    </>
  );
}
