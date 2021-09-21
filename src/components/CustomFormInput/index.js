import { TextField } from "@material-ui/core";
import { Field } from "react-final-form";

const MIU_RFF_input = (props) => {
    const { name, ...rest } = props;
    return (
      <Field name={name} >
          {({input, meta})=>(
            <TextField 
                name={input.name} 
                value={input.value} 
                onChange={input.onChange} 
                {...rest}
            />
          )}
        </Field>
    )
  }

  export default MIU_RFF_input;