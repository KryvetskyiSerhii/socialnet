import classes from './FormControls.module.css'

const FormControl = ({input, meta,  ...props}) => {
    const isError = meta.touched && meta.error
    return (
        <div className={classes.formControl }>
            {props.children}
            {isError && <div>
                <span className={classes.error_text}>{meta.error}</span>
            </div> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    const isError = meta.touched && meta.error
    
    return <FormControl {...props}><textarea {...input} {...restProps} className={isError ? classes.error : ''}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    const isError = meta.touched && meta.error
    
    return <FormControl {...props}><input {...input} {...restProps} className={isError ? classes.error : ''}/></FormControl>
}


