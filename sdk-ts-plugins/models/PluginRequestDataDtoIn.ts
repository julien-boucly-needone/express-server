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

import {
    PluginRequestData,
    PluginRequestDataConfig,
} from './';

/**
 * @export
 * @interface PluginRequestDataDtoIn
 */
export interface PluginRequestDataDtoIn {
    /**
     * @type {PluginRequestDataConfig}
     * @memberof PluginRequestDataDtoIn
     */
    pluginConfig: PluginRequestDataConfig;
    /**
     * @type {PluginRequestData}
     * @memberof PluginRequestDataDtoIn
     */
    pluginData: PluginRequestData;
}