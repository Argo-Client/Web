import path from "path";

export const PLAY_STORE_LINK =
	process.env.NEXT_PUBLIC_PLAY_STORE_LINK ??
	"https://play.google.com/store/apps/details?id=nl.noxus.argo";

export const APP_STORE_LINK =
	process.env.NEXT_PUBLIC_APP_STORE_LINK ?? "https://apple.com";

export const COMMIT_URL =
	process.env.NEXT_PUBLIC_COMMIT_URL ??
	"https://api.argo-magister.nl/v1/commits";

export const APP_REPO = process.env.NEXT_PUBLIC_APP_REPO ?? "Argo-Client/App";

export const TWITTER =
	process.env.NEXT_PUBLIC_TWITTER ?? "https://twitter.com/ClientArgo";

export const COMMIT_PAGE_LENGTH = 5;

export const CACHE_LOCATION =
	process.env.CACHE_LOCATION ?? path.resolve("cache");

export const CACHE_TIMEOUT =
	parseInt(process.env.CACHE_TIMEOUT) || 1000 * 60 * 5;
