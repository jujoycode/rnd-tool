import { Modal, Avatar, Container, Text, Button, Input } from "rsuite";

import { userData } from "../../data/auth";
import { UesrData } from "../../interface/auth.interface";

import "./UserInfo.css";

function UserInfo(props: {
  open: boolean;
  handleClose: () => void;
  userInfo: UesrData;
}) {
  return (
    <>
      <Modal
        keyboard={true}
        open={props.open}
        onClose={props.handleClose}
        id="modal"
      >
        <Modal.Header id="modalHeader">
          <Modal.Title>User Setting</Modal.Title>
        </Modal.Header>

        <Modal.Body id="modalBody">
          <Container id="iconContainer">
            <Avatar circle size={"xxl"} />
            <Button appearance="link" color="green">
              Change
            </Button>
          </Container>

          <Container id="infoContainer">
            <Text className="text">Name</Text>
            <Input value={userData.name} disabled />

            <Text className="text">Email</Text>
            <Input value={userData.email ? userData.email : "-"} disabled />

            <Text className="text">Password</Text>
            <Button appearance="ghost" color="green">
              Change password
            </Button>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button appearance={"link"} color="red">
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserInfo;
