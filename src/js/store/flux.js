const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			createContact: (nombre, email, address, phone) => {
				let datos = {
					full_name: nombre,
					email: email,
					agenda_slug: "raul",
					address: address,
					phone: phone
				};
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(datos),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(json => console.log(json))
					.catch(err => console.log(err));
			}
		}
	};
};

export default getState;
