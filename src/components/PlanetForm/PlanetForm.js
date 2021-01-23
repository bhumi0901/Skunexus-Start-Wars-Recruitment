import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  //   ModalFooter,
} from "reactstrap";
import {
  // useHistory,
  withRouter,
} from "react-router";
import Select from "react-select";
import "./PlanetForm.css";
import InputBox from "../reusable/InputBox";
// import Modal from "../reusable/Modal";
function PlanetForm(props) {
  // const history = useHistory();
  const [name, setName] = useState("");
  const [rotation_period, setRotation_period] = useState(null);
  const [orbital_period, setOrbital_period] = useState(null);
  const [diameter, setDiameter] = useState(null);
  const [climate, setClimate] = useState("");
  const [gravity, setGravity] = useState("");
  const [residents, setResidents] = useState(null);
  const [films, setFilms] = useState(null);
  const [surface_water, setSurface_water] = useState(null);
  const [selectedOption, setSelectedOption] = useState();
  const [modal, setModal] = useState(true);
  //   const [payloadArray, setPayloadArray] = useState({});

  const toggle = () => {
    setModal(false);

    props.handleModal();

    // history.push({
    //   pathname: "/",
    // });
  };

  const options = [
    { value: "desert", label: "desert" },
    { value: "grasslands", label: "grasslands" },
    { value: "mountains", label: "mountains" },
    { value: "jungle", label: "jungle" },
    { value: "rainforests", label: "rainforests" },
    { value: "tundra", label: "tundra" },
    { value: "ice caves", label: "ice caves" },
    { value: "mountain ranges", label: "mountain ranges" },
    { value: "swamp", label: "swamp" },
    { value: "gas giant", label: "gas giant" },
    { value: "forests", label: "forests" },
    { value: "lakes", label: "lakes" },
    { value: "grassy hills", label: "grassy hills" },
  ];
  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "name") {
      setName(value);
    }
    if (name === "rotation_period") {
      setRotation_period(value);
    }
    if (name === "orbital_period") {
      setOrbital_period(value);
    }
    if (name === "diameter") {
      setDiameter(value);
    }
    if (name === "climate") {
      setClimate(value);
    }
    if (name === "gravity") {
      setGravity(value);
    }
    if (name === "residents") {
      setResidents(value);
    }
    if (name === "films") {
      setFilms(value);
    }
    if (name === "surface_water") {
      setSurface_water(value);
    }
  };
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const onSubmit = () => {
    if (
      name !== "" &&
      rotation_period !== null &&
      orbital_period !== null &&
      diameter !== null &&
      climate !== "" &&
      gravity !== "" &&
      residents !== null &&
      films !== null &&
      surface_water !== null &&
      selectedOption !== "" &&
      selectedOption !== undefined
    ) {
      let terrainArray = [];
      selectedOption.map((obj, key) => {
        terrainArray.push(obj.value);
        return null;
      });
      let obj = {
        name: name,
        rotation_period: rotation_period,
        orbital_period: orbital_period,
        diameter: diameter,
        climate: climate,
        gravity: gravity,
        residents: residents,
        films: films,
        surface_water: surface_water,
        terrain: terrainArray.toString(),
      };
      toggle();

      setTimeout(() => {
        props.changeArray(obj);
      }, 1000);
      //   setPayloadArray(obj);

      //   history.push({
      //     pathname: "/",
      //     state: {
      //       response: obj,
      //     },
      //   });
    }
  };
  return (
    <div className="container" id="planetForm">
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <div className="title">Planet Form</div>
        </ModalHeader>
        <ModalBody>
          <Form>
            <div className="row">
              <div className="col-6">
                <InputBox
                  type="text"
                  lable="Name*"
                  id="name"
                  name="name"
                  placeholder="name"
                  onChange={onChange}
                  value={name}
                />
                <InputBox
                  type="number"
                  lable="Rotation Period*"
                  id="rotation_period"
                  name="rotation_period"
                  value={rotation_period}
                  onChange={onChange}
                  placeholder="Rotation Period"
                />
                <InputBox
                  type="number"
                  lable="Orbital Period*"
                  id="orbital_period"
                  name="orbital_period"
                  value={orbital_period}
                  onChange={onChange}
                  placeholder="Orbital Period"
                />
                <InputBox
                  type="number"
                  lable="Diameter*"
                  id="diameter"
                  name="diameter"
                  value={diameter}
                  onChange={onChange}
                  placeholder="Diameter"
                />
                <InputBox
                  type="text"
                  lable="Climate*"
                  id="climate"
                  name="climate"
                  value={climate}
                  onChange={onChange}
                  placeholder="Climate"
                />
              </div>
              <div className="col-6">
                <InputBox
                  type="text"
                  lable="Gravity*"
                  id="gravity"
                  name="gravity"
                  value={gravity}
                  onChange={onChange}
                  placeholder="Gravity"
                />
                <InputBox
                  type="number"
                  lable="Residents*"
                  id="residents"
                  name="residents"
                  value={residents}
                  onChange={onChange}
                  placeholder="Residents"
                />
                <InputBox
                  type="number"
                  lable="Films*"
                  id="films"
                  name="films"
                  value={films}
                  onChange={onChange}
                  placeholder="Films"
                />
                <FormGroup>
                  <Label for="selected">Terrain* </Label>
                  <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    isMulti={true}
                  />
                </FormGroup>
                <InputBox
                  type="text"
                  lable="Surface Water*"
                  id="surface_water"
                  name="surface_water"
                  value={surface_water}
                  onChange={onChange}
                  placeholder="Surface Water"
                />
              </div>
            </div>
            <div className="row">
              <div className="col submit-button">
                <Button onClick={onSubmit}>Submit</Button>
              </div>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default withRouter(PlanetForm);
