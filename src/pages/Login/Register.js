function Register() {
  return (
    <div className="base-container">
      <div className="header">Register</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Prénom</label>
            <input type="text" name="firstName" placeholder="" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Nom</label>
            <input type="text" name="name" placeholder="" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="text" name="password" placeholder="" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirmer le mot de passe</label>
            <input type="text" name="password" placeholder="" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn">
          Register
        </button>
      </div>
    </div>
  );
}
export default Register;
