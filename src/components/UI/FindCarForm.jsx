import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Qual modelo" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Tipo" required />
          
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="ac">Aviões</option>
            <option value="non-ac">Helicopteros</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Buscar</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
