"use client";

import Link from "next/link";
import "./styles.scss";
import Image from "next/image";
import { Button, H2Title, H3Title, H4Title } from "design-system-ticket-sports";

interface ModalStandardProps {
  setOpenModalRequest: (open: boolean) => void;
  imageSrc: string;
  title: string;
  textInfo: string;
  h4Text?: string;
  linkAtleta?: string;
  titleButtonBlack?: string;
  titleButtonBlue?: string;
  titleButtonBorderBlue?: string;
  titleButtonSmallBlack?: string;
  titleButtonSmallGray?: string;
}

export const ModalStandard = ({
  setOpenModalRequest,
  imageSrc,
  title,
  textInfo,
  h4Text,
  linkAtleta,
  titleButtonBlack,
  titleButtonBlue,
  titleButtonBorderBlue,
  titleButtonSmallBlack,
  titleButtonSmallGray,
}: ModalStandardProps): JSX.Element => {
  return (
    <div className="modal-standard">
      <Image src={imageSrc} alt={"Icone"} width={40} height={40} />
      <div className="modal-standard__title">
        <H3Title text={title} />
        <p>{textInfo}</p>
      </div>
      {linkAtleta && (
        <div className="modal-standard__wrapper-copy">
          {linkAtleta && (
            <>
              <p className="modal-standard__wrapper-copy--text">{linkAtleta}</p>
              <p className="modal-standard__wrapper-copy--text">
                Copiar Codigo
              </p>
            </>
          )}
        </div>
      )}
      <H4Title text={h4Text} />
      {(titleButtonBlue || titleButtonBorderBlue || titleButtonBlack) && (
        <div className="modal-standard__button">
          {titleButtonBlue && (
            <Button
              title={titleButtonBlue}
              variation="primary"
              size="large"
              btnfunction={() => {
                setOpenModalRequest(false);
              }}
            />
          )}
          {titleButtonBorderBlue && (
            <div className="modal-standard__button--border">
              <Button
                title={titleButtonBorderBlue}
                variation="ghost"
                size="large"
                btnfunction={() => {
                  setOpenModalRequest(false);
                }}
              />
            </div>
          )}
          {titleButtonBlack && (
            <Button
              title={titleButtonBlack}
              variation="dark"
              size="large"
              btnfunction={() => {
                setOpenModalRequest(false);
              }}
            />
          )}
        </div>
      )}

      {(titleButtonSmallBlack || titleButtonSmallGray) && (
        <div className="modal-standard__button-small">
          {titleButtonSmallBlack && (
            <Button
              title={titleButtonSmallBlack}
              variation="ghost"
              size="small"
              btnfunction={() => {
                setOpenModalRequest(false);
              }}
            />
          )}
          {titleButtonSmallGray && (
            <Button
              title={titleButtonSmallGray}
              variation="dark"
              size="small"
              btnfunction={() => {
                setOpenModalRequest(false);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};
