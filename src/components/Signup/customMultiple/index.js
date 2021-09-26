import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { Field } from 'react-final-form';
import useStyles from './style';

const CustomMultiple = ({name}) => {
    const inputRef = React.useRef();

    const [focus, setFocus] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [touched, setTouched] = React.useState(false);
    const [submitError, setSubmitError] = React.useState(false);

    const styles = useStyles({focus, error, touched, submitError});
    const [val, setVal] = React.useState('');
    return (
        <Field name={name}>
            {
                ({input, meta}) => {
                    setError(meta.error);
                    setSubmitError(meta.touched);
                    return <>
                    <Typography variant='span' component='p' className={styles.title}>
                        Enter your skills*
                    </Typography>
                    <Box name={input.name} className={styles.container} onClick={(e)=>{
                        e.stopPropagation();
                        inputRef.current.focus();
                    }}>
                        <ul className={styles.listContainer}>
                            {
                                input?.value?.map((elem, index) => (
                                    <li key={elem.id} className={styles.listElement} onClick={e=>e.stopPropagation()}>
                                        <p className={styles.elementText}>{elem.title}</p>
                                        <span className={styles.elementDelete} onClick={()=>{
                                            input.onChange(input.value.filter(item=>item.id!==elem.id))
                                        }}>x</span>
                                    </li>
                                ))
                            }
                            <li style={{minWidth: 120}}>
                                <input 
                                    className={styles.input}
                                    type="text" 
                                    ref={inputRef}
                                    placeholder="Enter your skill"
                                    value={val} 
                                    onFocus={()=>(setFocus(true))}
                                    onBlur={()=>(setFocus(false), setTouched(true))}
                                    onChange={(e)=>setVal(e.target.value)} 
                                    onKeyPress={e=>{
                                        if(e.key === "Enter"){
                                            e.preventDefault();
                                            if(val===''){
                                                return
                                            } else {
                                                input.onChange([...input.value, {title:val, id:new Date().getTime()}]);
                                                setVal('')
                                            }
                                        }
                                    }}
                            />
                            </li>
                        </ul>
                    </Box>
                    {meta.error && (touched || submitError) && <p className={styles.error}>{meta.error}</p>}
                    </>
                }
            }
        </Field>
    )
}

export default CustomMultiple;
