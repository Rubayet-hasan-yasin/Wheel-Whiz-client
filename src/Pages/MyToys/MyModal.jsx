
const MyModal = ({ children }) => {
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal bg-opacity-80">
                {children}
            </div>
        </>
    );
};

export default MyModal;