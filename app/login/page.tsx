"use client";

import { useEffect, useState } from "react";
import { StyledLogin } from "./style";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

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

  useEffect(() => {
    setTimeout(() => {
      router.push("/painel/solicitacao-de-vagas");
    }, 2500);
  }, [router]);
  return (
    <>
      <StyledLogin>
        {view === "login" && (
          <div className="View-login">
            <h2>Faça o login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="email">
                <label htmlFor="">E-mail ou CPF</label>
                <input
                  {...register("Email ou CPF")}
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
              <input
                type="submit"
                value="Continuar"
                className="btn-continuar"
              />
            </form>
            <div className="esqueci-senha">Esqueci minha senha</div>
            <div className="criar-conta">
              <p>Ainda não possui conta? </p>
              <input type="button" value="Criar conta" onClick={toggleView} />
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
              <input
                type="submit"
                id="cal"
                value="Continuar"
                className="btn-continuar"
              />
            </form>
            <div className="criar-conta">
              <input type="button" value="Fazer login" onClick={toggleView} />
            </div>
          </div>
        )}
      </StyledLogin>
    </>
  );
}
