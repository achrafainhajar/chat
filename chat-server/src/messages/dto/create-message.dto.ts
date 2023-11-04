import { AbstractWsAdapter } from "@nestjs/websockets";
import { Message } from "../entities/message.entity";

export class CreateMessageDto {
    name: string;
    text: string;
    roomname: string;
}
