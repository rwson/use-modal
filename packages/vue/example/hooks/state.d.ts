import { ModalActionType } from './enums';
interface UpdateStatePayload {
    readonly type: ModalActionType;
    readonly payload?: {
        readonly id?: string;
        readonly props?: Record<string, any>;
        readonly merge?: boolean;
    };
}
export declare const state: Record<string, Record<string, any>>;
export declare const mutation: (value: UpdateStatePayload) => void;
export {};
