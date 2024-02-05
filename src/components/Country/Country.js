import React, { useState, useMemo } from "react";
import { Col, Form } from "react-bootstrap";
import Select from "react-select";
import countryList from "react-select-country-list";
import "./Country.css";

const Country = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div>
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label className="label-style label-mob">
          Country of Residence*
        </Form.Label>

        <Select
          options={options}
          value={selectedCountry}
          onChange={changeHandler}
          className="phone-style phone-mob"
        />
      </Form.Group>
    </div>
  );
};

export default Country;
