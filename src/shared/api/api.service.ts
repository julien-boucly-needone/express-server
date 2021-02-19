import { Configuration, RequestArgs } from '@sdk/runtime';
import { PluginsApi } from '@sdk/apis/PluginsApi';
import { isNil } from "lodash";
import { proxyHandler } from './proxy-api.utils';
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

export class ApiService {
    private readonly _configuration: Configuration = new Configuration({
        basePath: 'http://localhost:3000',
        middleware: [
            {
                pre: (request: RequestArgs): RequestArgs => {
                    request.createXHR = () => new XMLHttpRequest();

                    const headers = !isNil(request.headers) ? request.headers : {};
                    // TODO: fix CORS origin...

                    return {
                        ...request,
                        headers
                    };
                },
            },
        ],
    });
    private readonly _pluginsApi: PluginsApi = new Proxy(
        new PluginsApi(this._configuration),
        proxyHandler(),
    );

    public get pluginsApi(): PluginsApi {
        return this._pluginsApi;
    }
}
