import { useDialogContext } from "../contexts/DialogContext";

const DialogComponent: React.FC<{}> = () => {
  const { dialog, setDialog } = useDialogContext();

  async function handlePositive() {
    dialog?.positive.action?.()
    setDialog(null)
  }

  async function handleNegative() {
    dialog?.negative?.action?.()
    setDialog(null)
  }

  function onOverlayClick() {
    dialog?.cancelable ?? setDialog(null)
  }

  function handleClick(e: any) {
    console.log(e)
  }

  return (
    dialog && (
      <div className="dialog-container">
        <div className="overlay" onClick={onOverlayClick}></div>
        <div autoFocus className="mdialog" onKeyDown={handleClick}>
          <h2 className="mb-4">{dialog.header}</h2>
          <p className="mb-4">{dialog.body}</p>
          <button
            className="btn btn-primary m-1 float-end"
            onClick={handlePositive}
            autoFocus
          >
            {dialog.positive.text}
          </button>
          {dialog.negative && (
            <button
              className="btn btn-secondary m-1 float-start"
              onClick={handleNegative}
            >
              {dialog.negative.text}
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default DialogComponent;
