import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

const SYMBOLTRADE_URL = 'wss://stream.binance.com:9443/ws/';

export interface Message {
	p: string,

}

@Injectable()
export class BinanceSymbolPriceService {
	public messages: Subject<Message>;
	constructor(private wsService: WebsocketService) {

	}
	public connect(symbolPair:string){
		this.messages = <Subject<Message>> this.wsService
		.connect(SYMBOLTRADE_URL + symbolPair + '@aggTrade')
		.map((response: MessageEvent): Message => {
			let data = JSON.parse(response.data);
			return {
				p: data.p,

			}
		});
	}


}