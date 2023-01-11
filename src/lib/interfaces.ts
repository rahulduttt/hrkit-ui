export interface Request {
	title: string;
	id: string;
	expand: {
		user: User;
		status: Status;
	};
}

export interface Status {
	id: string;
	name: string;
}

export interface User {
	id: string;
	name: string;
}
