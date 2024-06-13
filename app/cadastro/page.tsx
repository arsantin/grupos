/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import "./styles.scss";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "design-system-ticket-sports";

export default function Cadastro() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="login-container">
        <div className="View-cadastro">
          <div className="title">
            <h2>Novo cadastro</h2>
            <p>Este cadastro é apenas para acessar a plataforma</p>
          </div>
          <form onSubmit={handleSubmit(() => {})}>
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
            <button type="submit">xxxxxxxxxxxxxxxxxxxx</button>
          </form>
          <div className="criar-conta">
            <Button
              title="Fazer login"
              btnfunction={() => router.push("/login")}
              size="medium"
              variation="dark"
            />
          </div>
        </div>
      </div>
    </>
  );
}
