import { FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";
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
InputBox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};
export default InputBox;
