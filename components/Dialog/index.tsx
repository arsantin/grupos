import { DialogStyle } from "./styles";

interface IDialog {
  children?: any;
  open?: any;
}

export const Dialog = ({ children, open }: IDialog) => {
  return (
    <div
      style={{
        backgroundImage: `url("/modal-background.png")`,
        backgroundAttachment: "fixed",
        position: "fixed",
        width: "100vw",
        zIndex: "1000",
        top: "0px",
        left: "0px",
        overflow: "auto",
      }}
    >
      <DialogStyle>
        <dialog open={open}>
          <div className="dialog-content">{children}</div>
        </dialog>
      </DialogStyle>
    </div>
  );
};
