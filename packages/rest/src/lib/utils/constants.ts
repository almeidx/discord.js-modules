import { APIVersion } from 'discord-api-types/v9';
import type { RESTOptions } from '../REST';
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const Package = require('../../../package.json');

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
export const DefaultUserAgent = `DiscordBot (${Package.homepage}, ${Package.version})`;

export const DefaultRestOptions: Required<RESTOptions> = {
	api: 'https://discord.com/api',
	cdn: 'https://cdn.discordapp.com',
	offset: 50,
	retries: 3,
	timeout: 15_000,
	userAgentAppendix: `Node.js ${process.version}`,
	version: APIVersion,
};

/**
 * The events that the REST manager emits
 */
export const enum RESTEvents {
	Debug = 'restDebug',
	RateLimited = 'rateLimited',
}

export const ALLOWED_EXTENSIONS = ['webp', 'png', 'jpg', 'jpeg', 'gif'] as const;
export const ALLOWED_SIZES = [16, 32, 64, 128, 256, 512, 1024, 2048, 4096] as const;

export type ImageExtension = typeof ALLOWED_EXTENSIONS[number];
export type ImageSize = typeof ALLOWED_SIZES[number];
