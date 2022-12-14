import "./footerColored.scss";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleCharteModalOpen } from "../Modal-Charte/modalSlice";

function FooterColored() {
	const location = useLocation();
	const dispatch = useDispatch();
	return (
		<div className="footer-colored">
			<div className="footer-container container">
				<div className="footer-container-column">
					<img
						className="footer-logo"
						src={require(`./../../assets/images/v3-large-white.png`)}
						alt="logo Develott"
					/>
					<p>
						Rejoignez la table ronde du code, et ensemble, codez en roue libre !
					</p>
					<div className="socialmedia_container">
						<section className="socialmedia_container_section">
							<ul className="ul_media">
								<li>
									<a href="#">
										<i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fab fa-instagram"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fab fa-github"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fab fa-linkedin-in"></i>
									</a>
								</li>
							</ul>
						</section>
					</div>
				</div>
				<div className="footer-container-column">
					<p> © 2022 - Made with ♡</p>
					<p> Projet d'Apothéose</p>
					<p> Ecole O'clock</p>
					<p> Team Cassini</p>
				</div>
				<div className="footer-container-column">
					<p>
						<Link to="/projets">
							<span>Voir tous les projets</span>
						</Link>
					</p>
					<p>
						<Link
							to="/modal-charte"
							state={{ background: location }}
							onClick={() => dispatch(toggleCharteModalOpen())}
						>
							voir la charte
						</Link>
					</p>
					<p>
						<Link to="/charte">
							<span>Nos CGU</span>
						</Link>
					</p>
					<p>
						<Link to="/about">
							<span>Découvrir l'équipe</span>
						</Link>
					</p>
				</div>
			</div>
			<Outlet />
		</div>
	);
}

export default FooterColored;
