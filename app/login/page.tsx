"use client";

import { StyledLogin } from "./style";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button, H3Title, Input } from "design-system-ticket-sports";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  const [view, setView] = useState("login");

  const toggleView = () => {
    setView(view === "login" ? "cadastro" : "login");
  };

  return (
    <>
      <StyledLogin>
        {view === "login" && (
          <div className="View-login">
            <div className="login-title">
              <H3Title text="Faça o login" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                title="E-mail ou CPF"
                {...register("Email ou CPF")}
                inputType="text"
                placeholderText="Digite aqui"
              />
              <Input
                title="Senha"
                {...register("Senha")}
                inputType="text"
                placeholderText="Digite aqui"
              />
              <Button isDisabled title="Continuar" size="medium" />
            </form>
            <div className="esqueci-senha">Esqueci minha senha</div>
            <div className="criar-conta">
              <p>Ainda não possui conta? </p>
              <Button
                variation="dark"
                title="Criar conta"
                btnfunction={toggleView}
                size="medium"
              />
            </div>
          </div>
        )}
        {view === "cadastro" && (
          <div className="View-cadastro">
            <div className="title">
              <h2>Novo cadastro</h2>
              <p>Este cadastro é apenas para acessar a plataforma</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="name">
                <label htmlFor="">Nome completo</label>
                <input
                  {...register("Nome Completo")}
                  type="text"
                  placeholder="Digite aqui"
                />
              </div>
              <div className="document">
                <label htmlFor="">Documento</label>
                <div className="select-document">
                  <select>
                    <option value="">CPF</option>
                    <option value="">RG</option>
                  </select>
                  <input
                    {...register("Documento:")}
                    type="text"
                    placeholder="Digite aqui"
                  />
                </div>
              </div>
              <div className="email">
                <label htmlFor="">E-mail</label>
                <input
                  {...register("E-mail")}
                  type="text"
                  placeholder="Digite aqui"
                />
              </div>
              <div className="senha">
                <label htmlFor="">Senha</label>
                <input
                  {...register("Senha")}
                  type="text"
                  placeholder="Digite aqui"
                />
              </div>
              <div className="confirmar-senha">
                <label htmlFor="">Confirmar senha</label>
                <input
                  {...register("Confirmar Senha")}
                  type="text"
                  placeholder="Digite aqui"
                />
              </div>
              <div className="termos">
                <input {...register("Termos")} type="checkbox" />
                <label htmlFor="">Aceito os termos do cadastro</label>
              </div>
              <div className="termos">
                <input {...register("Comunicados")} type="checkbox" />
                <label htmlFor="">
                  Aceito receber comunicados e notificações
                </label>
              </div>
              <Button variation="dark" title="Continuar" size="medium" />
            </form>
            <div className="criar-conta">
              <Button
                title="Fazer login"
                btnfunction={toggleView}
                size="medium"
                variation="dark"
              />
            </div>
          </div>
        )}
      </StyledLogin>
    </>
  );
}
