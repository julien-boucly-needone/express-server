// tslint:disable
/**
 * Lapala-plugins
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined } from '../runtime';
import {
    PluginsDtoIn,
    PluginsDtoOut,
} from '../models';

export interface PluginsControllerPluginsRequest {
    pluginsDtoIn: PluginsDtoIn;
}

/**
 * no description
 */
export class PluginsApi extends BaseAPI {

    /**
     */
    pluginsControllerPlugins = ({ pluginsDtoIn }: PluginsControllerPluginsRequest): Observable<PluginsDtoOut> => {
        throwIfNullOrUndefined(pluginsDtoIn, 'pluginsControllerPlugins');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<PluginsDtoOut>({
            path: '/plugins',
            method: 'POST',
            headers,
            body: pluginsDtoIn,
        });
    };

}
