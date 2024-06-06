/* eslint-disable @next/next/no-async-client-component */
"use client";
import { StyleMain } from "./styles";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, H2Title, H3Title, H4Title } from "design-system-ticket-sports";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [faqData, setFaqData] = useState<TrustedHTML>("");
  const [faqQuestionsData, setFaqQuestionsData] = useState<any>(null);
  const router = useRouter();

  const getFaqData = async () => {
    try {
      const response = await fetch(
        "https://api-core-beta.azurewebsites.net/Inscription/v1.0/Group/1922/FaqTopDescription",
        {
          headers: {
            Accept: "application/json",
            method: "GET",
          },
        },
      );
      if (response) {
        const data = await response.json();
        setFaqData(data?.description);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getFaqQuestionsData = async () => {
    try {
      const response = await fetch(
        "https://api-core-beta.azurewebsites.net/v1.0/Faq/list?faqType=2",
        {
          headers: {
            Accept: "application/json",
            method: "GET",
          },
        },
      );
      if (response) {
        const data = await response.json();
        setFaqQuestionsData(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getFaqData();
    getFaqQuestionsData();
  });

  return (
    <StyleMain>
      <div className="wrapper-main">
        <H2Title text="Grupos e Acessorias" />
        <div
          className="html-description"
          dangerouslySetInnerHTML={{ __html: faqData }}
        />
        <p>
          Quando seu grupo/assessoria/equipe possuir mais de 1 participante(s) e
          estiver dentro das normas do regulamento oficial do evento.
        </p>
        <div className="button">
          <Button
            title="Faça seu login"
            size="medium"
            btnfunction={() => {
              router?.push("/login");
            }}
            variation="dark"
          />
        </div>
        <div className="button">
          <Button
            title="Cadastre-se"
            btnfunction={() => {}}
            size="medium"
            variation="ghost"
          />
        </div>
        <H3Title text="Perguntas Frequentes" />

        <div className="wrapper-questions">
          {faqQuestionsData?.map((question: any) => {
            return (
              <>
                <div className="container-q">
                  <Image
                    src="arrow-down.svg"
                    alt="arrow down"
                    width={12}
                    height={12}
                  />
                  <H4Title text={question?.title} />
                  <div className="answer-description">
                    {question?.description || "nenhuma resposta encontrada"}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </StyleMain>
  );
}
