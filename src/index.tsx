// import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

class ReactClient {
    private _document: HTMLDivElement | null;
    constructor(target: string) {
        this._document = document.querySelector<HTMLDivElement>(target);
    }
    public render(): void {
        if (this._document === undefined) return;
        ReactDOM.render(
            <BrowserRouter basename={'/'}>
                <div className="page-content">
                    <div className="content-wrapper">
                    </div>
                </div>
            </BrowserRouter>,
            this._document
        )
    }
}

const client: ReactClient = new ReactClient('div[itemref="body"]');

window.addEventListener('DOMContentLoaded', () => client.render());

export default client;
