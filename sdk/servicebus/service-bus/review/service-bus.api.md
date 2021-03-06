## API Report File for "@azure/service-bus"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AmqpMessage } from '@azure/amqp-common';
import { ApplicationTokenCredentials } from '@azure/ms-rest-nodeauth';
import { DataTransformer } from '@azure/amqp-common';
import { delay } from '@azure/amqp-common';
import { Delivery } from 'rhea-promise';
import { DeviceTokenCredentials } from '@azure/ms-rest-nodeauth';
import { HttpOperationResponse } from '@azure/core-http';
import Long from 'long';
import { MessagingError } from '@azure/amqp-common';
import { MSITokenCredentials } from '@azure/ms-rest-nodeauth';
import { ProxySettings } from '@azure/core-http';
import { ServiceClient } from '@azure/core-http';
import { TokenInfo } from '@azure/amqp-common';
import { TokenProvider } from '@azure/amqp-common';
import { TokenType } from '@azure/amqp-common';
import { UserTokenCredentials } from '@azure/ms-rest-nodeauth';
import { WebSocketImpl } from 'rhea-promise';

// @public
export type AuthorizationRule = {
    claimType: string;
    claimValue: string;
    rights: {
        accessRights?: string[];
    };
    keyName: string;
    primaryKey?: string;
    secondaryKey?: string;
};

// @public
export interface CorrelationFilter {
    contentType?: string;
    correlationId?: string;
    label?: string;
    messageId?: string;
    replyTo?: string;
    replyToSessionId?: string;
    sessionId?: string;
    to?: string;
    userProperties?: any;
}

// @public
export interface CreateQueueResponse extends QueueDetails {
    _response: HttpOperationResponse;
}

// @public
export interface CreateRuleResponse extends RuleDetails {
    _response: HttpOperationResponse;
}

// @public
export interface CreateSubscriptionResponse extends SubscriptionDetails {
    _response: HttpOperationResponse;
}

// @public
export interface CreateTopicResponse extends TopicDetails {
    _response: HttpOperationResponse;
}

export { DataTransformer }

// @public
export interface DeadLetterOptions {
    deadLetterErrorDescription: string;
    deadletterReason: string;
}

export { delay }

// @public
export interface DeleteQueueResponse {
    _response: HttpOperationResponse;
}

// @public
export interface DeleteRuleResponse {
    _response: HttpOperationResponse;
}

// @public
export interface DeleteSubscriptionResponse {
    _response: HttpOperationResponse;
}

// @public
export interface DeleteTopicResponse {
    _response: HttpOperationResponse;
}

export { Delivery }

// @public
export type EntityStatus = "Active" | "Creating" | "Deleting" | "ReceiveDisabled" | "SendDisabled" | "Disabled" | "Renaming" | "Restoring" | "Unknown";

// @public
export interface GetQueueResponse extends QueueDetails {
    _response: HttpOperationResponse;
}

// @public
export interface GetRuleResponse extends RuleDetails {
    _response: HttpOperationResponse;
}

// @public
export interface GetSubscriptionResponse extends SubscriptionDetails {
    _response: HttpOperationResponse;
}

// @public
export interface GetTopicResponse extends TopicDetails {
    _response: HttpOperationResponse;
}

export { HttpOperationResponse }

// @public
export interface ListQueuesResponse extends Array<QueueDetails> {
    _response: HttpOperationResponse;
}

// @public
export interface ListRequestOptions {
    skip?: number;
    top?: number;
}

// @public
export interface ListRulesResponse extends Array<RuleDetails> {
    _response: HttpOperationResponse;
}

// @public
export interface ListSubscriptionsResponse extends Array<SubscriptionDetails> {
    _response: HttpOperationResponse;
}

// @public
export interface ListTopicsResponse extends Array<TopicDetails> {
    _response: HttpOperationResponse;
}

// @public
export type MessageCountDetails = {
    activeMessageCount: number;
    deadLetterMessageCount: number;
    scheduledMessageCount: number;
    transferMessageCount: number;
    transferDeadLetterMessageCount: number;
};

// @public
export interface MessageHandlerOptions {
    autoComplete?: boolean;
    maxConcurrentCalls?: number;
    maxMessageAutoRenewLockDurationInSeconds?: number;
}

export { MessagingError }

// @public
export interface OnError {
    (error: MessagingError | Error): void;
}

// @public
export interface OnMessage {
    (message: ServiceBusMessage): Promise<void>;
}

// Warning: (ae-forgotten-export) The symbol "Client" needs to be exported by the entry point index.d.ts
//
// @public
export class QueueClient implements Client {
    close(): Promise<void>;
    createReceiver(receiveMode: ReceiveMode): Receiver;
    createReceiver(receiveMode: ReceiveMode, sessionOptions: SessionReceiverOptions): SessionReceiver;
    createSender(): Sender;
    readonly entityPath: string;
    static getDeadLetterQueuePath(queueName: string): string;
    readonly id: string;
    peek(maxMessageCount?: number): Promise<ReceivedMessageInfo[]>;
    peekBySequenceNumber(fromSequenceNumber: Long, maxMessageCount?: number): Promise<ReceivedMessageInfo[]>;
}

// @public
export interface QueueDetails {
    accessedOn?: string;
    authorizationRules?: AuthorizationRule[];
    autoDeleteOnIdle: string;
    createdOn?: string;
    deadLetteringOnMessageExpiration: boolean;
    defaultMessageTtl: string;
    duplicateDetectionHistoryTimeWindow: string;
    enableBatchedOperations: boolean;
    enableExpress?: boolean;
    enablePartitioning: boolean;
    entityAvailabilityStatus?: string;
    forwardDeadLetteredMessagesTo?: string;
    forwardTo?: string;
    isAnonymousAccessible?: boolean;
    lockDuration: string;
    maxDeliveryCount: number;
    maxSizeInMegabytes: number;
    messageCount?: number;
    messageCountDetails?: MessageCountDetails;
    queueName: string;
    requiresDuplicateDetection: boolean;
    requiresSession: boolean;
    sizeInBytes?: number;
    status?: EntityStatus;
    supportOrdering?: boolean;
    updatedOn?: string;
    userMetadata?: string;
}

// @public
export interface QueueOptions {
    authorizationRules?: AuthorizationRule[];
    autoDeleteOnIdle?: string;
    deadLetteringOnMessageExpiration?: boolean;
    defaultMessageTtl?: string;
    duplicateDetectionHistoryTimeWindow?: string;
    enableBatchedOperations?: boolean;
    enablePartitioning?: boolean;
    forwardDeadLetteredMessagesTo?: string;
    forwardTo?: string;
    lockDuration?: string;
    maxDeliveryCount?: number;
    maxSizeInMegabytes?: number;
    requiresDuplicateDetection?: boolean;
    requiresSession?: boolean;
    status?: EntityStatus;
    userMetadata?: string;
}

// @public
export interface QueueResponse extends QueueDetails {
    _response: HttpOperationResponse;
}

// @public
export interface ReceivedMessageInfo extends SendableMessageInfo {
    readonly _amqpMessage: AmqpMessage;
    readonly deadLetterSource?: string;
    readonly deliveryCount?: number;
    readonly enqueuedSequenceNumber?: number;
    readonly enqueuedTimeUtc?: Date;
    readonly expiresAtUtc?: Date;
    lockedUntilUtc?: Date;
    readonly lockToken?: string;
    readonly sequenceNumber?: Long;
}

// @public
export enum ReceiveMode {
    peekLock = 1,
    receiveAndDelete = 2
}

// @public
export class Receiver {
    close(): Promise<void>;
    getMessageIterator(): AsyncIterableIterator<ServiceBusMessage>;
    readonly isClosed: boolean;
    isReceivingMessages(): boolean;
    receiveDeferredMessage(sequenceNumber: Long): Promise<ServiceBusMessage | undefined>;
    receiveDeferredMessages(sequenceNumbers: Long[]): Promise<ServiceBusMessage[]>;
    receiveMessages(maxMessageCount: number, maxWaitTimeInSeconds?: number): Promise<ServiceBusMessage[]>;
    readonly receiveMode: ReceiveMode;
    registerMessageHandler(onMessage: OnMessage, onError: OnError, options?: MessageHandlerOptions): void;
    renewMessageLock(lockTokenOrMessage: string | ServiceBusMessage): Promise<Date>;
    }

// @public
export interface RuleDescription {
    action?: string;
    filter?: string | CorrelationFilter;
    name: string;
}

// @public
export interface RuleDetails {
    action?: SqlAction;
    createdOn: string;
    filter?: SqlFilter | CorrelationFilter;
    ruleName: string;
    subscriptionName: string;
    topicName: string;
}

// @public
export interface RuleOptions {
    action?: SqlAction;
    filter?: SqlFilter | CorrelationFilter;
}

// @public
export interface RuleResponse extends RuleDetails {
    _response: HttpOperationResponse;
}

// @public
export interface SendableMessageInfo {
    body: any;
    contentType?: string;
    correlationId?: string | number | Buffer;
    label?: string;
    messageId?: string | number | Buffer;
    partitionKey?: string;
    replyTo?: string;
    replyToSessionId?: string;
    scheduledEnqueueTimeUtc?: Date;
    sessionId?: string;
    timeToLive?: number;
    to?: string;
    userProperties?: {
        [key: string]: any;
    };
    viaPartitionKey?: string;
}

// @public
export class Sender {
    cancelScheduledMessage(sequenceNumber: Long): Promise<void>;
    cancelScheduledMessages(sequenceNumbers: Long[]): Promise<void>;
    close(): Promise<void>;
    readonly isClosed: boolean;
    scheduleMessage(scheduledEnqueueTimeUtc: Date, message: SendableMessageInfo): Promise<Long>;
    scheduleMessages(scheduledEnqueueTimeUtc: Date, messages: SendableMessageInfo[]): Promise<Long[]>;
    send(message: SendableMessageInfo): Promise<void>;
    sendBatch(messages: SendableMessageInfo[]): Promise<void>;
    }

// @public
export class ServiceBusAtomManagementClient extends ServiceClient {
    constructor(connectionString: string, options?: ServiceBusAtomManagementClientOptions);
    createQueue(queueName: string, queueOptions?: QueueOptions): Promise<CreateQueueResponse>;
    createRule(topicName: string, subscriptionName: string, ruleName: string, ruleOptions?: RuleOptions): Promise<CreateRuleResponse>;
    createSubscription(topicName: string, subscriptionName: string, subscriptionOptions?: SubscriptionOptions): Promise<CreateSubscriptionResponse>;
    createTopic(topicName: string, topicOptions?: TopicOptions): Promise<CreateTopicResponse>;
    deleteQueue(queueName: string): Promise<DeleteQueueResponse>;
    deleteRule(topicName: string, subscriptionName: string, ruleName: string): Promise<DeleteRuleResponse>;
    deleteSubscription(topicName: string, subscriptionName: string): Promise<DeleteSubscriptionResponse>;
    deleteTopic(topicName: string): Promise<DeleteTopicResponse>;
    getQueueDetails(queueName: string): Promise<GetQueueResponse>;
    getRuleDetails(topicName: string, subscriptioName: string, ruleName: string): Promise<GetRuleResponse>;
    getSubscriptionDetails(topicName: string, subscriptionName: string): Promise<GetSubscriptionResponse>;
    getTopicDetails(topicName: string): Promise<GetTopicResponse>;
    listQueues(listRequestOptions?: ListRequestOptions): Promise<ListQueuesResponse>;
    listRules(topicName: string, subscriptionName: string, listRequestOptions?: ListRequestOptions): Promise<ListRulesResponse>;
    listSubscriptions(topicName: string, listRequestOptions?: ListRequestOptions): Promise<ListSubscriptionsResponse>;
    listTopics(listRequestOptions?: ListRequestOptions): Promise<ListTopicsResponse>;
    updateQueue(queueName: string, queueOptions: QueueOptions): Promise<UpdateQueueResponse>;
    updateRule(topicName: string, subscriptionName: string, ruleName: string, ruleOptions: RuleOptions): Promise<UpdateRuleResponse>;
    updateSubscription(topicName: string, subscriptionName: string, subscriptionOptions: SubscriptionOptions): Promise<UpdateSubscriptionResponse>;
    updateTopic(topicName: string, topicOptions: TopicOptions): Promise<UpdateTopicResponse>;
}

// @public
export interface ServiceBusAtomManagementClientOptions {
    proxySettings?: ProxySettings;
}

// @public
export class ServiceBusClient {
    close(): Promise<any>;
    static createFromAadTokenCredentials(host: string, credentials: ApplicationTokenCredentials | UserTokenCredentials | DeviceTokenCredentials | MSITokenCredentials, options?: ServiceBusClientOptions): ServiceBusClient;
    static createFromConnectionString(connectionString: string, options?: ServiceBusClientOptions): ServiceBusClient;
    static createFromTokenProvider(host: string, tokenProvider: TokenProvider, options?: ServiceBusClientOptions): ServiceBusClient;
    createQueueClient(queueName: string): QueueClient;
    createSubscriptionClient(topicName: string, subscriptionName: string): SubscriptionClient;
    createTopicClient(topicName: string): TopicClient;
    readonly name: string;
}

// @public
export interface ServiceBusClientOptions {
    dataTransformer?: DataTransformer;
    webSocket?: WebSocketImpl;
    webSocketConstructorOptions?: any;
}

// Warning: (ae-forgotten-export) The symbol "ReceivedMessage" needs to be exported by the entry point index.d.ts
//
// @public
export class ServiceBusMessage implements ReceivedMessage {
    abandon(propertiesToModify?: {
        [key: string]: any;
    }): Promise<void>;
    readonly _amqpMessage: AmqpMessage;
    body: any;
    clone(): SendableMessageInfo;
    complete(): Promise<void>;
    contentType?: string;
    correlationId?: string | number | Buffer;
    deadLetter(options?: DeadLetterOptions): Promise<void>;
    readonly deadLetterSource?: string;
    defer(propertiesToModify?: {
        [key: string]: any;
    }): Promise<void>;
    readonly delivery: Delivery;
    readonly deliveryCount?: number;
    readonly enqueuedSequenceNumber?: number;
    readonly enqueuedTimeUtc?: Date;
    readonly expiresAtUtc?: Date;
    readonly isSettled: boolean;
    label?: string;
    lockedUntilUtc?: Date;
    readonly lockToken?: string;
    messageId?: string | number | Buffer;
    partitionKey?: string;
    replyTo?: string;
    replyToSessionId?: string;
    scheduledEnqueueTimeUtc?: Date;
    readonly sequenceNumber?: Long;
    sessionId?: string;
    timeToLive?: number;
    to?: string;
    userProperties?: {
        [key: string]: any;
    };
    viaPartitionKey?: string;
}

// @public
export interface SessionMessageHandlerOptions {
    autoComplete?: boolean;
    maxConcurrentCalls?: number;
}

// @public
export class SessionReceiver {
    close(): Promise<void>;
    getMessageIterator(): AsyncIterableIterator<ServiceBusMessage>;
    getState(): Promise<any>;
    readonly isClosed: boolean;
    isReceivingMessages(): boolean;
    peek(maxMessageCount?: number): Promise<ReceivedMessageInfo[]>;
    peekBySequenceNumber(fromSequenceNumber: Long, maxMessageCount?: number): Promise<ReceivedMessageInfo[]>;
    receiveDeferredMessage(sequenceNumber: Long): Promise<ServiceBusMessage | undefined>;
    receiveDeferredMessages(sequenceNumbers: Long[]): Promise<ServiceBusMessage[]>;
    receiveMessages(maxMessageCount: number, maxWaitTimeInSeconds?: number): Promise<ServiceBusMessage[]>;
    readonly receiveMode: ReceiveMode;
    registerMessageHandler(onMessage: OnMessage, onError: OnError, options?: SessionMessageHandlerOptions): void;
    renewSessionLock(): Promise<Date>;
    readonly sessionId: string | undefined;
    readonly sessionLockedUntilUtc: Date | undefined;
    setState(state: any): Promise<void>;
    }

// @public
export interface SessionReceiverOptions {
    maxSessionAutoRenewLockDurationInSeconds?: number;
    sessionId: string | undefined;
}

// @public
export type SqlAction = SqlFilter;

// @public
export interface SqlFilter {
    compatibilityLevel?: number;
    requiresPreprocessing?: boolean;
    sqlExpression?: string;
    sqlParameters?: SqlParameter[];
}

// @public
export type SqlParameter = {
    key: string;
    value: string | number;
    type: string;
};

// @public
export class SubscriptionClient implements Client {
    addRule(ruleName: string, filter: boolean | string | CorrelationFilter, sqlRuleActionExpression?: string): Promise<void>;
    close(): Promise<void>;
    createReceiver(receiveMode: ReceiveMode): Receiver;
    createReceiver(receiveMode: ReceiveMode, sessionOptions: SessionReceiverOptions): SessionReceiver;
    readonly defaultRuleName: string;
    readonly entityPath: string;
    getRules(): Promise<RuleDescription[]>;
    readonly id: string;
    peek(maxMessageCount?: number): Promise<ReceivedMessageInfo[]>;
    peekBySequenceNumber(fromSequenceNumber: Long, maxMessageCount?: number): Promise<ReceivedMessageInfo[]>;
    removeRule(ruleName: string): Promise<void>;
    readonly subscriptionName: string;
    readonly topicName: string;
}

// @public
export interface SubscriptionDetails {
    accessedOn?: string;
    autoDeleteOnIdle: string;
    createdOn: string;
    deadLetteringOnFilterEvaluationExceptions: boolean;
    deadLetteringOnMessageExpiration: boolean;
    defaultMessageTtl?: string;
    defaultRuleDescription?: any;
    enableBatchedOperations: boolean;
    enablePartitioning?: boolean;
    entityAvailabilityStatus: string;
    forwardDeadLetteredMessagesTo?: string;
    forwardTo?: string;
    lockDuration: string;
    maxDeliveryCount: number;
    maxSizeInMegabytes?: number;
    messageCount: number;
    messageCountDetails?: MessageCountDetails;
    requiresSession: boolean;
    sizeInBytes?: number;
    status?: EntityStatus;
    subscriptionName: string;
    topicName: string;
    updatedOn: string;
    userMetadata?: string;
}

// @public
export interface SubscriptionOptions {
    autoDeleteOnIdle?: string;
    deadLetteringOnFilterEvaluationExceptions?: boolean;
    deadLetteringOnMessageExpiration?: boolean;
    defaultMessageTtl?: string;
    enableBatchedOperations?: boolean;
    forwardDeadLetteredMessagesTo?: string;
    forwardTo?: string;
    lockDuration?: string;
    maxDeliveryCount?: number;
    requiresSession?: boolean;
    status?: EntityStatus;
    userMetadata?: string;
}

// @public
export interface SubscriptionResponse extends SubscriptionDetails {
    _response: HttpOperationResponse;
}

export { TokenInfo }

export { TokenProvider }

export { TokenType }

// @public
export class TopicClient implements Client {
    close(): Promise<void>;
    createSender(): Sender;
    readonly entityPath: string;
    static getDeadLetterTopicPath(topicName: string, subscriptionName: string): string;
    readonly id: string;
}

// @public
export interface TopicDetails {
    accessedOn?: string;
    authorizationRules?: AuthorizationRule[];
    autoDeleteOnIdle?: string;
    createdOn?: string;
    defaultMessageTtl: string;
    duplicateDetectionHistoryTimeWindow: string;
    enableBatchedOperations: boolean;
    enableExpress?: boolean;
    enablePartitioning: boolean;
    enableSubscriptionPartitioning?: boolean;
    entityAvailabilityStatus?: string;
    filteringMessagesBeforePublishing?: boolean;
    isAnonymousAccessible?: boolean;
    isExpress?: boolean;
    maxDeliveryCount?: number;
    maxSizeInMegabytes: number;
    messageCount?: number;
    messageCountDetails?: MessageCountDetails;
    requiresDuplicateDetection: boolean;
    sizeInBytes?: number;
    status?: EntityStatus;
    subscriptionCount?: number;
    supportOrdering: boolean;
    topicName: string;
    updatedOn?: string;
    userMetadata?: string;
}

// @public
export interface TopicOptions {
    authorizationRules?: AuthorizationRule[];
    autoDeleteOnIdle?: string;
    defaultMessageTtl?: string;
    duplicateDetectionHistoryTimeWindow?: string;
    enableBatchedOperations?: boolean;
    enablePartitioning?: boolean;
    maxSizeInMegabytes?: number;
    requiresDuplicateDetection?: boolean;
    status?: EntityStatus;
    supportOrdering?: boolean;
    userMetadata?: string;
}

// @public
export interface TopicResponse extends TopicDetails {
    _response: HttpOperationResponse;
}

// @public
export interface UpdateQueueResponse extends QueueDetails {
    _response: HttpOperationResponse;
}

// @public
export interface UpdateRuleResponse extends RuleDetails {
    _response: HttpOperationResponse;
}

// @public
export interface UpdateSubscriptionResponse extends SubscriptionDetails {
    _response: HttpOperationResponse;
}

// @public
export interface UpdateTopicResponse extends TopicDetails {
    _response: HttpOperationResponse;
}

export { WebSocketImpl }


// (No @packageDocumentation comment for this package)

```
