import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Context } from "../store/appContext";

export const ContactCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const { store, actions } = useContext(Context);
	function handleDelete(id) {
		actions.deleteContact(id);
	}
	return store.contacts.length === 0 ? (
		<h3>No hay ningun contacto</h3>
	) : (
		store.contacts.map((contact, key) => (
			<li key={key} className="list-group-item">
				<div className="row w-100">
					<div className="col-12 col-sm-6 col-md-3 px-0">
						<img
							src={MikePhoto}
							alt="Mike Anamendolla"
							className="rounded-circle mx-auto d-block img-fluid"
						/>
					</div>
					<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
						<div className=" float-right">
							<button onClick={() => window.location.assign(`/edit?id=${contact.id}`)} className="btn">
								<i className="fas fa-pencil-alt mr-3" />
							</button>
							<button className="btn" onClick={() => handleDelete(contact.id)}>
								<i className="fas fa-trash-alt" />
							</button>
						</div>
						<label className="name lead">{contact.full_name}</label>
						<br />
						<i className="fas fa-map-marker-alt text-muted mr-3" />
						<span className="text-muted">{contact.address}</span>
						<br />
						<span
							className="fa fa-phone fa-fw text-muted mr-3"
							data-toggle="tooltip"
							title=""
							data-original-title="(870) 288-4149"
						/>
						<span className="text-muted small">{contact.phone}</span>
						<br />
						<span
							className="fa fa-envelope fa-fw text-muted mr-3"
							data-toggle="tooltip"
							data-original-title=""
							title=""
						/>
						<span className="text-muted small text-truncate">{contact.email}</span>
					</div>
				</div>
			</li>
		))
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
