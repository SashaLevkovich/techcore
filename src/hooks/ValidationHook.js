import { useEffect, useState } from 'react';

export const useValidation = (value, validations) => {
	const [isEmpty, setEmpty ] = useState(true);
	const [isLoc, setLoc] = useState(false);

	useEffect(()=>{
		for ( const validation in validations ) {
			switch ( validation ) {
				case 'isEmpty':
					value ? setEmpty(false) : setEmpty(true )
					break;

				case 'isLoc':
					const regEmail = /^[a-zA-Z-]/;
					regEmail.test(value.toLowerCase()) ? setLoc(false) : setLoc(true);
					break;

				default:
					return validations
			}
		}
	}, [validations, value]);


	return {
		isEmpty,
		isLoc
	}
}

export const useInput = (initialValue, validations) => {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setDirty] = useState(false);
	
	const valid = useValidation(value, validations)
	
	const onChange = (e) => {
		setValue(e.target.value);
	};
	
	const onBlur = (e) => {
		setDirty(true);
	};
	
	return {
		value,
		onBlur,
		onChange,
		isDirty,
		...valid
	}
}