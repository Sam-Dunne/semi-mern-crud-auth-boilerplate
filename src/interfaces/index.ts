import { Request } from 'express';

export interface I {

};

export interface IUsers {
    id?: number;
    email?: string;
    password?: string;
    role?: string;
    _created?: Date;
    name?: string;
};

export interface IPayload extends IUsers {
    userid?: number;
};

export interface IReqUser extends Request {
    user?: IPayload;
};

export interface IReqPayload extends Request {
    user?: {
        userid?: number;
        email?: string;
        role?: string
    }
};

export interface MySQLResponse {
    affectedRows: number;
    insertId: number;
}