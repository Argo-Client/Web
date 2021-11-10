export default interface Register {
	downloadURL: string;
	author: string;
	authorImg: string;
	artifactID: number;
	commitMessage: string;
	timestamp: Date;
	commitID: string;
	success: boolean;
}

export interface RegisterResponse {
	files: Register[];
}
