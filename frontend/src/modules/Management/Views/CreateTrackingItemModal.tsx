import { CustomModal, ModalHeader } from "../../../components/Modal";
import { Button } from "@mui/material";

interface CreateTrackingItemModalProps {
  open: boolean;
}

const CreateTrackingItemModal = ({ open }: CreateTrackingItemModalProps) => {
  return (
    <CustomModal open={open}>
      <ModalHeader title={"Create new tracking item"}>
        <Button>Save</Button>
      </ModalHeader>
    </CustomModal>
  );
};

export default CreateTrackingItemModal;
