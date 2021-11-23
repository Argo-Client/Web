export interface Commit {
	message: string;
	id: string;
	pending: boolean;
	author: {
		username: string;
		avatar: string;
	};
	timestamp: string;
	download?: string;
	success?: boolean;
}
