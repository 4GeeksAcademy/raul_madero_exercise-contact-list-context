const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			createContact: (id = null, nombre, email, address, phone) => {
				let datos = {
					id: id,
					full_name: nombre,
					email: email,
					agenda_slug: "raul",
					address: address,
					phone: phone
				};
				console.log(datos);
				fetch(
					id
						? `https://playground.4geeks.com/apis/fake/contact/${id}`
						: "https://playground.4geeks.com/apis/fake/contact/",
					{
						method: id ? "PUT" : "POST",
						body: JSON.stringify(datos),
						headers: {
							"Content-Type": "application/json"
						}
					}
				)
					.then(res => res.json())
					.then(json => console.log(json))
					.catch(err => console.log(err));
			},
			getData: data => {
				const store = getStore();
				setStore({ contacts: data });
			},
			deleteContact: async id => {
				try {
					const res = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method: "DELETE"
					});
					const json = await res.json();
					console.log(json);
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
