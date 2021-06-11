export default interface APIResponse {
	files: Commit[];
}

export interface Commit {
	commitMessage: string;
	downloadURL: string;
	commitID: string;
	success: boolean;
	author: string;
	timestamp: string;
}
