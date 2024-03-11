export const Input_Type = {
    INPUT_TEXT: 1,
    TEXTAREA: 2,
    INPUT_EMAIL: 3,
    INPUT_PASSWORD: 4,
    INPUT_CHECKBOX: 5,
}

const Input = ({
    type = Input_Type.INPUT_TEXT,
    label,
    name,
    styleclass,
    placeholder,
    onChange,
}) => {
    const handleChange = (event) => {
        onChange(event.target)
    }
    let component
    switch (type) {
        case Input_Type.INPUT_TEXT:
            component = <input type="text" id={name} />
            break
        case Input_Type.TEXTAREA:
            component = <textarea name={name} id={name} />
            break
        case Input_Type.INPUT_EMAIL:
            component = (
                <input
                    type="email"
                    name={name}
                    id={name}
                    autoComplete="username"
                    onChange={handleChange}
                />
            )
            break
        case Input_Type.INPUT_PASSWORD:
            component = (
                <input
                    type="password"
                    name={name}
                    id={name}
                    autoComplete="current-password"
                    onChange={handleChange}
                />
            )
            break
        case Input_Type.INPUT_CHECKBOX:
            component = <input type="checkbox" name={name} id={name} />
            break
        default:
            component = (
                <input type="text" name={name} placeholder={placeholder} />
            )
    }

    if (styleclass === 'input-remember') {
        return (
            <div className={styleclass}>
                {component}
                <label htmlFor={name}>{label}</label>
            </div>
        )
    } else {
        return (
            <div className={styleclass}>
                <label htmlFor={name}>{label}</label>
                {component}
            </div>
        )
    }
}

export default Input
