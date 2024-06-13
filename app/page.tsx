/* eslint-disable @next/next/no-async-client-component */
"use client";
import "./styles.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Button,
  H2Title,
  H3Title,
  H4Title,
  H5Title,
} from "design-system-ticket-sports";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [faqData, setFaqData] = useState<any>("");
  const [faqQuestionsData, setFaqQuestionsData] = useState<any>(null);
  const router = useRouter();

  const getFaqData = async () => {
    try {
      await axios.get("/api/faq").then(async (res) => {
        const dados = res.data?.data;
        setFaqData(dados);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const getFaqQuestionsData = async () => {
    try {
      await axios.get("/api/faq/questions").then(async (res) => {
        const dados = res.data?.data;
        setFaqQuestionsData(dados);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getFaqData();
    getFaqQuestionsData();
  }, []);

  return (
    <div className="faq-container">
      {faqData && faqQuestionsData ? (
        <>
          <H2Title text="Grupos e Acessorias" />
          <div
            className="faq-container__html-description"
            dangerouslySetInnerHTML={{ __html: faqData?.description }}
          />
          <p className="faq-container__text">
            Quando seu grupo/assessoria/equipe possuir mais de 1 participante(s)
            e estiver dentro das normas do regulamento oficial do evento.
          </p>
          <div className="faq-container__button">
            <Button
              title="Faça seu login"
              size="medium"
              btnfunction={() => {
                router?.push("/login");
              }}
              variation="dark"
            />
          </div>
          <div className="faq-container__button">
            <Button
              title="Cadastre-se"
              btnfunction={() => {
                router.push("/cadastro");
              }}
              size="medium"
              variation="ghost"
            />
          </div>
          <H3Title text="Perguntas Frequentes" />
          {faqQuestionsData?.map((question: any) => {
            return (
              <>
                <details name="question-1" className="faq-container__details">
                  <summary className="faq-container__details--summary">
                    <H5Title text={question?.title} />
                    <Image
                      src="arrow-down.svg"
                      alt="arrow down"
                      width={12}
                      height={12}
                    />
                  </summary>
                  <p className="faq-container__details--answers">
                    {question?.description}
                  </p>
                </details>
              </>
            );
          })}
        </>
      ) : (
        <div style={{ textAlign: "center", width: "100%" }}>
          <H4Title text="carregando..." />
        </div>
      )}
    </div>
  );
}
