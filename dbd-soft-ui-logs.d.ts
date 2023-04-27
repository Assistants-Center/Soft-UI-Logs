import { Client } from 'discord.js';

declare module '@dbd-soft-ui/logs' {
    export interface DLUOptions {
        key: string;
        dashboard_url: string;
    }

    export interface LogData {
        title: string;
        description: string;
    }

    export function register(client: Client, data: DLUOptions): Promise<void>;

    export function send(client: Client, data: LogData): Promise<void>;
}