import React from 'react'
import { useDialogContext } from '../contexts/DialogContext';
import { useNavigate } from 'react-router-dom';

const Other: React.FC<{}> = () => {
    const { setDialog } = useDialogContext()
    const navigate = useNavigate()

    function showInfo() {
        setDialog({
            header: "Show dismissible Info",
            body: `To show a dismissible info box,
            that has only a positive button that probably doesn't do anything but dismiss the dialog`,
            positive: {text: 'Ok'}
        })
    }

    function showWarning() {
        setDialog({
            header: "Show Indismissible Info",
            body: `To show Indismissible information,
            e.g. Complete setting up your profile to be able to use all our features`,
            positive: { text: "Go to setup page", action: navigateToSetup },
            cancelable: false
        });
    }

    function navigateToSetup() {
        navigate("/setup/")
    }

    return (
        <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem'}}>
        <button className='btn btn-info' onClick={showInfo}>Show Info</button>
        <button className='btn btn-warning' onClick={showWarning}>Show a warning</button>
        </section>
    );
}

export default Other