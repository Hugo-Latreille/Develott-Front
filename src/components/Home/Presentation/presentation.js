import "./presentation.scss";
import Footer from "../../Footer/footer";
import { useDispatch } from "react-redux";
import { toggleLoggingModalOpen } from "../../../pages/Login/authSlice";

import { Link } from "react-router-dom";

function Presentation() {
	const dispatch = useDispatch();
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className="presentation">
			<div className="presentation-container container">
				<div className="presentation-container-left">
					<h2 className="presentation-title">
						Prêts ? Recherchez... Dévelottez !
					</h2>
					<p className="presentation-text">
						Inscrivez-vous pour partager un projet et trouver des co-équipiers.
					</p>
					<div className="presentation-links">
						<Link
							onClick={() => {
								scrollToTop();
								dispatch(toggleLoggingModalOpen());
							}}
							className="main-button-white"
							to="/connexion"
						>
							{" "}
							Parcourir les projets
						</Link>
						<Link
							onClick={() => {
								scrollToTop();
								dispatch(toggleLoggingModalOpen());
							}}
							className="main-button-bg-white"
							to="/connexion"
						>
							{" "}
							S'inscrire
						</Link>
					</div>
				</div>
				<div className="presentation-container-right">
					<img
						className="presentation-img"
						src={require(`./../../../assets/images/hero-develott-presentation2.png`)}
						alt="Develott dashboard presentation"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Presentation;
