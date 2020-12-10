import React from "react";

import Header from "components/Appointment/Header"
import Show from "components/Appointment/Show"
import Empty from "components/Appointment/Empty"
import useVisualMode from "hooks/useVisualMode";

import 'components/Appointment/styles.scss';
import Form from "./Form";
import { action } from "@storybook/addon-actions/dist/preview";


export default function Appointment (props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE"
  const { mode, transition, back } = useVisualMode(props.interview? SHOW : EMPTY);  

  return (
    <article className="appointment">
      <Header time={props.time} />
  
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )} 
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={back} onSave={() => console.log('SAVED')} />
      )}     
    </article>
    )

}