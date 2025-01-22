import { CustomModal, ModalHeader } from "../../../components/Modal";
import { Button } from "@mui/material";

interface CreateTrackingItemModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateTrackingItemModal = ({
  open,
  onClose,
}: CreateTrackingItemModalProps) => {
  return (
    <CustomModal open={open}>
      <ModalHeader title={"Create new tracking item"}>
        <Button onClick={onClose}>Save</Button>
      </ModalHeader>
    </CustomModal>
  );
};

export default CreateTrackingItemModal;
