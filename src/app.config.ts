import path from "path";

export const PLAY_STORE_LINK =
	process.env.NEXT_PUBLIC_PLAY_STORE_LINK ??
	"https://play.google.com/store/apps/details?id=nl.noxus.argo";

export const APP_STORE_LINK =
	process.env.NEXT_PUBLIC_APP_STORE_LINK ?? "https://apple.com";

export const REGISTER_URL =
	process.env.NEXT_PUBLIC_REGISTER_URL ?? "https://download.argo-magister.nl";

export const APP_REPO = process.env.NEXT_PUBLIC_APP_REPO ?? "Argo-Client/App";

export const COMMIT_PAGE_LENGTH = 5;

export const CACHE_LOCATION =
	process.env.CACHE_LOCATION ?? path.resolve(".cache");

export const CACHE_TIMEOUT =
	parseInt(process.env.CACHE_TIMEOUT) || 1000 * 60 * 5;
