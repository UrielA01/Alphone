import React, { useState } from 'react';
import Modal from 'react-modal';

function EditWindow() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>
                Edit
            </button>
            <Modal
                isOpen={isOpen}
                contentLabel="Example Modal"
                onRequestClose={() => setIsOpen(false)}
            >
                This is the content of the modal.
            </Modal>
        </div>
    );
}

export default EditWindow;