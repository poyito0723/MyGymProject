import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import UserForm from "./users/UserForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '70%',
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  
  
};

export default function ModalComponent(props) {
  return (
    <div>
      <Modal
        open={props.show}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography  id="modal-modal-title" variant="h6" component="h2">
            AGREGAR UN USUARIO
          </Typography>
        <UserForm></UserForm>

        </Box>

      </Modal>
    </div>
  );
}
