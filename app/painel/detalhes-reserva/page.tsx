"use client";

import { useForm } from "react-hook-form";
import { WrapperEvent, FormStepOne, CloseButton } from "./styles";
import axios from "axios";
import { TitleBox } from "../../../components/TitleBox";

export default function ReservationDetails() {
  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  /*  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (values) => {
      return axios.post(
        `/api/reservas`,
        values
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reservationDetails"] });
    },
    onError: () => {
      toast.error(`Falha ao cadastrar um novo cupom`);
    },
  });
*/
  const onSubmit: (data: any) => void = (data) => {
    console.log(data);
  };

  return (
    <>
      <WrapperEvent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormStepOne>
            {/*               <CloseButton onClick={setOpenModalAddCoupon}></CloseButton>
             */}
            <TitleBox title="Amanda Carolina dos Santos" />
            <p style={{ margin: "4px 0px 0px 0px" }}>
              Preencha os dados abaixo:{" "}
            </p>

            <div className="full">
              <div className="row-value">
                <div className="half">
                  <label htmlFor="Nome" style={{ marginTop: "16px" }}>
                    Nome{" "}
                  </label>

                  <input
                    type="text"
                    className="zeroMargin"
                    {...register("nome", { required: true })}
                  />
                  {errors.nome != null && errors.nome.type === "required" && (
                    <span>Este campo é obrigatório</span>
                  )}
                </div>
                <div className="half">
                  <label htmlFor="E-mail" style={{ marginTop: "16px" }}>
                    E-mail
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="zeroMargin"
                  />
                  {errors.email != null && errors.email.type === "required" && (
                    <span>Este campo é obrigatório</span>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="half">
                  <label htmlFor="Documento">Documento</label>
                  <input type="text" {...register("documento")} />
                </div>
                <div className="half">
                  <label htmlFor="telefone">Telefone</label>
                  <input
                    type="text"
                    {...register("telefone", { required: true })}
                  />
                  {errors.telefone != null &&
                    errors.telefone.type === "required" && (
                      <span>Este campo é obrigatório</span>
                    )}
                </div>
              </div>
            </div>
            <div className="full">
              <div className="row-value">
                <div className="half">
                  <label htmlFor="Sexo" style={{ marginTop: "16px" }}>
                    Sexo
                  </label>
                  <input
                    type="text"
                    className="zeroMargin"
                    {...register("sexo", { required: true })}
                  />
                  {errors.sexo != null && errors.sexo.type === "required" && (
                    <span>Este campo é obrigatório</span>
                  )}
                </div>
                <div className="half">
                  <label
                    htmlFor="Data de nascimento"
                    style={{ marginTop: "16px" }}
                  >
                    Data de nascimento
                  </label>
                  <input
                    {...register("dataNascimento", { required: true })}
                    type="date"
                    className="zeroMargin"
                  />
                  {errors.dataNascimento != null &&
                    errors.dataNascimento.type === "required" && (
                      <span>Este campo é obrigatório</span>
                    )}
                </div>
              </div>
              <div className="row">
                <div className="half">
                  <label htmlFor="Documento">Documento</label>
                  <input type="text" {...register("documento")} />
                </div>
                <div className="half">
                  <label htmlFor="telefone">Telefone</label>
                  <input
                    type="text"
                    {...register("telefone", { required: true })}
                  />
                  {errors.telefone != null &&
                    errors.telefone.type === "required" && (
                      <span>Este campo é obrigatório</span>
                    )}
                </div>
              </div>
            </div>
            <div className="full">
              <div className="row-value">
                <div className="half">
                  <label
                    htmlFor="Valor de desconto sobre o preço vigente"
                    style={{ marginTop: "16px" }}
                  >
                    Valor de desconto sobre o preço vigente
                  </label>

                  <input
                    type="number"
                    step=".01"
                    className="zeroMargin"
                    {...register("valorDesconto", { required: true })}
                  />
                  {errors.valorDesconto != null &&
                    errors.valorDesconto.type === "required" && (
                      <span>Este campo é obrigatório</span>
                    )}
                </div>
                <div className="half">
                  <label
                    htmlFor="Número de vezes que será utilizado"
                    style={{ marginTop: "16px" }}
                  >
                    Número de vezes que será utilizado
                  </label>
                  <input
                    {...register("vezesUtilizado", { required: true })}
                    type="number"
                    defaultValue={1}
                    className="zeroMargin"
                  />
                  {errors.vezesUtilizado != null &&
                    errors.vezesUtilizado.type === "required" && (
                      <span>Este campo é obrigatório</span>
                    )}
                </div>
              </div>
              <div className="row">
                <div className="half">
                  <label htmlFor="Data Início">Data Início</label>
                  <input type="text" disabled {...register("dataInicio")} />
                </div>
                <div className="half">
                  <label htmlFor="Data Fim">Data Fim</label>
                  <input
                    type="date"
                    placeholder="Selecione a data"
                    {...register("dataFinal", { required: true })}
                  />
                  {errors.dataFinal != null &&
                    errors.dataFinal.type === "required" && (
                      <span>Este campo é obrigatório</span>
                    )}
                </div>
              </div>
            </div>

            <div className="btn-salvar">
              <input
                value={"Salvar"}
                className="salvar"
                type="submit"
                placeholder="Salvar"
              />
            </div>
          </FormStepOne>
        </form>
      </WrapperEvent>
    </>
  );
}
