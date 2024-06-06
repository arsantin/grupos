"use client";

import { useForm } from "react-hook-form";
import { WrapperEvent, FormStepOne, CloseButton } from "./styles";
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
            <CloseButton onClick={() => {}}></CloseButton>
            <TitleBox title="Amanda Carolina dos Santos" />
            <p style={{ margin: "4px 0px 0px 0px" }}>
              Preencha os dados abaixo:{" "}
            </p>

            <div className="row">
              <div className="half">
                <label htmlFor="Documento">Documento</label>
                <select name="documento" id="documento">
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
                {errors.documento != null &&
                  errors.documento.type === "required" && (
                    <span>Este campo é obrigatório</span>
                  )}
              </div>
              <div className="half">
                <label htmlFor="Telefone">Telefone</label>
                <select name="telefone" id="telefone">
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
                {errors.telefone != null &&
                  errors.telefone.type === "required" && (
                    <span>Este campo é obrigatório</span>
                  )}
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
                    {errors.email != null &&
                      errors.email.type === "required" && (
                        <span>Este campo é obrigatório</span>
                      )}
                  </div>
                </div>
                <div className="row">
                  <div className="half">
                    <label htmlFor="Categoria">Categoria</label>
                    <select name="categoria" id="categoria">
                      <option value="">1</option>
                      <option value="">2</option>
                    </select>
                    {errors.categoria != null &&
                      errors.categoria.type === "required" && (
                        <span>Este campo é obrigatório</span>
                      )}
                  </div>
                  <div className="half">
                    <label htmlFor="Modalidade">Modalidade</label>
                    <select name="modalidade" id="modalidade">
                      <option value="">1</option>
                      <option value="">2</option>
                    </select>
                    {errors.modalidade != null &&
                      errors.modalidade.type === "required" && (
                        <span>Este campo é obrigatório</span>
                      )}
                  </div>
                </div>
              </div>

              <TitleBox title="Produtos" />
              <p>Selecione as opções abaixo:</p>
              <div className="full">
                <div className="row">
                  <div className="half">
                    <label htmlFor="Tamanho da camiseta">
                      Tamanho da camiseta
                    </label>
                    <select name="TamanhoDaCamiseta" id="TamanhoDaCamiseta">
                      <option value="">1</option>
                      <option value="">2</option>
                    </select>
                    {errors.tamanho != null &&
                      errors.tamanho.type === "required" && (
                        <span>Este campo é obrigatório</span>
                      )}
                  </div>
                  <div className="half">
                    <label htmlFor="Tamanho do boné">Tamanho do boné</label>
                    <select name="TamanhoDoBone" id="TamanhoDoBone">
                      <option value="">1</option>
                      <option value="">2</option>
                    </select>
                    {errors.modalidade != null &&
                      errors.modalidade.type === "required" && (
                        <span>Este campo é obrigatório</span>
                      )}
                  </div>
                </div>
                <div className="row">
                  <div className="half">
                    <label htmlFor="Local de entrega">Local de entrega</label>
                    <select name="LocalDeEntrega" id="LocalDeEntrega">
                      <option value="">1</option>
                      <option value="">2</option>
                    </select>
                    {errors.tamanho != null &&
                      errors.tamanho.type === "required" && (
                        <span>Este campo é obrigatório</span>
                      )}
                  </div>
                  <div className="half"></div>
                </div>
              </div>
            </div>

            <div className="full">
              <TitleBox title="Questionário" />
              <p>Selecione as opções abaixo:</p>
              <div className="row">
                <div className="half">
                  <label htmlFor="Tamanho da camiseta">
                    Tamanho da camiseta
                  </label>
                  <select name="TamanhoDaCamiseta" id="TamanhoDaCamiseta">
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                  {errors.tamanho != null &&
                    errors.tamanho.type === "required" && (
                      <span>Este campo é obrigatório</span>
                    )}
                </div>
                <div className="half">
                  <label htmlFor="Tamanho do boné">Tamanho do boné</label>
                  <select name="TamanhoDoBone" id="TamanhoDoBone">
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                  {errors.modalidade != null &&
                    errors.modalidade.type === "required" && (
                      <span>Este campo é obrigatório</span>
                    )}
                </div>
              </div>
              <div className="row">
                <div className="half">
                  <label htmlFor="Local de entrega">Local de entrega</label>
                  <select name="LocalDeEntrega" id="LocalDeEntrega">
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                  {errors.tamanho != null &&
                    errors.tamanho.type === "required" && (
                      <span>Este campo é obrigatório</span>
                    )}
                </div>
                <div className="half"></div>
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
