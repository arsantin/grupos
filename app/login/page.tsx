/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import "./styles.scss";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button, H3Title, Input } from "design-system-ticket-sports";
import { useEffect, useState } from "react";
import { UseAuth } from "@/context/login";

export default function Login() {
  const router = useRouter();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loginInfo = watch("usuario", "");
  const passwordInfo = watch("senha", "");
  const { LogInUser, userProfile } = UseAuth();

  useEffect(() => {
    if (userProfile?.access_token) {
      router.push("/painel/solicitacao-de-vagas");
    }
  }, [userProfile]);

  return (
    <>
      <div className="login-container">
        <div className="login-container__title">
          <H3Title text="Faça o login" />
        </div>
        <form onSubmit={handleSubmit(LogInUser)}>
          <Input
            register={register}
            name="usuario"
            title="E-mail ou CPF"
            inputType="text"
            placeholderText="Digite"
          />
          <Input
            register={register}
            inputType="text"
            placeholderText="Digite"
            name="senha"
            title="Senha"
          />
          {errors.senha != null && errors.senha.type === "required" && (
            <span>Campo de senha inválido</span>
          )}
          <div
            className="check"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          ></div>
          <button
            type="submit"
            disabled={!loginInfo || !passwordInfo}
            style={{
              backgroundColor: "#3399ff",
              color: "#fff",
              padding: "15px",
            }}
          >
            Entrar
          </button>
        </form>
        <div className="esqueci-senha">Esqueci minha senha</div>
        <div className="criar-conta">
          <p>Ainda não possui conta? </p>
          <Button
            variation="dark"
            title="Criar conta"
            btnfunction={() => router.push("/cadastro")}
            size="medium"
          />
        </div>
      </div>
    </>
  );
}
