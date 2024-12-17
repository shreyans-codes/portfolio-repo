import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import PropTypes from "prop-types";

const CommonDeleteModal = ({ isOpen, onOpenChange, handleDelete, name }) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      backdrop="blur"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Warning: Deleting {name}
            </ModalHeader>
            <ModalBody className="common-prose">
              <strong>
                You are about to delete the {String(name).toLowerCase()}
              </strong>
              <p className="my-1">
                Are you sure?
                <em className="text-red-700 dark:text-red-500">
                  {" "}
                  This is action is irreversible.
                </em>
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" variant="light" onPress={onClose}>
                No, keep {String(name).toLowerCase()}
              </Button>
              <Button color="danger" onPress={handleDelete}>
                Yes, delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

CommonDeleteModal.propTypes = {
  isOpen: PropTypes.bool,
  onOpenChange: PropTypes.func,
  handleDelete: PropTypes.func,
  name: PropTypes.string,
};

export default CommonDeleteModal;
