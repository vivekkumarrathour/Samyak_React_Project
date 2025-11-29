// Minimal mock backend wrapper (re-uses siteData demo DB)
import site from './siteData.js';

export async function login(email, password) {
	// delegate to siteData.login (simulates latency & validation)
	return site.login(email, password);
}

export async function getUserByEmail(email) {
	return site.getUserByEmail(email);
}

export async function getUserById(id) {
	return site.getUserById(id);
}

export default { login, getUserByEmail, getUserById };
