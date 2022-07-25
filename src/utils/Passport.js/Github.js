//TODO: refacto RTK query et traitement des données

useEffect(() => {
	const getUser = () => {
		fetch("http://localhost:3002/login/success", {
			method: "GET",
			credentials: "include",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"Access-Control-Allow-Credentials": true,
			},
		})
			.then((response) => {
				if (response.status === 200) return response.json();
				throw new Error("authentication error");
			})
			.then((resObject) => {
				console.log(resObject.user);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	getUser();
}, [isLoggingActive]);
