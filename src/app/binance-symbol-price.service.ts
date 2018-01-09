import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

const CHAT_URL = 'wss://stream.binance.com:9443/ws/trxeth@aggTrade';

export interface Message {
	p: string,

}

@Injectable()
export class BinanceSymbolPriceService {
	public messages: Subject<Message>;

	constructor(wsService: WebsocketService) {
		this.messages = <Subject<Message>>wsService
			.connect(CHAT_URL)
			.map((response: MessageEvent): Message => {
				let data = JSON.parse(response.data);
				return {
					p: data.p,

				}
			});
	}
}