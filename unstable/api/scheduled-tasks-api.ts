/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ProblemDetails } from '../models';
// @ts-ignore
import { TaskInfo } from '../models';
// @ts-ignore
import { TaskTriggerInfo } from '../models';
/**
 * ScheduledTasksApi - axios parameter creator
 * @export
 */
export const ScheduledTasksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get task by id.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTask: async (taskId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskId' is not null or undefined
            assertParamExists('getTask', 'taskId', taskId)
            const localVarPath = `/ScheduledTasks/{taskId}`
                .replace(`{${"taskId"}}`, encodeURIComponent(String(taskId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get tasks.
         * @param {boolean} [isHidden] Optional filter tasks that are hidden, or not.
         * @param {boolean} [isEnabled] Optional filter tasks that are enabled, or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTasks: async (isHidden?: boolean, isEnabled?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/ScheduledTasks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)

            if (isHidden !== undefined) {
                localVarQueryParameter['isHidden'] = isHidden;
            }

            if (isEnabled !== undefined) {
                localVarQueryParameter['isEnabled'] = isEnabled;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Start specified task.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startTask: async (taskId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskId' is not null or undefined
            assertParamExists('startTask', 'taskId', taskId)
            const localVarPath = `/ScheduledTasks/Running/{taskId}`
                .replace(`{${"taskId"}}`, encodeURIComponent(String(taskId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Stop specified task.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stopTask: async (taskId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskId' is not null or undefined
            assertParamExists('stopTask', 'taskId', taskId)
            const localVarPath = `/ScheduledTasks/Running/{taskId}`
                .replace(`{${"taskId"}}`, encodeURIComponent(String(taskId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update specified task triggers.
         * @param {string} taskId Task Id.
         * @param {Array<TaskTriggerInfo>} taskTriggerInfo Triggers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTask: async (taskId: string, taskTriggerInfo: Array<TaskTriggerInfo>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskId' is not null or undefined
            assertParamExists('updateTask', 'taskId', taskId)
            // verify required parameter 'taskTriggerInfo' is not null or undefined
            assertParamExists('updateTask', 'taskTriggerInfo', taskTriggerInfo)
            const localVarPath = `/ScheduledTasks/{taskId}/Triggers`
                .replace(`{${"taskId"}}`, encodeURIComponent(String(taskId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(taskTriggerInfo, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ScheduledTasksApi - functional programming interface
 * @export
 */
export const ScheduledTasksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ScheduledTasksApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get task by id.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTask(taskId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTask(taskId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get tasks.
         * @param {boolean} [isHidden] Optional filter tasks that are hidden, or not.
         * @param {boolean} [isEnabled] Optional filter tasks that are enabled, or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTasks(isHidden?: boolean, isEnabled?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TaskInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTasks(isHidden, isEnabled, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Start specified task.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startTask(taskId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startTask(taskId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Stop specified task.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async stopTask(taskId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.stopTask(taskId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update specified task triggers.
         * @param {string} taskId Task Id.
         * @param {Array<TaskTriggerInfo>} taskTriggerInfo Triggers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTask(taskId: string, taskTriggerInfo: Array<TaskTriggerInfo>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTask(taskId, taskTriggerInfo, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ScheduledTasksApi - factory interface
 * @export
 */
export const ScheduledTasksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ScheduledTasksApiFp(configuration)
    return {
        /**
         * 
         * @summary Get task by id.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTask(taskId: string, options?: any): AxiosPromise<TaskInfo> {
            return localVarFp.getTask(taskId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get tasks.
         * @param {boolean} [isHidden] Optional filter tasks that are hidden, or not.
         * @param {boolean} [isEnabled] Optional filter tasks that are enabled, or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTasks(isHidden?: boolean, isEnabled?: boolean, options?: any): AxiosPromise<Array<TaskInfo>> {
            return localVarFp.getTasks(isHidden, isEnabled, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Start specified task.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startTask(taskId: string, options?: any): AxiosPromise<void> {
            return localVarFp.startTask(taskId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Stop specified task.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stopTask(taskId: string, options?: any): AxiosPromise<void> {
            return localVarFp.stopTask(taskId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update specified task triggers.
         * @param {string} taskId Task Id.
         * @param {Array<TaskTriggerInfo>} taskTriggerInfo Triggers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTask(taskId: string, taskTriggerInfo: Array<TaskTriggerInfo>, options?: any): AxiosPromise<void> {
            return localVarFp.updateTask(taskId, taskTriggerInfo, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ScheduledTasksApi - interface
 * @export
 * @interface ScheduledTasksApi
 */
export interface ScheduledTasksApiInterface {
    /**
     * 
     * @summary Get task by id.
     * @param {string} taskId Task Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledTasksApiInterface
     */
    getTask(taskId: string, options?: any): AxiosPromise<TaskInfo>;

    /**
     * 
     * @summary Get tasks.
     * @param {boolean} [isHidden] Optional filter tasks that are hidden, or not.
     * @param {boolean} [isEnabled] Optional filter tasks that are enabled, or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledTasksApiInterface
     */
    getTasks(isHidden?: boolean, isEnabled?: boolean, options?: any): AxiosPromise<Array<TaskInfo>>;

    /**
     * 
     * @summary Start specified task.
     * @param {string} taskId Task Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledTasksApiInterface
     */
    startTask(taskId: string, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Stop specified task.
     * @param {string} taskId Task Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledTasksApiInterface
     */
    stopTask(taskId: string, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Update specified task triggers.
     * @param {string} taskId Task Id.
     * @param {Array<TaskTriggerInfo>} taskTriggerInfo Triggers.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledTasksApiInterface
     */
    updateTask(taskId: string, taskTriggerInfo: Array<TaskTriggerInfo>, options?: any): AxiosPromise<void>;

}

/**
 * ScheduledTasksApi - object-oriented interface
 * @export
 * @class ScheduledTasksApi
 * @extends {BaseAPI}
 */
export class ScheduledTasksApi extends BaseAPI implements ScheduledTasksApiInterface {
    /**
     * 
     * @summary Get task by id.
     * @param {string} taskId Task Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledTasksApi
     */
    public getTask(taskId: string, options?: any) {
        return ScheduledTasksApiFp(this.configuration).getTask(taskId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get tasks.
     * @param {boolean} [isHidden] Optional filter tasks that are hidden, or not.
     * @param {boolean} [isEnabled] Optional filter tasks that are enabled, or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledTasksApi
     */
    public getTasks(isHidden?: boolean, isEnabled?: boolean, options?: any) {
        return ScheduledTasksApiFp(this.configuration).getTasks(isHidden, isEnabled, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Start specified task.
     * @param {string} taskId Task Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledTasksApi
     */
    public startTask(taskId: string, options?: any) {
        return ScheduledTasksApiFp(this.configuration).startTask(taskId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Stop specified task.
     * @param {string} taskId Task Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledTasksApi
     */
    public stopTask(taskId: string, options?: any) {
        return ScheduledTasksApiFp(this.configuration).stopTask(taskId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update specified task triggers.
     * @param {string} taskId Task Id.
     * @param {Array<TaskTriggerInfo>} taskTriggerInfo Triggers.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledTasksApi
     */
    public updateTask(taskId: string, taskTriggerInfo: Array<TaskTriggerInfo>, options?: any) {
        return ScheduledTasksApiFp(this.configuration).updateTask(taskId, taskTriggerInfo, options).then((request) => request(this.axios, this.basePath));
    }
}
