import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";

const ModalComponent = ({
  onClose,
  btnRef,
  isOpen,
  scrollBehavior,
  item,
}: any) => {
  return (
    <Modal
      onClose={onClose}
      finalFocusRef={btnRef}
      isOpen={isOpen}
      scrollBehavior={scrollBehavior}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{item?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{item?.description}</Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>닫기</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
