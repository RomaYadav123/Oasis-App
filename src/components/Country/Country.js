import React, { useState, useMemo } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Select from "react-select";
import countryList from "react-select-country-list";
import "./Country.css";
const Country = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div>
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label className="label-style label-mob">Country of Residence*</Form.Label>

        <Select
          options={options}
          value={value}
          onChange={changeHandler}
          className="phone-style phone-mob"
        />
      </Form.Group>
    </div>
  );
};

export default Country;
