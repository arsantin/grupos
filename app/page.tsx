"use client";

import { Button } from "@/components/Button";
import { StyleMain } from "./styles";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <StyleMain>
      <h2>Grupos e Acessorias</h2>
      <p>
        Quando seu grupo/assessoria/equipe possuir mais de 1 participante(s) e
        estiver dentro das normas do regulamento oficial do evento.
      </p>
      <div className="button">
        <Button
          title="Faça seu login"
          backgroundColor={"#000"}
          textColor={"#fff"}
          hoverColor={"#000"}
          borderProps={"solid 1px #000"}
          btnFunction={() => {
            router?.push("/login");
          }}
          paddingProps={"15px"}
        />
      </div>

      <Button
        title="Faça seu login"
        backgroundColor={"none"}
        textColor={"#000"}
        borderProps={"solid 1px #000"}
        hoverColor={"none"}
        btnFunction={() => {}}
        paddingProps={"15px"}
      />
    </StyleMain>
  );
}
