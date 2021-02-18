import { Configuration, RequestArgs } from '@sdk/runtime';
import { PluginsApi } from '@sdk/apis/PluginsApi';
import { isNil } from "lodash";
import { proxyHandler } from './proxy-api.utils';

export class ApiService {
    private readonly _configuration: Configuration = new Configuration({
        basePath: 'http://localhost:3000',
        middleware: [
            {
                pre: (request: RequestArgs): RequestArgs => {
                    if (!isNil(request?.url)) {
                        const headers = !isNil(request.headers) ? request.headers : {};
                        return {
                            ...request,
                            headers,
                        };
                    }
                    return request;
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
