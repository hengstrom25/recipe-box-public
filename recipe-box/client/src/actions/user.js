export function updateSignUpInput(name, value) {
	return {
		type: "UPDATE_FORM", payload: {name, value}
	}
}

export function loadSignUpForm(values) {
    console.log("load form",values)
    return {
        type: "LOAD_FORM",
        values: values
    }
}

export const resetSignUpForm = () => {
	return {
		type: "RESET_FORM"
	}
}

export const addUserDb = (user, history) => {
	return dispatch => {
		return fetch(`http://localhost:3001/categories/${catid}/recipes`, {
			method: 'POST',
			headers: {
			"Content-type": 'application/json'
			},
			body: JSON.stringify({ user: user }) 
		})
			.then(response => response.json())
			.then(user => {
				dispatch(addUser(user))
				history.push(`/users/${user.id}`)	
			})
			.catch(error => console.log(error))
	}
}