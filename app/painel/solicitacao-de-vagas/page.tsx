"use client";
import { useEffect, useState } from "react";
import "./styles.scss";
import { useForm } from "react-hook-form";
import { Dialog } from "@/components/Dialog";
import { ModalSolicitacao } from "./modal-solicitacao-enviada";
import { Button, H2Title, Input } from "design-system-ticket-sports";
import axios from "axios";

export default function RequestVancancies() {
  const [vacancyData, setVacancyData] = useState<any>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  const [openModalRequest, setOpenModalRequest] = useState<Boolean>(false);

  async function getVacancy(): Promise<void> {
    try {
      await axios.get("/api/vacancies").then(async (res) => {
        /*         const dados = res.data?.data as IUserProfile;
       
         */
        const dados = res.data?.data;
        setVacancyData(dados);
      });
    } catch (e) {
      console.error(e);
    }
  }

  async function postVacancy(data: object): Promise<void> {
    try {
      console.log(data);

      await axios.post("/api/vacancies", data).then(async (res) => {
        /*         const dados = res.data?.data as IUserProfile;

 */ const dados = res.data?.data;
        console.log("DADOS:", dados);
        const noDados = {
          user_name: "",
          access_token: "",
          refresh_token: "",
          expires_in: 0,
          token_type: "",
        };

        setOpenModalRequest(true);
      });
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getVacancy();
  }, []);

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
      <div className="vacancy-container">
        <div className="vacancy-container__wrapper-info">
          <p className="vacancy-container__wrapper-info--paragraph">
            2º Juara Race – Evento Beneficente
          </p>
          <H2Title text="Solicitação de vagas" />
          <p className="vacancy-container__wrapper-info--paragraph-two">
            Sua solicitação será enviada para o organizador e estará sujeita a
            aprovação.
            <br />
            <strong>
              *Você receberá um e-mail com a resposta assim que analisada.
            </strong>
          </p>
          <div className="vacancy-container__wrapper-info--group-date">
            Inscrições de grupos até 30/04/2024
          </div>
        </div>
        <form
          className="vacancy-container__info-grupos"
          onSubmit={handleSubmit(postVacancy)}
        >
          <Input
            register={register}
            inputType="number"
            name="VagacanciesQty"
            placeholderText="Mínimo de 5"
            title="Informe a quantidade de vagas"
          />
          <div className="info-grupos-row">
            <label htmlFor="">Segmento*</label>
            <select {...register("Segmentation")}>
              <option defaultValue={0} value={0}>
                {vacancyData[0]?.text}
              </option>
              {vacancyData?.slice(1)?.map((opt: any) => {
                return (
                  <option key={opt?.value} value={opt?.value}>
                    {opt?.text}
                  </option>
                );
              })}
            </select>
          </div>
          <Input
            title="Nome do grupo, equipe ou assessoria"
            name="TeamName"
            register={register}
            inputType="text"
            placeholderText="Digite Aqui"
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#060606",
              color: "#fff",
              padding: "15px",
              marginTop: "10px",
            }}
          >
            Enviar solicitação
          </button>
        </form>
      </div>
    </>
  );
}
