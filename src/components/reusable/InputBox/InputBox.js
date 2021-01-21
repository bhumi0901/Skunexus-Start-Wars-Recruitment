import { FormGroup, Label, Input } from "reactstrap";

function InputBox(props) {
  return (
    <div className="inputBox">
      <FormGroup>
        <Label for={props.id}>{props.lable}</Label>
        <Input
          type={props.type}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
      </FormGroup>
    </div>
  );
}

export default InputBox;
