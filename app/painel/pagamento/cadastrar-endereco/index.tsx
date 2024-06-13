"use client";
import { Button, H3Title, Input } from "design-system-ticket-sports";
import Image from "next/image";
import "./styles.scss";
import { useForm } from "react-hook-form";

export const ModalEndereco = ({ setOpenModalEndereco }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  return (
    <>
      <div className="modal-endereco">
        <div className="modal-endereco__title">
          <div className="modal-endereco__title-wrapper">
            <H3Title text="Cadastre seu endereço" />
            <p>
              Para pagamentos PIX e Boleto, é necessário cadastrar seu endereço.
              Depois de cadastrado, você poderá editar no painel do usuário.
            </p>
          </div>
          <Image
            src={"/close.png"}
            alt={"Icone de confirmação"}
            width={40}
            height={40}
            onClick={() => {
              setOpenModalEndereco(false);
            }}
          />
        </div>
        <form
          className="modal-endereco__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="modal-endereco__form--block">
            <div className="modal-endereco__form--block-interno">
              <div>
                <Input
                  title={"CEP"}
                  name={"cep"}
                  inputType={"text"}
                  register={register}
                />
              </div>
              <div>
                <Input
                  title={"Estado"}
                  name={"estado"}
                  inputType={"text"}
                  register={register}
                />
              </div>
              <div>
                <Input
                  title={"Rua"}
                  name={"rua"}
                  inputType={"text"}
                  register={register}
                />
              </div>
              <div>
                <Input
                  title={"Bairro"}
                  name={"bairro"}
                  inputType={"text"}
                  register={register}
                />
              </div>
            </div>
            <div className="modal-endereco__form--block-interno">
              <div>
                <Input
                  title={"Cidade"}
                  name={"cidade"}
                  inputType={"text"}
                  register={register}
                />
              </div>
              <div>
                <Input
                  title={"Numero"}
                  name={"numero"}
                  inputType={"text"}
                  register={register}
                />
              </div>
              <div>
                <Input
                  title={"Complemento"}
                  name={"complemento"}
                  inputType={"text"}
                  register={register}
                />
              </div>
            </div>
          </div>
          <div className="modal-endereco__btn">
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </>
  );
};
