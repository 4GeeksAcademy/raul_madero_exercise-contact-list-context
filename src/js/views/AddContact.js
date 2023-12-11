import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext.js";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [full_name, setFull_name] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [contactId, setContactId] = useState("");
	function guardar(e, id = null) {
		e.preventDefault();
		actions.createContact(contactId, full_name, email, address, phone);
	}
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onSubmit={guardar}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							value={full_name}
							onChange={e => setFull_name(e.target.value)}
							type="text"
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							value={email}
							onChange={e => setEmail(e.target.value)}
							type="email"
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							value={phone}
							onChange={e => setPhone(e.target.value)}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							value={address}
							onChange={e => setAddress(e.target.value)}
							type="text"
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
