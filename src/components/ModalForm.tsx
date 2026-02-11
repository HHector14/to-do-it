import { Modal } from "@mui/material";
import type { Form as FormType } from "../types/components";
import Form from "./Form"

type ModalProps = {
  onClose: () => void;
  tasks: FormType['tasks'];
  setTaks: FormType['setTasks'];
};

export default function ModalForm({ onClose, tasks, setTaks }: ModalProps) {
  return (
    <Modal open={true} onClose={onClose} style={{  textAlign: 'center' }}>
      <Form tasks={tasks} setTasks={setTaks} />
    </Modal>
  )
}


{/* <Modal open={true} onClose={onClose} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
  <Form tasks={tasks} setTasks={setTaks} />
</Modal> */}